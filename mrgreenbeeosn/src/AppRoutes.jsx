// import  from "";
// const  = lazy(() => import(''))

import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Posts from './posts/Posts';

// 1_header import các chức năng và đường dẫn
  import Home from "./1_header/Home";
  import SearchIndex from "./1_header/SearchIndex";

// 2_main import các chức năng và đường dẫn
  import MrBeeOsn from "./2_main/msbeeosn/MrBeeOsn";

// 2_main import các chức năng và đường dẫn Accounting

  // 1. Accounting
  import AccountingIndex from "./2_main/accounting/_indexes/AccountingIndex";
  import Accounting from "./2_main/accounting/Accounting";
  import Accountant from "./2_main/accounting/Accountant";
  import Auditor from "./2_main/accounting/Auditor";
  import FinancialStatements from "./2_main/accounting/FinancialStatements";
  import AccountingEquation from "./2_main/accounting/AccountingEquation";

  // 2. Tax
  import TaxIndex from "./2_main/accounting/_indexes/TaxIndex";
  import ValueAddedTax from "./2_main/accounting/tax/ValueAddedTax";
  import Tariff from "./2_main/accounting/tax/Tariff";
  
  // 3. Finance
  import FinanceIndex from "./2_main/accounting/_indexes/FinanceIndex";
  import SaveForTheRainyDays from "./2_main/accounting/finance/SaveForTheRainyDays";
  import The503020Rule from "./2_main/accounting/finance/The503020Rule";
  
  // 4. Law
  import LawIndex from "./2_main/accounting/_indexes/LawIndex";
  import Law from "./2_main/accounting/law/Law";
  import TaxLaw from "./2_main/accounting/law/TaxLaw";
  
  // 5. Business
  import BusinessIndex from "./2_main/accounting/_indexes/BusinessIndex";
  import HumanResources from "./2_main/accounting/business/HumanResources";
  import PomodoroTechnique from "./2_main/accounting/business/PomodoroTechnique";

  // 6. Insurance
  import InsuranceIndex from "./2_main/accounting/_indexes/InsuranceIndex";

// 2_main import các chức năng và đường dẫn Kế Toán

  // 1. Kế Toán
  import KeToanIndex from "./2_main/ketoan/_indexes/KeToanIndex";
  import KeToan from "./2_main/ketoan/KeToan";
  import KeToanVien from "./2_main/ketoan/KeToanVien";
  import KiemToanVien from "./2_main/ketoan/KiemToanVien";
  import BaoCaoTaiChinh from "./2_main/ketoan/BaoCaoTaiChinh";
  import PhuongTrinhKeToan from "./2_main/ketoan/PhuongTrinhKeToan";
  
  // 2. Thuế
  import ThueIndex from "./2_main/ketoan/_indexes/ThueIndex";
  import ThueVAT from "./2_main/ketoan/thue/ThueVAT";
  import ThueTNCN from "./2_main/ketoan/thue/ThueTNCN";
  import ThueTNDN from "./2_main/ketoan/thue/ThueTNDN";
  import ThueTaiSan from "./2_main/ketoan/thue/ThueTaiSan";
  import ThueQuan from "./2_main/ketoan/thue/ThueQuan";

  // 3. Tài Chính
  import TaiChinhIndex from "./2_main/ketoan/_indexes/TaiChinhIndex";
  import QuyTac503020 from "./2_main/ketoan/taichinh/QuyTac503020";
  import HeoDat from "./2_main/ketoan/taichinh/HeoDat";
  import TietKiemChoNhungNgayMua from "./2_main/ketoan/taichinh/TietKiemChoNhungNgayMua";
  import TranhSuDungTheTinDung from "./2_main/ketoan/taichinh/TranhSuDungTheTinDung";
  
  // 4. Luật
  import LuatIndex from "./2_main/ketoan/_indexes/LuatIndex";
  import LuatThue from "./2_main/ketoan/luat/LuatThue";
  import LuatDoanhNghiep from "./2_main/ketoan/luat/LuatDoanhNghiep";

  // 5. Doanh Nghiệp
  import DoanhNghiepIndex from "./2_main/ketoan/_indexes/DoanhNghiepIndex";
  import DoanhNghiep from "./2_main/ketoan/doanhnghiep/DoanhNghiep";
  import NguyenTac5S from "./2_main/ketoan/doanhnghiep/NguyenTac5S";

  // 6. Bảo Hiểm
   import BaoHiemIndex from "./2_main/ketoan/_indexes/BaoHiemIndex";
  import BaoHiemXaHoi from "./2_main/ketoan/baohiem/BaoHiemXaHoi";
  import BaoHiemYTe from "./2_main/ketoan/baohiem/BaoHiemYTe";
  import BaoHiemThatNghiep from "./2_main/ketoan/baohiem/BaoHiemThatNghiep";

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (

    <Routes>

      <Route path="/" element={<Layout />}>
      <Route path="/:slug" element={<Posts />} />
      <Route path="/:category" element={<Posts />} />

        {/* 1_header Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        
        <Route path="/search" element={<SearchIndex />} />
        
        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />

        {/* 2_main Khai báo đường dẫn path cho Accounting */}

          {/* 1. Accounting */}
          <Route path="/accounting" element={<AccountingIndex />} />
          <Route path="/accounting/what-is-accounting?" element={<Accounting />} />
          <Route path="/accounting/what-is-an-accountant?" element={<Accountant />} />
          <Route path="/accounting/what-is-an-auditor?" element={<Auditor />} />
          <Route path="/accounting/what-are-financial-statements?" element={<FinancialStatements />} />
          <Route path="/accounting/what-is-the-accounting-equation?" element={<AccountingEquation />} />

          {/* 3. Tax */}
          <Route path="/tax" element={<TaxIndex />} />
          <Route path="/tax/what-is-value-added-tax?" element={<ValueAddedTax />} />
          <Route path="/tax/what-is-a-tariff?" element={<Tariff />} />
          
          {/* 3. Finance */}
          <Route path="/finance" element={<FinanceIndex />} />
          <Route path="/finance/what-is-save-for-the-rainy-days?" element={<SaveForTheRainyDays />} />
          <Route path="/finance/what-is-the-50-30-20-rule?" element={<The503020Rule />} />
          
          {/* 4. Law */}
          <Route path="/law" element={<LawIndex />} />
          <Route path="/law/what-is-law?" element={<Law />} />
          <Route path="/law/what-is-tax-law?" element={<TaxLaw />} />
          
          {/* 5. Business */}
          <Route path="/business" element={<BusinessIndex />} />
          <Route path="/business/what-is-human-resources?" element={<HumanResources />} />
          <Route path="/business/what-is-pomodoro-technique?" element={<PomodoroTechnique />} />

          {/* 6. Insurance */}
          <Route path="/insurance" element={<InsuranceIndex />} />

        {/* 2_main Khai báo đường dẫn path cho Kế Toán */}

          {/* 1. Kế Toán */}
          <Route path="/ke-toan" element={<KeToanIndex />} />
          <Route path="/ke-toan/ke-toan-la-gi?" element={<KeToan />} />
          <Route path="/ke-toan/ke-toan-vien-la-gi?" element={<KeToanVien />} />
          <Route path="/ke-toan/kiem-toan-vien-la-gi?" element={<KiemToanVien />} />
          <Route path="/ke-toan/bao-cao-tai-chinh-la-gi?" element={<BaoCaoTaiChinh />} />
          <Route path="/ke-toan/phuong-trinh-ke-toan-la-gi?" element={<PhuongTrinhKeToan />} />

          {/* 2. Thuế */}
          <Route path="/thue" element={<ThueIndex />} />
          <Route path="/thue/thue-vat-la-gi?" element={<ThueVAT />} />
          <Route path="/thue/thue-tncn-la-gi?" element={<ThueTNCN />} />
          <Route path="/thue/thue-tndn-la-gi?" element={<ThueTNDN />} />
          <Route path="/thue/thue-tai-san-la-gi?" element={<ThueTaiSan />} />
          <Route path="/thue/thue-quan-la-gi?" element={<ThueQuan />} />

          {/* 3. Tài Chính */}
          <Route path="/tai-chinh" element={<TaiChinhIndex />} />
          <Route path="/tai-chinh/quy-tac-50-30-20-la-gi?" element={<QuyTac503020 />} />
          <Route path="/tai-chinh/heo-dat-la-gi?" element={<HeoDat />} />
          <Route path="/tai-chinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?" element={<TietKiemChoNhungNgayMua />} />
          <Route path="/tai-chinh/tranh-su-dung-the-tin-dung-la-gi?" element={<TranhSuDungTheTinDung />} />

          {/* 4. Luật */}
          <Route path="/luat" element={<LuatIndex />} />
          <Route path="/luat/luat-thue-la-gi?" element={<LuatThue />} />
          <Route path="/luat/luat-doanh-nghiep-la-gi?" element={<LuatDoanhNghiep />} />

          {/* 5. Doanh Nghiệp */}
          <Route path="/doanh-nghiep" element={<DoanhNghiepIndex />} />
          <Route path="/doanh-nghiep/doanh-nghiep-la-gi?" element={<DoanhNghiep />} />
          <Route path="/doanh-nghiep/nguyen-tac-5S-la-gi?" element={<NguyenTac5S />} />
          
          {/* 6. Bảo Hiểm */}
          <Route path="/bao-hiem" element={<BaoHiemIndex />} />
          <Route path="/bao-hiem/bao-hiem-xa-hoi-la-gi?" element={<BaoHiemXaHoi />} />
          <Route path="/bao-hiem/bao-hiem-y-te-la-gi?" element={<BaoHiemYTe />} />
          <Route path="/bao-hiem/bao-hiem-that-nghiep-la-gi?" element={<BaoHiemThatNghiep />} />

      </Route>

    </Routes>

  );
}