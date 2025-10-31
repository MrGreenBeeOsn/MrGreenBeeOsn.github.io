import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Home(): React.JSX.Element {
  
  return (<>
     
  <main className="image">

    <article>

      <h1 className="margin-y-50 text-center">☘️ Welcome!</h1>

      <p className="quote">

        🐝 <Link to="/accounting/what-is-accounting?">Accounting</Link> is the system of <mark className="highlight-255-padding-0-4">recording, classifying, summarizing, and analyzing</mark> <mark className="highlight-255-padding-0-4">financial transactions</mark> of a business or individual. 📊

      </p>
      
      <p className="quote">

        🐝 <Link to="/ke-toan/ke-toan-la-gi?">Kế toán</Link> là một ngành nghề <mark className="highlight-255-padding-0-4">ghi chép, thu thập, sắp xếp và tổng hợp thông tin tài chính</mark> của một tổ chức.
        
      </p>

        <div className="grid">
          <div className="card2">
            <p className="text-small no-margin">
          
              ☕ Happy <mark className="highlight-tertiary-padding-2-4">reading</mark> today!&nbsp;

              <Link to="https://www.microsoft.com/en-us/edge/features/read-aloud" className="speaker-link" target="_blank" data-title="Play read aloud">

                <i className="fa-solid fa-volume-high speaker-icon">&nbsp;</i>

              </Link>

              <i className="fa-solid fa-book-open-reader reader-icon"></i>
        
            </p>
          </div>
        </div>

      <p className="margin-bottom-50 text-center text-small">
          
        __Summer, 2025 · by <Link to="/about">Mr. ßee - an Accounting Bee</Link>--
        
      </p>

    </article>

  </main>

  </>);
}