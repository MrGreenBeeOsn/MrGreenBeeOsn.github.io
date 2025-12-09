import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function BaoHiemIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}
      
        <KeToanTopic />
      
      {/* =============================
            6. Thuật ngữ Bảo hiểm
      ============================= */}

      <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-bao-hiem">Thuật ngữ Bảo hiểm</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch2 />
							
			</div>

      <div className="vocabulary-container">
                  
        {/* =============================
              Bảo hiểm Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="bao-hiem-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/bao-hiem/trac-nghiem-ve-bao-hiem">Trắc Nghiệm Về Bảo Hiểm</Link>
              </div>
            </li>


            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">
        
          {/* =============================
              Bảo Hiểm Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/bao-hiem/bao-hiem-xa-hoi-la-gi?">Bảo hiểm xã hội</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bao-hiem/bao-hiem-y-te-la-gi?">Bảo hiểm y tế</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/bao-hiem/bao-hiem-that-nghiep-la-gi?">Bảo hiểm thất nghiệp</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}