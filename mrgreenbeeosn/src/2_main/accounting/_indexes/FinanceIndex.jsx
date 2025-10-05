import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '/src/components/AccountingTopic';

export default function FinanceIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        Accounting Topic
      ============================= */}
                
      <AccountingTopic />

    {/* =============================
        3. Financial Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="financial-terms">Financial Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/finance/what-is-save-for-the-rainy-days?">Save for the rainy days</Link></li>
      
      <li><Link to="/finance/what-is-the-50-30-20-rule?">The 50/30/20 Rule</Link></li>

    </ul>

  </main>

  </>);
}