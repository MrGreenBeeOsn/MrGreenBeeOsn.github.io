import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import ExternalLink from './ExternalLink';

export default function AccountingTopic() {
  return (

    <div className="topic-container">

      {/* =============================
        1. Accounting Terms
      ============================= */}

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

        <HashLink smooth to="/insurance">
          <mark className="highlight-tertiary-padding-2-4">Insurance</mark>
        </HashLink>

			</div>

    </div>
    
  );
}