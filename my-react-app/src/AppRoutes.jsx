import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Accounting from "./1_header/Home_Accounting";
import Home_KeToan from "./1_header/Home_KeToan";

// 2_main import các chức năng và đường dẫn
import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";
import Accounting from "./2_main/accounting/Accounting";
import KeToan from "./2_main/ketoan/KeToan";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>

        {/* 1_header Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        <Route path="/accounting" element={<Home_Accounting />} />
        <Route path="/ketoan" element={<Home_KeToan />} />
        
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