// import  from "";
// const  = lazy(() => import(''))
// <Suspense fallback={<></>}></Suspense>

import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('./components/Layout'))
const Posts = lazy(() => import('./data/Posts'))

// 1_header import các chức năng và đường dẫn
  const Home = lazy(() => import('./1_header/Home'))
  const SearchIndex = lazy(() => import('./1_header/SearchIndex'))

// 2_main import các chức năng và đường dẫn
  const MrBeeOsn = lazy(() => import('./2_main/msbeeosn/MrBeeOsn'))
  const AboutIndex = lazy(() => import('./2_main/msbeeosn/_indexes/AboutIndex'))
  const ProjectIndex = lazy(() => import('./2_main/msbeeosn/_indexes/ProjectIndex'))
  const JourneyIndex = lazy(() => import('./2_main/msbeeosn/_indexes/JourneyIndex'))

// 2_main import các chức năng và đường dẫn Accounting

  // 1. Accounting
  const AccountingIndex = lazy(() => import('./2_main/accounting/_indexes/AccountingIndex'))
  const Accounting = lazy(() => import('./2_main/accounting/Accounting'))
  const Accountant = lazy(() => import('./2_main/accounting/Accountant'))
  const Auditor = lazy(() => import('./2_main/accounting/Auditor'))
  const FinancialStatements = lazy(() => import('./2_main/accounting/FinancialStatements'))
  const AccountingEquation = lazy(() => import('./2_main/accounting/AccountingEquation'))
  const FIFO = lazy(() => import('./2_main/accounting/FIFO'))

  // 2. Tax
  const TaxIndex = lazy(() => import('./2_main/accounting/_indexes/TaxIndex'))
  const ValueAddedTax = lazy(() => import('./2_main/accounting/tax/ValueAddedTax'))
  const Tariff = lazy(() => import('./2_main/accounting/tax/Tariff'))
  
  // 3. Finance
  const FinanceIndex = lazy(() => import('./2_main/accounting/_indexes/FinanceIndex'))
  const SaveForTheRainyDays = lazy(() => import('./2_main/accounting/finance/SaveForTheRainyDays'))
  const The503020Rule = lazy(() => import('./2_main/accounting/finance/The503020Rule'))
  
  // 4. Law
  const LawIndex = lazy(() => import('./2_main/accounting/_indexes/LawIndex'))
  const Law = lazy(() => import('./2_main/accounting/law/Law'))
  const TaxLaw = lazy(() => import('./2_main/accounting/law/TaxLaw'))
  
  // 5. Business
  const BusinessIndex = lazy(() => import('./2_main/accounting/_indexes/BusinessIndex'))
  const HumanResources = lazy(() => import('./2_main/accounting/business/HumanResources'))
  const PomodoroTechnique = lazy(() => import('./2_main/accounting/business/PomodoroTechnique'))

  // 6. Insurance
  const InsuranceIndex = lazy(() => import('./2_main/accounting/_indexes/InsuranceIndex'))
  const BusinessInsurance = lazy(() => import('./2_main/accounting/insurance/BusinessInsurance'))
  const HealthInsurance = lazy(() => import('./2_main/accounting/insurance/HealthInsurance'))

// 2_main import các chức năng và đường dẫn Kế Toán

  // 1. Kế Toán
  const KeToanIndex = lazy(() => import('./2_main/ketoan/_indexes/KeToanIndex'))
  const KeToan = lazy(() => import('./2_main/ketoan/KeToan'))
  const KeToanVien = lazy(() => import('./2_main/ketoan/KeToanVien'))
  const KiemToanVien = lazy(() => import('./2_main/ketoan/KiemToanVien'))
  const BaoCaoTaiChinh = lazy(() => import('./2_main/ketoan/BaoCaoTaiChinh'))
  const PhuongTrinhKeToan = lazy(() => import('./2_main/ketoan/PhuongTrinhKeToan'))
  const FIFOKT = lazy(() => import('./2_main/ketoan/FIFOKT'))
  
  // 2. Thuế
  const ThueIndex = lazy(() => import('./2_main/ketoan/_indexes/ThueIndex'))
  const ThueVAT = lazy(() => import('./2_main/ketoan/thue/ThueVAT'))
  const ThueTNCN = lazy(() => import('./2_main/ketoan/thue/ThueTNCN'))
  const ThueTNDN = lazy(() => import('./2_main/ketoan/thue/ThueTNDN'))
  const ThueTaiSan = lazy(() => import('./2_main/ketoan/thue/ThueTaiSan'))
  const ThueQuan = lazy(() => import('./2_main/ketoan/thue/ThueQuan'))

  // 3. Tài Chính
  const TaiChinhIndex = lazy(() => import('./2_main/ketoan/_indexes/TaiChinhIndex'))
  const QuyTac503020 = lazy(() => import('./2_main/ketoan/taichinh/QuyTac503020'))
  const HeoDat = lazy(() => import('./2_main/ketoan/taichinh/HeoDat'))
  const TietKiemChoNhungNgayMua = lazy(() => import('./2_main/ketoan/taichinh/TietKiemChoNhungNgayMua'))
  const TranhSuDungTheTinDung = lazy(() => import('./2_main/ketoan/taichinh/TranhSuDungTheTinDung'))
  
  // 4. Luật
  const LuatIndex = lazy(() => import('./2_main/ketoan/_indexes/LuatIndex'))
  const LuatThue = lazy(() => import('./2_main/ketoan/luat/LuatThue'))
  const LuatDoanhNghiep = lazy(() => import('./2_main/ketoan/luat/LuatDoanhNghiep'))

  // 5. Doanh Nghiệp
  const DoanhNghiepIndex = lazy(() => import('./2_main/ketoan/_indexes/DoanhNghiepIndex'))
  const DoanhNghiep = lazy(() => import('./2_main/ketoan/doanhnghiep/DoanhNghiep'))
  const NguyenTac5S = lazy(() => import('./2_main/ketoan/doanhnghiep/NguyenTac5S'))

  // 6. Bảo Hiểm
  const BaoHiemIndex = lazy(() => import('./2_main/ketoan/_indexes/BaoHiemIndex'))
  const BaoHiemXaHoi = lazy(() => import('./2_main/ketoan/baohiem/BaoHiemXaHoi'))
  const BaoHiemYTe = lazy(() => import('./2_main/ketoan/baohiem/BaoHiemYTe'))
  const BaoHiemThatNghiep = lazy(() => import('./2_main/ketoan/baohiem/BaoHiemThatNghiep'))

// 3. Test Tailwind
	const TestTailwind = lazy(() => import('./components/TestTailwind'))

// Xuất khẩu chức năng
export default function AppRoutes() {
  return (
  
  <Suspense fallback={<></>}>

    <Routes>

      <Route path="/" element={<Layout />}>

        <Route path="/:slug" element={<Posts />} />
        <Route path="/:category" element={<Posts />} />

        {/* 1_header Khai báo đường dẫn path cho Home */}
        <Route path="/" element={<Home />} />
        
        <Route path="/search" element={<SearchIndex />} />
        
        {/* 2_main Khai báo đường dẫn path cho Mr. Bee Osn */}
        <Route path="/mrbeeosn" element={<MrBeeOsn />} />
        <Route path="/about" element={<AboutIndex />} />
        <Route path="/project" element={<ProjectIndex />} />
        <Route path="/journey" element={<JourneyIndex />} />

        {/* 2_main Khai báo đường dẫn path cho Accounting */}

          {/* 1. Accounting */}
          <Route path="/accounting" element={<AccountingIndex />} />
          <Route path="/accounting/what-is-accounting?" element={<Accounting />} />
          <Route path="/accounting/what-is-an-accountant?" element={<Accountant />} />
          <Route path="/accounting/what-is-an-auditor?" element={<Auditor />} />
          <Route path="/accounting/what-are-financial-statements?" element={<FinancialStatements />} />
          <Route path="/accounting/what-is-the-accounting-equation?" element={<AccountingEquation />} />
          <Route path="/accounting/what-is-fifo?" element={<FIFO />} />

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
          <Route path="/insurance/what-is-business-insurance?" element={<BusinessInsurance />} />
          <Route path="/insurance/what-is-health-insurance?" element={<HealthInsurance />} />

        {/* 2_main Khai báo đường dẫn path cho Kế Toán */}

          {/* 1. Kế Toán */}
          <Route path="/ke-toan" element={<KeToanIndex />} />
          <Route path="/ke-toan/ke-toan-la-gi?" element={<KeToan />} />
          <Route path="/ke-toan/ke-toan-vien-la-gi?" element={<KeToanVien />} />
          <Route path="/ke-toan/kiem-toan-vien-la-gi?" element={<KiemToanVien />} />
          <Route path="/ke-toan/bao-cao-tai-chinh-la-gi?" element={<BaoCaoTaiChinh />} />
          <Route path="/ke-toan/phuong-trinh-ke-toan-la-gi?" element={<PhuongTrinhKeToan />} />
          <Route path="/ke-toan/fifo-la-gi?" element={<FIFOKT />} />

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

          {/* 3. Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />

      </Route>

    </Routes>

  </Suspense>

  );
}