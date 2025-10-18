import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/AccountingTopic';

export default function LawIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Accounting Topic
    ============================= */}
            
      <AccountingTopic />

    {/* =============================
        4. Law Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="law-terms">Law Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/law/what-is-law?">Law</Link></li>

          <li><Link to="/law/what-is-tax-law?">Tax law</Link></li>

          <li><Link to="/law/what-is-an-attorney?">Attorney</Link></li>

        </ul>

      </div>

    </div>

  </main>

  </>);
}