import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '@/components/ExternalLink';
import AccountingTopic from '@/components/AccountingTopic';

export default function AccountingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Accounting Topic
    ============================= */}
                
      <AccountingTopic />

    {/* =============================
        1. Accounting Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="accounting-terms">Accounting Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/accounting/what-is-accounting?">Accounting</Link></li>

          <li><Link to="/accounting/what-is-the-accounting-equation?">Accounting Equation</Link></li>

          <li><Link to="/accounting/what-is-fifo?">FIFO</Link></li>

          <li><Link to="/accounting/what-are-good-habits?">Good habits</Link></li>

        </ul>

      </div>

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/accounting/what-is-an-accountant?">Accountant</Link></li>

          <li><Link to="/accounting/what-is-an-auditor?">Auditor</Link></li>

        </ul>

      </div>

    </div>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="/accounting/what-are-financial-statements?">Financial Statements</Link></li>

          <li><Link to="/accounting/what-is-a-balance-sheet?">Balance Sheet</Link></li>

        </ul>

      </div>

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to="https://mrbluebeeosn.github.io/#/bookkeeping/what-is-bookkeeping">Bookkeeping <sup><ExternalLink /></sup></Link></li>

        </ul>

      </div>

    </div>

  </main>

  </>);
}