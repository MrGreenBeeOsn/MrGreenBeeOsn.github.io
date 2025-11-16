import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function TaiChinhIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}
      
        <KeToanTopic />

      {/* =============================
          3. Thuật ngữ Tài chính
      ============================= */}

      <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-tai-chinh">Thuật ngữ Tài chính</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/tai-chinh/quy-tac-50-30-20-la-gi?">Quy tắc 50/30/20</Link></li>
            
            <li><Link to="/tai-chinh/heo-dat-la-gi?">Heo đất</Link></li>

            <li><Link to="/tai-chinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?">Tiết kiệm cho những ngày mưa</Link></li>
            
            <li><Link to="/tai-chinh/tranh-su-dung-the-tin-dung-la-gi?">Tránh sử dụng thẻ tín dụng</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/tai-chinh/giam-doc-tai-chinh-la-ai?">Giám đốc tài chính</Link></li>

            <li><Link to="/tai-chinh/sinh-viên-tai-chinh-la-ai?">Sinh viên tài chính</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}