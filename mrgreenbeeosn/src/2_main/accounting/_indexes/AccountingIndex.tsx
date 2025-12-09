import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '@/components/icon/ExternalLink';
import AccountingTopic from '@/components/topic/AccountingTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';
import ADELER from '@/components/method/ADELER';

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

        <ADELER />
							
			</div>

      <div className="vocabulary-container">

				{/* =============================
              Accounting Quiz
        ============================= */}

				<details className="sub-box-fix-2 margin-bottom-20">
			
					<summary id="cpa-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

					<ul className="list-border1">

						<li>
              <div className="li-content">
                <Link to="/accounting/accounting-basic-practice">Accounting Basic Practice</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/basic-accounting-principles">Basic Accounting Principles</Link>
              </div>
            </li>
						
					</ul>

				</details>

        {/* =============================
              Accounting Quiz
        ============================= */}

				<details className="sub-box-fix-2 margin-bottom-20">
			
					<summary id="accounting-basic-practice"><mark className="highlight-secondary-padding-2-4">CPA</mark></summary>

					<ul className="list-border1">

						<li>
              <div className="li-content">
                <Link to="/accounting/cpa-multiple-choice">CPA Multiple Choice</Link>
              </div>
            </li>

            
						
					</ul>

				</details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Accounting Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-accounting?">Accounting</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-the-accounting-equation?">Accounting Equation</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-fifo?">FIFO</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-are-good-habits?">Good habits</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-accrual-accounting?">Accrual accounting</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-financial-accounting?">Financial accounting</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-a-T-account?">T-account</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Accountant
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-an-accountant?">Accountant</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-an-auditor?">Auditor</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-a-certified-Public-accountant?">Certified Public Accountant</Link>&nbsp;(CPA)
              </div>
            </li>
            
          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Financial Statements
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/accounting/what-are-financial-statements?">Financial Statements</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-a-balance-sheet?">Balance Sheet</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/accounting/what-is-a-cash-flow-statement?">Cash Flow Statement</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Bookkeeping
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="https://mrbluebeeosn.github.io/#/bookkeeping/what-is-bookkeeping">Bookkeeping <sup><ExternalLink /></sup></Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>

  </main>

  </>);
}