import { Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from "./pages/Home";
import Accounting from "./pages/Accounting";
import KeToan from "./pages/KeToan";
import MrBeeOsn from "./pages/MrBeeOsn";

export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/Accounting" element={<Accounting />} />
        <Route path="/KeToan" element={<KeToan />} />
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

      </Route>

    </Routes>

  );
}