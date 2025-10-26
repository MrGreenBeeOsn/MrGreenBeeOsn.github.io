import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '@/components/AccountingTopic';

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

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/tax/what-is-value-added-tax?">Value-added tax</Link> (VAT)</li>
            
            <li><Link to="/tax/what-is-a-tariff?">Tariff</Link></li>

          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}