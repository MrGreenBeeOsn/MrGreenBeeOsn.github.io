import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

// 1_header import các chức năng và đường dẫn
import Home from "./1_header/Home";
import Home_Accounting from "./1_header/Home_Accounting";
import Home_KeToan from "./1_header/Home_KeToan";

// 2_main import các chức năng và đường dẫn
import Mr_Bee_Osn from "./2_main/msbeeosn/Mr_Bee_Osn";

// 2_main import các chức năng và đường dẫn Accounting

  // 1. Accounting
  import Accounting from "./2_main/accounting/Accounting";
  import Accountant from "./2_main/accounting/Accountant";
  import Auditor from "./2_main/accounting/Auditor";
  import Financial_Statements from "./2_main/accounting/Financial_Statements";
  import Accounting_Equation from "./2_main/accounting/Accounting_Equation";

  // 2. Tax
  import Value_Added_Tax from "./2_main/accounting/tax/Value_Added_Tax";
  import Tariff from "./2_main/accounting/tax/Tariff";
  
  // 3. Finance
  import Save_For_The_Rainy_Days from "./2_main/accounting/finance/Save_For_The_Rainy_Days";
  import The_50_30_20_Rule from "./2_main/accounting/finance/The_50_30_20_Rule";
  
  // 4. Law
  import Law from "./2_main/accounting/law/Law";
  import Tax_Law from "./2_main/accounting/law/Tax_Law";
  
  // 5. Business
  import Human_Resources from "./2_main/accounting/business/Human_Resources";
  import Pomodoro_Technique from "./2_main/accounting/business/Pomodoro_Technique";

// 2_main import các chức năng và đường dẫn Kế Toán

  // 1. Kế Toán
  import Ke_Toan from "./2_main/ketoan/Ke_Toan";
  import Ke_Toan_Vien from "./2_main/ketoan/Ke_Toan_Vien";
  import Kiem_Toan_Vien from "./2_main/ketoan/Kiem_Toan_Vien";
  import Bao_Cao_Tai_Chinh from "./2_main/ketoan/Bao_Cao_Tai_Chinh";
  import Phuong_Trinh_Ke_Toan from "./2_main/ketoan/Phuong_Trinh_Ke_Toan";
  
  // 2. Thuế
  import Thue_VAT from "./2_main/ketoan/thue/Thue_VAT";
  import Thue_TNCN from "./2_main/ketoan/thue/Thue_TNCN";
  import Thue_TNDN from "./2_main/ketoan/thue/Thue_TNDN";
  import Thue_Tai_San from "./2_main/ketoan/thue/Thue_Tai_San";
  import Thue_Quan from "./2_main/ketoan/thue/Thue_Quan";
  
  // 3. Bảo Hiểm
  import Bao_Hiem_Xa_Hoi from "./2_main/ketoan/baohiem/Bao_Hiem_Xa_Hoi";
  import Bao_Hiem_Y_Te from "./2_main/ketoan/baohiem/Bao_Hiem_Y_Te";
  import Bao_Hiem_That_Nghiep from "./2_main/ketoan/baohiem/Bao_Hiem_That_Nghiep";
  
  // 4. Luật
  import Luat_Thue from "./2_main/ketoan/luat/Luat_Thue";
  import Luat_Doanh_Nghiep from "./2_main/ketoan/luat/Luat_Doanh_Nghiep";
  
  // 5. Tài Chính
  import Quy_Tac_50_30_20 from "./2_main/ketoan/taichinh/Quy_Tac_50_30_20";
  import Heo_Dat from "./2_main/ketoan/taichinh/Heo_Dat";
  import Tiet_Kiem_Cho_Nhung_Ngay_Mua from "./2_main/ketoan/taichinh/Tiet_Kiem_Cho_Nhung_Ngay_Mua";
  import Tranh_Su_Dung_The_Tin_Dung from "./2_main/ketoan/taichinh/Tranh_Su_Dung_The_Tin_Dung";
  
  // 6. Doanh Nghiệp
  import Doanh_Nghiep from "./2_main/ketoan/doanhnghiep/Doanh_Nghiep";
  import Nguyen_Tac_5S from "./2_main/ketoan/doanhnghiep/Nguyen_Tac_5S";


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
        <Route path="/mrbeeosn" element={<Mr_Bee_Osn />} />

        {/* 2_main Khai báo đường dẫn path cho Accounting */}

          {/* 1. Accounting */}
          <Route path="/accounting/what-is-accounting?" element={<Accounting />} />
          <Route path="/accounting/what-is-an-accountant?" element={<Accountant />} />
          <Route path="/accounting/what-is-an-auditor?" element={<Auditor />} />
          <Route path="/accounting/what-are-financial-statements?" element={<Financial_Statements />} />
          <Route path="/accounting/what-is-the-accounting-equation?" element={<Accounting_Equation />} />

          {/* 3. Tax */}
          <Route path="/tax/what-is-value-added-tax?" element={<Value_Added_Tax />} />
          <Route path="/tax/what-is-a-tariff?" element={<Tariff />} />
          
          {/* 3. Finance */}
          <Route path="/finance/what-is-save-for-the-rainy-days?" element={<Save_For_The_Rainy_Days />} />
          <Route path="/finance/what-is-the-50-30-20-rule?" element={<The_50_30_20_Rule />} />
          
          {/* 4. Law */}
          <Route path="/law/what-is-law?" element={<Law />} />
          <Route path="/law/what-is-tax-law?" element={<Tax_Law />} />
          
          {/* 5. Business */}
          <Route path="/business/what-is-human-resources?" element={<Human_Resources />} />
          <Route path="/business/what-is-pomodoro-technique?" element={<Pomodoro_Technique />} />

        {/* 2_main Khai báo đường dẫn path cho Kế Toán */}

          {/* 1. Kế Toán */}
          <Route path="/ketoan/ke-toan-la-gi?" element={<Ke_Toan />} />
          <Route path="/ketoan/ke-toan-vien-la-gi?" element={<Ke_Toan_Vien />} />
          <Route path="/ketoan/kiem-toan-vien-la-gi?" element={<Kiem_Toan_Vien />} />
          <Route path="/ketoan/bao-cao-tai-chinh-la-gi?" element={<Bao_Cao_Tai_Chinh />} />
          <Route path="/ketoan/phuong-trinh-ke-toan-la-gi?" element={<Phuong_Trinh_Ke_Toan />} />

          {/* 2. Thuế */}
          <Route path="/thue/thue-vat-la-gi?" element={<Thue_VAT />} />
          <Route path="/thue/thue-tncn-la-gi?" element={<Thue_TNCN />} />
          <Route path="/thue/thue-tndn-la-gi?" element={<Thue_TNDN />} />
          <Route path="/thue/thue-tai-san-la-gi?" element={<Thue_Tai_San />} />
          <Route path="/thue/thue-quan-la-gi?" element={<Thue_Quan />} />
          
          {/* 3. Bảo Hiểm */}
          <Route path="/baohiem/bao-hiem-xa-hoi-la-gi?" element={<Bao_Hiem_Xa_Hoi />} />
          <Route path="/baohiem/bao-hiem-y-te-la-gi?" element={<Bao_Hiem_Y_Te />} />
          <Route path="/baohiem/bao-hiem-that-nghiep-la-gi?" element={<Bao_Hiem_That_Nghiep />} />
          
          {/* 4. Luật */}
          <Route path="/luat/luat-thue-la-gi?" element={<Luat_Thue />} />
          <Route path="/luat/luat-doanh-nghiep-la-gi?" element={<Luat_Doanh_Nghiep />} />

          {/* 5. Tài Chính */}
          <Route path="/taichinh/quy-tac-50-30-20-la-gi?" element={<Quy_Tac_50_30_20 />} />
          <Route path="/taichinh/heo-dat-la-gi?" element={<Heo_Dat />} />
          <Route path="/taichinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?" element={<Tiet_Kiem_Cho_Nhung_Ngay_Mua />} />
          <Route path="/taichinh/tranh-su-dung-the-tin-dung-la-gi?" element={<Tranh_Su_Dung_The_Tin_Dung />} />

          {/* 6. Doanh Nghiệp */}
          <Route path="/doanhnghiep/doanh-nghiep-la-gi?" element={<Doanh_Nghiep />} />
          <Route path="/doanhnghiep/nguyen-tac-5S-la-gi?" element={<Nguyen_Tac_5S />} />
        
        

      </Route>

    </Routes>

  );
}