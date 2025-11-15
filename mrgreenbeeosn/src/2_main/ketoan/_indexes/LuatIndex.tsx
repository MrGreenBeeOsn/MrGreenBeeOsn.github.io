import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';

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
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/luat/luat-thue-la-gi?">Luật thuế</Link></li>
            
            <li><Link to="/luat/luat-doanh-nghiep-la-gi?">Luật doanh nghiệp</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/luat/chuyen-gia-luat-la-gi?">Chuyên gia luật</Link></li>

            <li><Link to="/luat/sinh-vien-luat-la-gi?">Sinh viên luật</Link></li>

            <li><Link to="/luat/cong-chung-vien-la-gi?">Công chứng viên</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}