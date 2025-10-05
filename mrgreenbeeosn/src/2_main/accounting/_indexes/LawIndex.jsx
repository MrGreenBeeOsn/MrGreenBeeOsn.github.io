import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '/src/components/AccountingTopic';

export default function LawIndex() {
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
    
    <ul className="list-border1">

      <li><Link to="/law/what-is-law?">Law</Link></li>

      <li><Link to="/law/what-is-tax-law?">Tax law</Link></li>

    </ul>

  </main>

  </>);
}