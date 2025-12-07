import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function InsuranceIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Accounting Topic
      ============================= */}
              
        <AccountingTopic />

      {/* =============================
          6. Insurance Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="insurance-terms">Insurance Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="vocabulary-container">
            
        {/* =============================
              Insurance Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="insurance-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/insurance/insurance-questions">Insurance Questions</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Insurance Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/insurance/what-is-business-insurance?">Business Insurance</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/insurance/what-is-health-insurance?">Health Insurance</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}