// components/VideoSearch.tsx / BY Grok
// YOUTUBE_API_KEY = 'AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8';

import React, { useRef, useState } from 'react';
import axios from 'axios';
// import SearchIcon from '@/components/icon/SearchIcon';
import { Search, X, Clock, AlertCircle, Loader2 } from 'lucide-react';

// components/VideoSearch.tsx
// import './VideoSearch.css';

// Icons
const SearchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const ClearIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
  };
}

interface Timestamp {
  time: number;
  text: string;
}

// Helper: Parse VTT caption
const parseVtt = (vttText: string): { start: number; text: string }[] => {
  const lines: { start: number; text: string }[] = [];
  const regex = /(\d{2}:)?(\d{2}):(\d{2})\.(\d{3})\s-->\s.*\n([\s\S]*?)(?=\n\n|$)/g;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(vttText)) !== null) {
    const hours = parseInt(match[1]?.replace(':', '') || '0', 10);
    const minutes = parseInt(match[2], 10);
    const seconds = parseInt(match[3], 10);
    const ms = parseInt(match[4], 10);
    const start = hours * 3600 + minutes * 60 + seconds + ms / 1000;
    const text = match[5].replace(/\n/g, ' ').trim();
    if (text) {
      lines.push({ start: Math.floor(start), text });
    }
  }
  return lines;
};

// Helper: Find word with word boundary
const findWordInCaptions = (captions: { start: number; text: string }[], word: string): Timestamp[] => {
  if (!word.trim()) return [];
  const escaped = word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`\\b${escaped}\\b`, 'i');
  return captions
    .filter(c => regex.test(c.text))
    .map(c => ({
      time: c.start,
      text: c.text.replace(regex, `**${word}**`),
    }))
    .slice(0, 10); // Limit results
};

const VideoSearch: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [analyzingVideoId, setAnalyzingVideoId] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [timestamps, setTimestamps] = useState<{ [key: string]: Timestamp[] }>({});

  // Thay bằng API key thật của bạn
  const YOUTUBE_API_KEY = 'AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8';

  // === Tìm kiếm video ===
  const searchVideos = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchWord.trim()) return;

    setLoading(true);
    setError('');
    setVideos([]);
    setTimestamps({});

    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          type: 'video',
          videoCaption: 'closedCaption', // Chỉ lấy video có phụ đề
          q: `${searchWord} English pronunciation interview OR lesson OR podcast`,
          maxResults: 8,
          key: YOUTUBE_API_KEY,
        },
      });

      const items: Video[] = response.data.items || [];
      setVideos(items);

      if (items.length === 0) {
        setError('Không tìm thấy video nào có phụ đề phù hợp.');
      }
    } catch (err: any) {
      setError('Lỗi kết nối YouTube API. Kiểm tra API key hoặc mạng.');
      console.error('Search error:', err);
    } finally {
      setLoading(false);
    }
  };

  // === Xóa tìm kiếm ===
  const clearSearch = () => {
    setSearchWord('');
    setVideos([]);
    setTimestamps({});
    setError('');
    setAnalyzingVideoId('');
  };

  // === Phân tích phụ đề video ===
  const analyzeVideo = async (videoId: string) => {
    if (!searchWord.trim()) return;

    setAnalyzingVideoId(videoId);
    setTimestamps(prev => ({ ...prev, [videoId]: [] }));

    try {
      // 1. Lấy danh sách caption tracks
      const listRes = await axios.get('https://www.googleapis.com/youtube/v3/captions', {
        params: {
          part: 'snippet',
          videoId,
          key: YOUTUBE_API_KEY,
        },
      });

      const tracks: any[] = listRes.data.items || [];
      if (tracks.length === 0) {
        throw new Error('Video không có phụ đề.');
      }

      // Ưu tiên phụ đề tiếng Anh (thủ công > tự động)
      const enTrack = tracks.find(t => t.snippet.language === 'en') ||
                      tracks.find(t => t.snippet.trackKind !== 'asr') ||
                      tracks[0];

      // 2. Tải file .vtt
      const captionUrl = `https://www.googleapis.com/youtube/v3/captions/${enTrack.id}?tfmt=vtt&key=${YOUTUBE_API_KEY}`;
      const vttRes = await axios.get(captionUrl);
      const vttText: string = vttRes.data;

      // 3. Parse và tìm từ khóa
      const captions = parseVtt(vttText);
      const results = findWordInCaptions(captions, searchWord);

      setTimestamps(prev => ({
        ...prev,
        [videoId]: results.length > 0
          ? results
          : [{ time: 0, text: `Không tìm thấy "${searchWord}" trong phụ đề.` }]
      }));
    } catch (err: any) {
      console.error('Caption error:', err);
      const msg = err.message.includes('No caption')
        ? 'Video không có phụ đề.'
        : err.message.includes('403') || err.message.includes('quota')
        ? 'Lỗi API: Kiểm tra key hoặc quota.'
        : 'Lỗi tải phụ đề.';
      setTimestamps(prev => ({
        ...prev,
        [videoId]: [{ time: 0, text: msg }]
      }));
    } finally {
      setAnalyzingVideoId('');
    }
  };

  // === Phát video tại thời điểm ===
  const playVideoAtTime = (videoId: string, time: number) => {
    const iframe = document.getElementById(`yt-${videoId}`) as HTMLIFrameElement;
    if (iframe && iframe.contentWindow) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1&enablejsapi=1`;
    }
  };

  // === Format thời gian ===
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-search-container">
      <h2>Tìm từ trong video YouTube (có phụ đề)</h2>

      <form onSubmit={searchVideos} className="search-form">
        <div className="input-group">
          <button
            type="submit"
            disabled={loading || !searchWord.trim()}
            className="search-button"
            aria-label="Tìm kiếm"
          >
            {loading ? <div className="loading-spinner"></div> : <SearchIcon />}
          </button>

          <div className="input-wrapper">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="Nhập từ/cụm từ tiếng Anh... (ví dụ: however, get along with)"
              className="search-input"
            />
            {searchWord && (
              <button
                type="button"
                onClick={clearSearch}
                className="clear-button"
                aria-label="Xóa"
              >
                <ClearIcon />
              </button>
            )}
          </div>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      {videos.length > 0 && (
        <div className="search-results-header">
          <div className="search-info">
            <span>Search results for: <strong>"{searchWord}"</strong></span>
            <span className="video-count">{videos.length} video</span>
          </div>
          <button onClick={clearSearch} className="clear-all-button">
            <ClearIcon /> Xóa tất cả
          </button>
        </div>
      )}

      <div className="video-grid">
        {videos.map((video) => (
          <div key={video.id.videoId} className="video-card">
            <div className="video-header">
              <h3 className="video-title" title={video.snippet.title}>
                {video.snippet.title}
              </h3>
              <p className="video-channel">{video.snippet.channelTitle}</p>
            </div>

            <div className="video-player">
              <iframe
                id={`yt-${video.id.videoId}`}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${video.id.videoId}?rel=0`}
                title={video.snippet.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            <div className="video-actions">
              <button
                onClick={() => analyzeVideo(video.id.videoId)}
                className="analyze-button"
                disabled={analyzingVideoId === video.id.videoId}
              >
                {analyzingVideoId === video.id.videoId ? (
                  <>
                    <div className="small-spinner"></div>
                    Đang tải phụ đề...
                  </>
                ) : (
                  `Tìm "${searchWord}" trong video`
                )}
              </button>

              {timestamps[video.id.videoId] && (
                <div className="timestamps-section">
                  <h4>Từ xuất hiện tại:</h4>
                  <div className="timestamps-list">
                    {timestamps[video.id.videoId].map((ts, idx) => (
                      <button
                        key={idx}
                        onClick={() => playVideoAtTime(video.id.videoId, ts.time)}
                        className="timestamp-button"
                        disabled={ts.time === 0}
                      >
                        <span className="timestamp-time">{formatTime(ts.time)}</span>
                        <span
                          className="timestamp-text"
                          dangerouslySetInnerHTML={{
                            __html: ts.text.replace(/\*\*(.*?)\*\*/g, '<mark>$1</mark>'),
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Trạng thái rỗng */}
      {videos.length === 0 && !loading && searchWord && (
        <div className="empty-state">
          <p>Không tìm thấy video nào cho "<strong>{searchWord}</strong>"</p>
          <p className="suggestion">Thử từ khóa khác, hoặc tìm cụm từ phổ biến</p>
        </div>
      )}

      {videos.length === 0 && !loading && !searchWord && (
        <div className="empty-state">
          <p>Nhập từ khóa để tìm video có chứa từ đó trong phụ đề</p>
          <p className="suggestion">Ví dụ: <em>however</em>, <em>although</em>, <em>get along with</em></p>
        </div>
      )}
    </div>
  );
};

export default VideoSearch;