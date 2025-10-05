import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import AccountingTopic from '/src/components/AccountingTopic';

export default function BusinessIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Accounting Topic
    ============================= */}
                
      <AccountingTopic />

    {/* =============================
        5. Business Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="business-terms">Business Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/business/what-is-human-resources?">Human Resources</Link></li>
      
      <li><Link to="/business/what-is-pomodoro-technique?">Pomodoro Technique</Link></li>

    </ul>

  </main>

  </>);
}