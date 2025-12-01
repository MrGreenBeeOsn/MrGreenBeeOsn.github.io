import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function FinanceIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
          Accounting Topic
        ============================= */}
                  
        <AccountingTopic />

      {/* =============================
          3. Financial Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="financial-terms">Financial Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="flex-container">

       <div className="sub-box">
       
          {/* =============================
              Financial Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/finance/what-is-save-for-the-rainy-days?">Save for the rainy days</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/finance/what-is-the-50-30-20-rule?">The 50/30/20 Rule</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Financial Officer
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/finance/what-is-a-chief-financial-officer?">Chief Financial Officer</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}