import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/VideoSearch2';

export default function ThueIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}

        <KeToanTopic />

      {/* =============================
          2. Thuật ngữ Thuế
      ============================= */}

      <h3 className="margin-y-50 text-center" id="thuat-ngu-thue">Thuật ngữ Thuế</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch2 />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          {/* =============================
              Thuế doanh nghiệp
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/thue-vat-la-gi?">Thuế VAT</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tncn-la-gi?">Thuế TNCN</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tndn-la-gi?">Thuế TNDN</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Thuế khác
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/thue-quan-la-gi?">Thuế quan</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tai-san-la-gi?">Thuế tài sản</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}