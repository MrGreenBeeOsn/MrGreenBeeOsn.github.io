import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';

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
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/business/what-is-human-resources?">Human Resources</Link></li>
            
            <li><Link to="/business/what-is-pomodoro-technique?">Pomodoro Technique</Link></li>

          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}