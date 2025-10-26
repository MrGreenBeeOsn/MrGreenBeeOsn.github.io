import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/AccountingTopic';

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

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/insurance/what-is-business-insurance?">Business Insurance</Link></li>
            
            <li><Link to="/insurance/what-is-health-insurance?">Health Insurance</Link></li>

          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}