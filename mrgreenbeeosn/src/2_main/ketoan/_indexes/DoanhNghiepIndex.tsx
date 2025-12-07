import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

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
        
        <VideoSearch2 />
							
			</div>

      <div className="vocabulary-container">
                  
        {/* =============================
              Doanh nghiệp Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="doanh-nghiep-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/doanh-nghiep/trac-nghiem-ve-doanh-nghiep">Trắc Nghiệm Về Doanh Nghiệp</Link>
              </div>
            </li>


            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Doanh Nghiệp Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/doanh-nghiep/doanh-nghiep-la-gi?">Doanh nghiệp</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/doanh-nghiep/nguyen-tac-5S-la-gi?">Nguyên tắc 5S</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/doanh-nghiep/giup-do-dong-nghiep-la-gi?">Giúp đỡ đồng nghiệp</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}