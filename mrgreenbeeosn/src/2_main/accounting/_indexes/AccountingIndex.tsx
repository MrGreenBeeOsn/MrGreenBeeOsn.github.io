import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '@/components/icon/ExternalLink';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

export default function AccountingIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Accounting Topic
      ============================= */}
                  
        <AccountingTopic />

      {/* =============================
          1. Accounting Terms
      ============================= */}
      
      <h3 className="margin-y-50 text-center" id="accounting-terms">Accounting Terms</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/accounting/what-is-accounting?">Accounting</Link></li>

            <li><Link to="/accounting/what-is-the-accounting-equation?">Accounting Equation</Link></li>

            <li><Link to="/accounting/what-is-fifo?">FIFO</Link></li>

            <li><Link to="/accounting/what-are-good-habits?">Good habits</Link></li>

            <li><Link to="/accounting/what-is-accrual-accounting?">Accrual accounting</Link></li>

            <li><Link to="/accounting/what-is-financial-accounting?">Financial accounting</Link></li>

            <li><Link to="/accounting/what-is-a-T-account?">T-account</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/accounting/what-is-an-accountant?">Accountant</Link></li>

            <li><Link to="/accounting/what-is-an-auditor?">Auditor</Link></li>

            <li><Link to="/accounting/what-is-a-certified-Public-accountant?">Certified Public Accountant</Link> (CPA)</li>

          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/accounting/what-are-financial-statements?">Financial Statements</Link></li>

            <li><Link to="/accounting/what-is-a-balance-sheet?">Balance Sheet</Link></li>

            <li><Link to="/accounting/what-is-a-cash-flow-statement?">Cash Flow Statement</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="https://mrbluebeeosn.github.io/#/bookkeeping/what-is-bookkeeping">Bookkeeping <sup><ExternalLink /></sup></Link></li>

          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}