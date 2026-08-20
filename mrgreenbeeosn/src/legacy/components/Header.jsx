import { Link } from "react-router-dom";
import logo from '/public/assets/images/bee-sage2.png';
import SearchIcon from './SearchIcon';

export default function Header() {
  return (

    <header>

      <nav>

        <div className="branding">
          <Link to="/"><img src={logo} className="logo" alt="Mr. Bee - Ong siêng năng"></img></Link>
          <span class="logo-text"></span>
        </div>

        <div className="nav-bar">

          <Link to="/accounting" className="nav-link">🅰️ccounting</Link>
          <Link to="/ke-toan" className="nav-link">🅺ế Toán</Link>

          <Link to="/search" className="nav-link">

            <SearchIcon 
              size={24} 
              fill="var(--secondary-color)" 
              stroke="var(--tertiary-color)"
            />

          </Link>
              
        </div>

      </nav>

    </header>
    
  );
}