import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';

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
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/finance/what-is-save-for-the-rainy-days?">Save for the rainy days</Link></li>
            
            <li><Link to="/finance/what-is-the-50-30-20-rule?">The 50/30/20 Rule</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/finance/what-is-a-chief-financial-officer?">Chief Financial Officer</Link></li>

          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}