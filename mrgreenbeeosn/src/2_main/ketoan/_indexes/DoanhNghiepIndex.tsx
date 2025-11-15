import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';

export default function DoanhNghiepIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}
      
        <KeToanTopic />

      {/* =============================
          5. Thuật ngữ Doanh nghiệp
      ============================= */}

      <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-doanh-nghiep">Thuật ngữ Doanh nghiệp</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/doanh-nghiep/doanh-nghiep-la-gi?">Doanh nghiệp</Link></li>
            
            <li><Link to="/doanh-nghiep/nguyen-tac-5S-la-gi?">Nguyên tắc 5S</Link></li>

            <li><Link to="/doanh-nghiep/giup-do-dong-nghiep-la-gi?">Giúp đỡ đồng nghiệp</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}