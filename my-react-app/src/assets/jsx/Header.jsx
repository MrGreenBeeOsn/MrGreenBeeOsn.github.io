import { Link } from "react-router-dom";

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/" className="nav-link">Home</Link>
        </div>

        <div>
          <ul>
            <li><Link to="/accounting" className="nav-link">🅰️ccounting</Link></li>
            <li><Link to="/ketoan" className="nav-link">KeToan</Link></li>
          </ul>
        </div>

      </nav>

    </header>
    
  );
}