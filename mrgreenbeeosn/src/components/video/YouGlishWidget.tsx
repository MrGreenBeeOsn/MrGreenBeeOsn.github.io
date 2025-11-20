import { useEffect, useRef } from 'react';

const YouGlishWidget = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Tạo script element
    const script = document.createElement('script');
    script.src = 'https://youglish.com/public/emb/widget.js';
    script.async = true;
    script.charset = 'utf-8';

    // Thêm script vào document
    document.body.appendChild(script);

    // Dọn dẹp khi component unmount
    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div ref={widgetRef}>
      <a
        id="yg-widget-0"
        className="youglish-widget"
        data-query="accounting"
        data-lang="english"
        data-accent="us"
        data-zones="us"
        data-components="8415"
        data-video-quality="highres"
        data-bkg-color="#ffffff80" 
        data-link-color="#7C9473" 
        data-ttl-color="#7C9473" 
        data-cap-color="#7C9473" 
        data-marker-color="#A2B79A"
        data-panels-bkg-color="#A2B79A"
        data-text-color="#689F38"
        data-keyword-color="#689F38"
        rel="nofollow"
        href="https://youglish.com"
      >
        Visit YouGlish.com
      </a>
    </div>
  );
};

export default YouGlishWidget;