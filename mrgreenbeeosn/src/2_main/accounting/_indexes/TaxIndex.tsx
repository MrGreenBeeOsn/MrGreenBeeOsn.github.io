import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function TaxIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Accounting Topic
      ============================= */}
          
        <AccountingTopic />

      {/* =============================
          2. Tax Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="tax-terms">Tax Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="vocabulary-container">
      
        {/* =============================
              Tax Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tax-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tax/questions-on-taxation">Questions On Taxation</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container margin-top-20">

        <div className="sub-box">

          {/* =============================
              Tax Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/tax/what-is-value-added-tax?">Value-added tax</Link>&nbsp;(VAT)
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/tax/what-is-a-tariff?">Tariff</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}