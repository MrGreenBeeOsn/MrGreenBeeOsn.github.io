import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Accounting from "./Accounting";
import KeToan from "./KeToan";
import MrBeeOsn from "./MrBeeOsn";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Header />

        <main>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/KeToan" element={<KeToan />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />
          </Routes>

        </main>

        <Footer />

      </div>
    </Router>
  );
}