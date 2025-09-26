import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Home() {
  return (<>
     
  <main className="image">

    <h1 className="margin-y-50 text-center">☘️ Welcome!</h1>

    <p className="quote">

      🐝 <Link to="/accounting/what-is-accounting?">Accounting</Link> is the system of <mark className="highlight6">recording, classifying, summarizing, and analyzing</mark> <mark className="highlight6">financial transactions</mark> of a business or individual. 📊

    </p>
    
    <p className="quote">

      🐝 <Link to="/ketoan/ke-toan-la-gi?">Kế toán</Link> là một ngành nghề <mark className="highlight6">ghi chép, thu thập, sắp xếp và tổng hợp thông tin tài chính</mark> của một tổ chức.
      
    </p>

    <div className="grid">
      <div className="card2">
        <p className="text-small">
      
          ☕ Happy <mark className="highlight5">reading</mark> today!
    
        </p>
      </div>
    </div>

    <p className="margin-bottom-50 text-center text-small">
        
      __Summer, 2025 - by <Link to="/mrbeeosn">Mr. Bee Osn</Link>--
      
    </p>

  </main>

  </>);
}