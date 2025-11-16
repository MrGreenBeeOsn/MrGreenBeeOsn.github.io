// components/VideoSearch.tsx / BY ChatGPT
// YOUTUBE_API_KEY = 'AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8';

import React, { useState } from 'react';
import axios from 'axios';
import SearchIcon from '@/components/icon/SearchIcon';
import { Search, X, Clock, AlertCircle, Loader2 } from 'lucide-react';

interface Video {
  id: { videoId: string };
  snippet: {
    title: string;
    thumbnails: { medium: { url: string } };
    channelTitle: string;
  };
}

interface TranscriptLine {
  time: number;
  text: string;
}

const VideoSearch: React.FC = () => {
  const [searchWord, setSearchWord] = useState("");
  const [videos, setVideos] = useState<Video[]>([]);
  const [timestamps, setTimestamps] = useState<Record<string, TranscriptLine[]>>({});
  const [loading, setLoading] = useState(false);
  const [analyzing, setAnalyzing] = useState<string>("");
  const [error, setError] = useState("");

  const API_KEY = "AIzaSyCwBbuwRX7Ufr0l2Ka4cxuTrDuCGSl-Yd8";

  /* ----------------------------------------
   *  🔍 SEARCH YOUTUBE VIDEOS
   * --------------------------------------*/
  const searchVideos = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchWord.trim()) return;

    setLoading(true);
    setError("");

    try {
      const response = await axios.get("https://www.googleapis.com/youtube/v3/search", {
        params: {
          part: "snippet",
          type: "video",
          videoCaption: "closedCaption",
          q: `"${searchWord}"`,
          maxResults: 8,
          key: API_KEY,
        },
      });

      setVideos(response.data.items);
    } catch (err) {
      setError("Không thể tìm kiếm video. Vui lòng thử lại.");
    } finally {
      setLoading(false);
    }
  };

  /* ----------------------------------------
   *  📝 FETCH YOUTUBE TRANSCRIPT
   * --------------------------------------*/
  const fetchTranscript = async (videoId: string): Promise<TranscriptLine[] | null> => {
    try {
      const url = `https://cors-anywhere.herokuapp.com/https://www.youtube.com/api/timedtext?lang=en&v=${videoId}`;

      const res = await fetch(url);
      const xml = await res.text();

      if (!xml) return null;

      const parser = new DOMParser();
      const doc = parser.parseFromString(xml, "text/xml");
      const nodes = Array.from(doc.getElementsByTagName("text"));

      return nodes.map((node) => ({
        time: parseFloat(node.getAttribute("start") || "0"),
        text: node.textContent || "",
      }));
    } catch (e) {
      console.error("Transcript error:", e);
      return null;
    }
  };

  /* ----------------------------------------
   *  🔍 FIND WORD INSIDE TRANSCRIPT
   * --------------------------------------*/
  const analyzeVideo = async (videoId: string) => {
    setAnalyzing(videoId);

    const transcript = await fetchTranscript(videoId);
    if (!transcript) {
      setTimestamps((prev) => ({ ...prev, [videoId]: [] }));
      setAnalyzing("");
      return;
    }

    const matched = transcript.filter((line) =>
      line.text.toLowerCase().includes(searchWord.toLowerCase())
    );

    setTimestamps((prev) => ({
      ...prev,
      [videoId]: matched,
    }));

    setAnalyzing("");
  };

  /* ----------------------------------------
   *  ▶ PLAY VIDEO AT SPECIFIC TIME
   * --------------------------------------*/
  const playAtTime = (videoId: string, time: number) => {
    const iframe = document.getElementById(`yt-${videoId}`) as HTMLIFrameElement;
    if (iframe) {
      iframe.src = `https://www.youtube.com/embed/${videoId}?start=${time}&autoplay=1`;
    }
  };

  const formatTime = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, "0");
    return `${m}:${s}`;
  };

  const clearAll = () => {
    setSearchWord("");
    setVideos([]);
    setTimestamps({});
  };

  return (
    <div style={{ padding: "20px", maxWidth: 900, margin: "0 auto" }}>
      <h2>Tìm từ khóa trong video YouTube</h2>

      {/* Search Form */}
      <form onSubmit={searchVideos} style={{ display: "flex", gap: 10, marginTop: 10 }}>
        <input
          type="text"
          placeholder="Nhập từ tiếng Anh..."
          value={searchWord}
          onChange={(e) => setSearchWord(e.target.value)}
          style={{ flex: 1, padding: 10, fontSize: 16 }}
        />
        <button type="submit" disabled={loading} style={{ padding: "10px 16px" }}>
          {loading ? "Đang tìm..." : "Tìm"}
        </button>
      </form>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {videos.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <strong>Search results for: "{searchWord}"</strong>
          <button onClick={clearAll} style={{ marginLeft: 20 }}>
            Xóa
          </button>
        </div>
      )}

      {/* Video Grid */}
      <div
        style={{
          marginTop: 20,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {videos.map((video) => {
          const videoId = video.id.videoId;

          return (
            <div
              key={videoId}
              style={{ border: "1px solid #ccc", padding: 12, borderRadius: 8 }}
            >
              <h4 style={{ marginBottom: 4 }}>{video.snippet.title}</h4>
              <p style={{ marginTop: 0, color: "#666" }}>{video.snippet.channelTitle}</p>

              <iframe
                id={`yt-${videoId}`}
                title={`YouTube video player - ${video.snippet.title}`}
                width="100%"
                height="200"
                src={`https://www.youtube.com/embed/${videoId}`}
                allowFullScreen
              ></iframe>

              <button
                onClick={() => analyzeVideo(videoId)}
                disabled={analyzing === videoId}
                style={{ marginTop: 10, padding: "8px 12px" }}
              >
                {analyzing === videoId
                  ? "Đang phân tích..."
                  : `Tìm "${searchWord}" trong video`}
              </button>

              {/* Timestamp List */}
              {timestamps[videoId] && (
                <div style={{ marginTop: 10 }}>
                  <h4>Vị trí từ xuất hiện:</h4>

                  {timestamps[videoId].length === 0 && (
                    <p>Không tìm thấy từ trong video.</p>
                  )}

                  {timestamps[videoId].map((line, i) => (
                    <button
                      key={i}
                      onClick={() => playAtTime(videoId, line.time)}
                      style={{
                        display: "block",
                        width: "100%",
                        textAlign: "left",
                        padding: 8,
                        marginBottom: 6,
                        background: "#f4f4f4",
                      }}
                    >
                      <strong>{formatTime(line.time)}</strong> —{" "}
                      {line.text.replace(/&amp;/g, "&")}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default VideoSearch;