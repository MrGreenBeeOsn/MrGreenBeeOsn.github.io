import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function LawIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Accounting Topic
      ============================= */}
              
        <AccountingTopic />

      {/* =============================
          4. Law Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="law-terms">Law Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Người lập trình
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/law/what-is-law?">Law</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/law/what-is-tax-law?">Tax law</Link>
              </div>
            </li>
            
          </ul>
        
        </div>

        <div className="sub-box">
        
          {/* =============================
              Lawer
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/law/what-is-an-attorney?">Attorney</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}