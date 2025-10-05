import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '/src/components/AccountingTopic';

export default function InsuranceIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Accounting Topic
    ============================= */}
            
      <AccountingTopic />

    {/* =============================
        6. Insurance Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="business-terms">Business Terms</h3>

    <div className="flex-container">

      <div className="sub-box">

        <ul className="list-border1">

          <li><Link to=""></Link></li>
          
          <li><Link to=""></Link></li>

        </ul>

      </div>

    </div>

  </main>

  </>);
}