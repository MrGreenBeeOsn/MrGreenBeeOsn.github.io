import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function LuatIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}
      
        <KeToanTopic />

      {/* =============================
            4. Thuật ngữ Luật
      ============================= */}

      <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-luat">Thuật ngữ Luật</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch2 />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Luật Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/luat/luat-thue-la-gi?">Luật thuế</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/luat/luat-doanh-nghiep-la-gi?">Luật doanh nghiệp</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Người Luật
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/luat/chuyen-gia-luat-la-gi?">Chuyên gia luật</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/luat/sinh-vien-luat-la-gi?">Sinh viên luật</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/luat/cong-chung-vien-la-gi?">Công chứng viên</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}