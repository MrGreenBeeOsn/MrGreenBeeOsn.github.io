import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-sage2.png';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} alt="Mr. Bee - Ong siêng năng"></img></Link>
        </div>

        <div>
          <ul>
            <li><Link to="/accounting" className="nav-link">🅰️ccounting</Link></li>
            <li><Link to="/ketoan" className="nav-link">🅺ế Toán</Link></li>
          </ul>
        </div>

      </nav>

    </header>
    
  );
}