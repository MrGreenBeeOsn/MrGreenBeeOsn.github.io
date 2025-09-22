import { Link } from "react-router-dom";

export default function Accounting_Home() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Accounting Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="accounting-terms">Accounting Terms</h3>
    
    <ul className="list-border1">

      <li><Link to="/accounting/what-is-accounting?">Accounting</Link></li>
      
      {/* <li><Link to="accountant?">Accountant</Link></li>

      <li><Link to="auditor?">Auditor</Link></li>

      <li><Link to="financial-statements?">Financial Statements</Link></li> */}

    </ul>

    {/* =============================
        2. Tax Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="tax-terms">Tax Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="value-added-tax?">Value-added tax</Link> (VAT)</li>
      
      <li><Link to="tariff?">Tariff</Link></li>

    </ul> */}

    {/* =============================
        3. Financial Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="financial-terms">Financial Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="save-for-the-rainy-days?">Save for the rainy days</Link></li>
      
      <li><Link to="the-50-30-20-rule?">The 50/30/20 Rule</Link></li>

    </ul> */}

    {/* =============================
        4. Law Terms
    ============================= */}
    
    <h3 className="margin-y-50 text-center" id="law-terms">Law Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="law?">Law</Link></li>

      <li><Link to="tax-law?">Tax law</Link></li>

    </ul> */}

    {/* =============================
        5. Business Terms
    ============================= */}
    
    <h3 className="margin-top-50 text-center" id="business-terms">Business Terms</h3>
    
    {/* <ul className="list-border1">

      <li><Link to="human-resources?">Human Resources</Link></li>
      
      <li><Link to="pomodoro-technique?">Pomodoro Technique</Link></li>

    </ul> */}

  </main>

  </>);
}