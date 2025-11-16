// components/VideoSearch.tsx / BY Copilot Web
// YOUTUBE_API_KEY = 'AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8';

import React, { useRef, useState } from 'react';
import axios from 'axios';
import SearchIcon from '@/components/icon/SearchIcon';
import { Search, X, Clock, AlertCircle, Loader2 } from 'lucide-react';

const ClearIcon: React.FC = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

interface Video {
  id: {
    videoId: string;
  };
  snippet: {
    title: string;
    thumbnails: {
      medium?: { url: string };
      default?: { url: string };
    };
    channelTitle: string;
  };
}

interface Timestamp {
  time: number;
  text: string;
}

const YOUTUBE_API_KEY = 'AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8'; // <-- Thay bằng API key của bạn

const VideoSearch: React.FC = () => {
  const [searchWord, setSearchWord] = useState<string>('');
  const [videos, setVideos] = useState<Video[]>([]);
  const [loadingSearch, setLoadingSearch] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [activeVideoId, setActiveVideoId] = useState<string>('');
  const [timestamps, setTimestamps] = useState<{ [key: string]: Timestamp[] }>({});
  const [loadingTimestamps, setLoadingTimestamps] = useState<{ [key: string]: boolean }>({});
  const iframeRefs = useRef<{ [key: string]: HTMLIFrameElement | null }>({});

  // Tìm video bằng YouTube Data API
  const searchVideos = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const q = searchWord.trim();
    if (!q) return;
    setLoadingSearch(true);
    setError('');
    setVideos([]);
    setTimestamps({});
    try {
      // search.list
      const searchResp = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          part: 'snippet',
          q: `${q} pronunciation example`,
          type: 'video',
          maxResults: 8,
          videoCaption: 'closedCaption',
          relevanceLanguage: 'en',
          key: YOUTUBE_API_KEY
        }
      });

      const items: Video[] = searchResp.data.items || [];
      // nếu có videoIds, gọi videos.list để lấy thông tin thêm (contentDetails) nếu cần
      // nhưng ở đây ta hiển thị snippet cơ bản
      setVideos(items);
    } catch (err) {
      console.error('Search error', err);
      setError('Lỗi khi tìm kiếm video. Vui lòng thử lại sau.');
    } finally {
      setLoadingSearch(false);
    }
  };

  // Xóa tìm kiếm
  const clearSearch = () => {
    setSearchWord('');
    setVideos([]);
    setTimestamps({});
    setError('');
  };

  // Gọi backend để lấy timestamps thực cho 1 hoặc nhiều video
  // Backend phải trả timestamps cho từng videoId
  const analyzeVideo = async (videoId: string) => {
    if (!searchWord.trim()) return;
    setActiveVideoId(videoId);
    setLoadingTimestamps(prev => ({ ...prev, [videoId]: true }));
    try {
      const resp = await axios.post('/api/find-timestamps', {
        videoIds: [videoId],
        searchWord,
        lang: 'en'
      });
      const data = resp.data;
      if (data && data.timestamps && data.timestamps[videoId]) {
        setTimestamps(prev => ({ ...prev, [videoId]: data.timestamps[videoId] }));
      } else {
        // nếu không có kết quả, set rỗng để thông báo không tìm thấy
        setTimestamps(prev => ({ ...prev, [videoId]: [] }));
      }
    } catch (err) {
      console.error('Analysis error', err);
      setTimestamps(prev => ({ ...prev, [videoId]: [] }));
      setError('Lỗi khi phân tích phụ đề. Vui lòng thử lại hoặc kiểm tra backend.');
    } finally {
      setActiveVideoId('');
      setLoadingTimestamps(prev => ({ ...prev, [videoId]: false }));
    }
  };

  // Phát video tại thời điểm cụ thể
  const playVideoAtTime = (videoId: string, time: number) => {
    const iframe = iframeRefs.current[videoId];
    if (iframe) {
      // reload với start param; đơn giản và tương thích
      const base = `https://www.youtube.com/embed/${videoId}`;
      iframe.src = `${base}?start=${Math.max(0, Math.floor(time))}&autoplay=1&rel=0`;
    } else {
      // nếu iframe chưa mount, setActiveVideoId để có thể scroll hoặc mở modal (nâng cao)
      window.open(`https://www.youtube.com/watch?v=${videoId}&t=${Math.floor(time)}s`, '_blank');
    }
  };

  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="video-search-container">
      <h2>Tìm kiếm từ trong video YouTube</h2>

      <form onSubmit={searchVideos} className="search-form">
        <div className="input-group">
          <button
            type="submit"
            disabled={loadingSearch || !searchWord.trim()}
            className="search-button"
            aria-label="Search"
          >
            {loadingSearch ? <div className="loading-spinner" /> : <SearchIcon />}
          </button>

          <div className="input-wrapper">
            <input
              type="text"
              value={searchWord}
              onChange={(e) => setSearchWord(e.target.value)}
              placeholder="Nhập từ hoặc cụm từ tiếng Anh..."
              className="search-input"
            />
            {searchWord && (
              <button
                type="button"
                onClick={clearSearch}
                className="clear-button"
                aria-label="Clear search"
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
            <span>
              Search results for: <strong>"{searchWord}"</strong>
            </span>
            <span className="video-count">{videos.length} video</span>
          </div>
          <button onClick={clearSearch} className="clear-all-button" aria-label="Clear all">
            <ClearIcon />
            Xóa tất cả
          </button>
        </div>
      )}

      <div className="video-grid">
        {videos.map((video) => {
          const vid = video.id.videoId;
          return (
            <div key={vid} className="video-card">
              <div className="video-header">
                <h3 className="video-title">{video.snippet.title}</h3>
                <p className="video-channel">{video.snippet.channelTitle}</p>
              </div>

              <div className="video-player">
                <iframe
                  id={`yt-${vid}`}
                  ref={(el: HTMLIFrameElement | null) => { iframeRefs.current[vid] = el; }}
                  width="100%"
                  height="200"
                  src={`https://www.youtube.com/embed/${vid}`}
                  title={video.snippet.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="video-actions">
                <button
                  onClick={() => analyzeVideo(vid)}
                  className="analyze-button"
                  disabled={!!loadingTimestamps[vid]}
                >
                  {loadingTimestamps[vid] ? (
                    <>
                      <div className="small-spinner" />
                      Đang phân tích...
                    </>
                  ) : (
                    `Tìm "${searchWord}" trong video`
                  )}
                </button>

                {timestamps[vid] && (
                  <div className="timestamps-section">
                    <h4>Từ xuất hiện tại</h4>
                    {timestamps[vid].length === 0 ? (
                      <div className="no-timestamps">Không tìm thấy từ trong phụ đề</div>
                    ) : (
                      <div className="timestamps-list">
                        {timestamps[vid].map((ts, idx) => (
                          <button
                            key={idx}
                            onClick={() => playVideoAtTime(vid, ts.time)}
                            className="timestamp-button"
                          >
                            <span className="timestamp-time">{formatTime(ts.time)}</span>
                            <span className="timestamp-text">{ts.text}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {videos.length === 0 && !loadingSearch && searchWord && (
        <div className="empty-state">
          <p>
            Không tìm thấy video nào cho <strong>"{searchWord}"</strong>
          </p>
          <p className="suggestion">Thử với từ khóa khác hoặc kiểm tra chính tả</p>
        </div>
      )}

      {videos.length === 0 && !loadingSearch && !searchWord && (
        <div className="empty-state">
          <p>Nhập từ khóa để tìm kiếm video có chứa từ đó</p>
          <p className="suggestion">Ví dụ: "however", "get along with", "pronunciation"</p>
        </div>
      )}
    </div>
  );
};

export default VideoSearch;