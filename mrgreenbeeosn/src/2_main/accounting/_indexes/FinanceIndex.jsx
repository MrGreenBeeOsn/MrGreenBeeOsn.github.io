import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from '../../../components/ExternalLink';

export default function FinanceIndex() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Accounting Terms
    ============================= */}

    <div className="topic-container">

      <div  className="flex-topic">
					
        <HashLink smooth to="/accounting">
          <mark className="highlight-tertiary-padding-2-4">Accounting</mark>
        </HashLink>

        <HashLink smooth to="/tax">
          <mark className="highlight-tertiary-padding-2-4">Tax</mark>
        </HashLink>

        <HashLink smooth to="/finance">
          <mark className="highlight-tertiary-padding-2-4">Finance</mark>
        </HashLink>

        <HashLink smooth to="/law">
          <mark className="highlight-tertiary-padding-2-4">Law</mark>
        </HashLink>

        <HashLink smooth to="/business">
          <mark className="highlight-tertiary-padding-2-4">Business</mark>
        </HashLink>

			</div>

    </div>

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