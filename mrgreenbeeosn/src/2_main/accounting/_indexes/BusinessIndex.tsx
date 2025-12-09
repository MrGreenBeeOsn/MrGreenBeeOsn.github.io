import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function BusinessIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Accounting Topic
      ============================= */}
                  
        <AccountingTopic />

      {/* =============================
          5. Business Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="business-terms">Business Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="vocabulary-container margin-top-20">
            
        {/* =============================
              Business Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="business-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/business/business-multiple-choice">Business Multiple Choice</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Business Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/business/what-is-human-resources?">Human Resources</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/business/what-is-pomodoro-technique?">Pomodoro Technique</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}