import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Accounting_Home from "./1_header/Accounting_Home";
import KeToan_Home from "./1_header/KeToan_Home";

// 2_main import các chức năng và đường dẫn
import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";
import Accounting from "./2_main/accounting/Accounting";
import KeToan from "./2_main/ketoan/KeToan";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        {/* 1_header Khai báo đường dẫn path cho Accounting */}
        <Route path="/" element={<Home />} />
        <Route path="/accounting" element={<Accounting_Home />} />
        <Route path="/ketoan" element={<KeToan_Home />} />
        
        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Accounting */}
        <Route path="/accounting/what-is-accounting?" element={<Accounting />} />


        {/* 2_main Khai báo đường dẫn path cho Kế Toán */}
        <Route path="/ketoan/ke-toan-la-gi?" element={<KeToan />} />
        

      </Route>

    </Routes>

  );
}