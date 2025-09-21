import { Routes, Route } from 'react-router-dom';
import { Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Accounting from "./pages/Accounting";
import KeToan from "./pages/KeToan";
import MrBeeOsn from "./pages/MrBeeOsn";

export default function AppRoutes() {
  return (

    <Routes>

      <div className="app">

        <Header />

        <main>
        
            <Route path="/" element={<Home />} />
            <Route path="/Accounting" element={<Accounting />} />
            <Route path="/KeToan" element={<KeToan />} />
            <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        </main>

        <Footer />

      </div>

    </Routes>

  );
}