// import  from "";
// const  = lazy(() => import(''))
// <Suspense fallback={<></>}></Suspense>

import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const Layout = lazy(() => import('@/components/body/Layout'));
const Posts = lazy(() => import('@/data/Posts'));

// 1_header import các chức năng và đường dẫn
  const Home = lazy(() => import('@/1_header/Home'));
  const SearchIndex = lazy(() => import('@/1_header/SearchIndex'));

// 2_main import các chức năng và đường dẫn
  const MrBeeOsn = lazy(() => import('@/2_main/msbeeosn/MrBeeOsn'));
  const AboutIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/AboutIndex'));
  const ProjectIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ProjectIndex'));
  const JourneyIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/JourneyIndex'));
  const ContactIndex = lazy(() => import('@/2_main/msbeeosn/_indexes/ContactIndex'));
  const Portfolio = lazy(() => import('@/2_main/msbeeosn/_indexes/Portfolio'));

// 2_main import các chức năng và đường dẫn Accounting

  // 1. Accounting
  const AccountingIndex = lazy(() => import('@/2_main/accounting/_indexes/AccountingIndex'));
  const Accounting = lazy(() => import('@/2_main/accounting/Accounting'));
  const Accountant = lazy(() => import('@/2_main/accounting/Accountant'));
  const Auditor = lazy(() => import('@/2_main/accounting/Auditor'));
  const FinancialStatements = lazy(() => import('@/2_main/accounting/FinancialStatements'));
  const AccountingEquation = lazy(() => import('@/2_main/accounting/AccountingEquation'));
  const FIFO = lazy(() => import('@/2_main/accounting/FIFO'));
  const GoodHabits = lazy(() => import('@/2_main/accounting/GoodHabits'));
  const BalanceSheet = lazy(() => import('@/2_main/accounting/BalanceSheet'));
  const CashFlowStatement = lazy(() => import('@/2_main/accounting/CashFlowStatement'));
  const AccrualAccounting = lazy(() => import('@/2_main/accounting/AccrualAccounting'));
  const FinancialAccounting = lazy(() => import('@/2_main/accounting/FinancialAccounting'));
  const TAccount = lazy(() => import('@/2_main/accounting/TAccount'));
  const CertifiedPublicAccountant = lazy(() => import('@/2_main/accounting/CertifiedPublicAccountant'));

  // Quiz
  const AccountingBasicPractice = lazy(() => import('@/2_main/accounting/quiz/AccountingBasicPractice'));
  const BasicAccountingPrinciples = lazy(() => import('@/2_main/accounting/quiz/BasicAccountingPrinciples'));
  const CashAccrualAccounting = lazy(() => import('@/2_main/accounting/quiz/CashAccrualAccounting'));
  const ForensicAccountingQuiz = lazy(() => import('@/2_main/accounting/quiz/ForensicAccountingQuiz'));
  const InternationalAccountingQuiz = lazy(() => import('@/2_main/accounting/quiz/InternationalAccountingQuiz'));
  const ManagerialAccountingQuiz = lazy(() => import('@/2_main/accounting/quiz/ManagerialAccountingQuiz'));

  // CPA
  const CPAMultipleChoice = lazy(() => import('@/2_main/accounting/quiz/cpa/CPAMultipleChoice'));

  // FS
  const FSMultipleChoice = lazy(() => import('@/2_main/accounting/quiz/fs/FSMultipleChoice'));

  // CFS
  const ConsolidatedFSQuiz = lazy(() => import('@/2_main/accounting/quiz/cfs/ConsolidatedFSQuiz'));

  // CFA
  const FSAnalysisQuiz = lazy(() => import('@/2_main/accounting/quiz/fsa/FSAnalysisQuiz'));

  // Audit
  const AuditQuestions = lazy(() => import('@/2_main/accounting/quiz/audit/AuditQuestions'));

  // 2. Tax
  const TaxIndex = lazy(() => import('@/2_main/accounting/_indexes/TaxIndex'));
  const ValueAddedTax = lazy(() => import('@/2_main/accounting/tax/ValueAddedTax'));
  const Tariff = lazy(() => import('@/2_main/accounting/tax/Tariff'));

  // Quiz
  const QuestionsOnTaxation = lazy(() => import('@/2_main/accounting/tax/quiz/QuestionsOnTaxation'));

  
  // 3. Finance
  const FinanceIndex = lazy(() => import('@/2_main/accounting/_indexes/FinanceIndex'));
  const SaveForTheRainyDays = lazy(() => import('@/2_main/accounting/finance/SaveForTheRainyDays'));
  const The503020Rule = lazy(() => import('@/2_main/accounting/finance/The503020Rule'));
  const ChiefFinancialOfficer = lazy(() => import('@/2_main/accounting/finance/ChiefFinancialOfficer'));

  // Quiz
  const FinancialQuestions = lazy(() => import('@/2_main/accounting/finance/quiz/FinancialQuestions'));
  
  // 4. Law
  const LawIndex = lazy(() => import('@/2_main/accounting/_indexes/LawIndex'));
  const Law = lazy(() => import('@/2_main/accounting/law/Law'));
  const TaxLaw = lazy(() => import('@/2_main/accounting/law/TaxLaw'));
  const Attorney = lazy(() => import('@/2_main/accounting/law/Attorney'));

  // Quiz
  const LegalMultipleChoice = lazy(() => import('@/2_main/accounting/law/quiz/LegalMultipleChoice'));
  
  // 5. Business
  const BusinessIndex = lazy(() => import('@/2_main/accounting/_indexes/BusinessIndex'));
  const HumanResources = lazy(() => import('@/2_main/accounting/business/HumanResources'));
  const PomodoroTechnique = lazy(() => import('@/2_main/accounting/business/PomodoroTechnique'));

  // Quiz
  const BusinessMultipleChoice = lazy(() => import('@/2_main/accounting/business/quiz/BusinessMultipleChoice'));

  // 6. Insurance
  const InsuranceIndex = lazy(() => import('@/2_main/accounting/_indexes/InsuranceIndex'));
  const BusinessInsurance = lazy(() => import('@/2_main/accounting/insurance/BusinessInsurance'));
  const HealthInsurance = lazy(() => import('@/2_main/accounting/insurance/HealthInsurance'));

  // Quiz
  const InsuranceQuestions = lazy(() => import('@/2_main/accounting/insurance/quiz/InsuranceQuestions'));

// 2_main import các chức năng và đường dẫn Kế Toán

  // 1. Kế Toán
  const KeToanIndex = lazy(() => import('@/2_main/ketoan/_indexes/KeToanIndex'));
  const KeToan = lazy(() => import('@/2_main/ketoan/KeToan'));
  const KeToanVien = lazy(() => import('@/2_main/ketoan/KeToanVien'));
  const KiemToanVien = lazy(() => import('@/2_main/ketoan/KiemToanVien'));
  const BaoCaoTaiChinh = lazy(() => import('@/2_main/ketoan/BaoCaoTaiChinh'));
  const PhuongTrinhKeToan = lazy(() => import('@/2_main/ketoan/PhuongTrinhKeToan'));
  const FIFOKT = lazy(() => import('@/2_main/ketoan/FIFOKT'));
  const SinhVienKeToan = lazy(() => import('@/2_main/ketoan/SinhVienKeToan'));
  const NhungThoiQuenTot = lazy(() => import('@/2_main/ketoan/NhungThoiQuenTot'));
  const BangCanDoiKeToan = lazy(() => import('@/2_main/ketoan/BangCanDoiKeToan'));
  const BCLCTTGianTiep = lazy(() => import('@/2_main/ketoan/BCLCTTGianTiep'));
  const QuyTrinhKeToan = lazy(() => import('@/2_main/ketoan/QuyTrinhKeToan'));
  const KeToanThue = lazy(() => import('@/2_main/ketoan/KeToanThue'));

  // Quiz
  const ThucHanhKeToanCoBan = lazy(() => import('@/2_main/ketoan/quiz/ThucHanhKeToanCoBan'));
  const TienMatDonTichKeToan = lazy(() => import('@/2_main/ketoan/quiz/TienMatDonTichKeToan'));
  const PhapLyKeToanQuiz = lazy(() => import('@/2_main/ketoan/quiz/PhapLyKeToanQuiz'));
  const QuocTeKeToanQuiz = lazy(() => import('@/2_main/ketoan/quiz/QuocTeKeToanQuiz'));
  const QuanTriKeToanQuiz = lazy(() => import('@/2_main/ketoan/quiz/QuanTriKeToanQuiz'));

  // CPA
  const TracNghiemVeCPA = lazy(() => import('@/2_main/ketoan/quiz/cpa/TracNghiemVeCPA'));

  // BCTC
  const TracNghiemVeBCTC = lazy(() => import('@/2_main/ketoan/quiz/bctc/TracNghiemVeBCTC'));

  // BCTC Hợp Nhất
  const TracNghiemVeBCTCHN = lazy(() => import('@/2_main/ketoan/quiz/bctchn/TracNghiemVeBCTCHN'));

  // BCTC Phân Tích
  const TracNghiemPhanTichBCTC = lazy(() => import('@/2_main/ketoan/quiz/bctcpt/TracNghiemPhanTichBCTC1'));
  const TracNghiemPTBCTC = lazy(() => import('@/2_main/ketoan/quiz/bctcpt/TracNghiemPhanTichBCTC2'));

  // Kiểm toán
  const TracNghiemVeKiemToan = lazy(() => import('@/2_main/ketoan/quiz/kiemtoan/TracNghiemVeKiemToan'));
  
  // 2. Thuế
  const ThueIndex = lazy(() => import('@/2_main/ketoan/_indexes/ThueIndex'));
  const ThueVAT = lazy(() => import('@/2_main/ketoan/thue/ThueVAT'));
  const ThueTNCN = lazy(() => import('@/2_main/ketoan/thue/ThueTNCN'));
  const ThueTNDN = lazy(() => import('@/2_main/ketoan/thue/ThueTNDN'));
  const ThueTaiSan = lazy(() => import('@/2_main/ketoan/thue/ThueTaiSan'));
  const ThueQuan = lazy(() => import('@/2_main/ketoan/thue/ThueQuan'));

  // Quiz
  const TracNghiemThueVietNam = lazy(() => import('@/2_main/ketoan/thue/quiz/TracNghiemThueVietNam'));

  // Hóa đơn
  const KienThucCoBanVeHoaDon = lazy(() => import('@/2_main/ketoan/thue/quiz/hoadon/KienThucCoBanVeHoaDon'));

  // VAT
  const TracNghiemVeThueVAT = lazy(() => import('@/2_main/ketoan/thue/quiz/vat/TracNghiemVeThueVAT'));

  // PIT
  const TracNghiemVeThuePIT = lazy(() => import('@/2_main/ketoan/thue/quiz/pit/TracNghiemVeThuePIT'));

  // CIT
  const TracNghiemVeThueCIT = lazy(() => import('@/2_main/ketoan/thue/quiz/cit/TracNghiemVeThueCIT'));

  // Môn bài
  const TracNghiemVeThueMB = lazy(() => import('@/2_main/ketoan/thue/quiz/mb/TracNghiemVeThueMB'));

  // Thuế NK
  const TracNghiemVeTNK = lazy(() => import('@/2_main/ketoan/thue/quiz/tnk/TracNghiemVeTNK'));

  // Thuế XK
  const TracNghiemVeTXK = lazy(() => import('@/2_main/ketoan/thue/quiz/txk/TracNghiemVeTXK'));

  // Thuế FCT
  const TracNghiemVeThueFCT = lazy(() => import('@/2_main/ketoan/thue/quiz/fct/TracNghiemVeThueFCT'));

  // Thuế Tài sản
  const TracNghiemVeTTS = lazy(() => import('@/2_main/ketoan/thue/quiz/tts/TracNghiemVeTTS'));



  // 3. Tài Chính
  const TaiChinhIndex = lazy(() => import('@/2_main/ketoan/_indexes/TaiChinhIndex'));
  const QuyTac503020 = lazy(() => import('@/2_main/ketoan/taichinh/QuyTac503020'));
  const HeoDat = lazy(() => import('@/2_main/ketoan/taichinh/HeoDat'));
  const TietKiemChoNhungNgayMua = lazy(() => import('@/2_main/ketoan/taichinh/TietKiemChoNhungNgayMua'));
  const TranhSuDungTheTinDung = lazy(() => import('@/2_main/ketoan/taichinh/TranhSuDungTheTinDung'));
  const GiamDocTaiChinh = lazy(() => import('@/2_main/ketoan/taichinh/GiamDocTaiChinh'));
  const SinhVienTaiChinh = lazy(() => import('@/2_main/ketoan/taichinh/SinhVienTaiChinh'));

  // Quiz
  const TracNghiemVeTaiChinh = lazy(() => import('@/2_main/ketoan/taichinh/quiz/TracNghiemVeTaiChinh'));
  
  // 4. Luật
  const LuatIndex = lazy(() => import('@/2_main/ketoan/_indexes/LuatIndex'));
  const LuatThue = lazy(() => import('@/2_main/ketoan/luat/LuatThue'));
  const LuatDoanhNghiep = lazy(() => import('@/2_main/ketoan/luat/LuatDoanhNghiep'));
  const ChuyenGiaLuat = lazy(() => import('@/2_main/ketoan/luat/ChuyenGiaLuat'));
  const SinhVienLuat = lazy(() => import('@/2_main/ketoan/luat/SinhVienLuat'));
  const CongChungVien = lazy(() => import('@/2_main/ketoan/luat/CongChungVien'));

  // Quiz
  const TracNghiemVeLuatPhap = lazy(() => import('@/2_main/ketoan/luat/quiz/TracNghiemVeLuatPhap'));

  // 5. Doanh Nghiệp
  const DoanhNghiepIndex = lazy(() => import('@/2_main/ketoan/_indexes/DoanhNghiepIndex'));
  const DoanhNghiep = lazy(() => import('@/2_main/ketoan/doanhnghiep/DoanhNghiep'));
  const NguyenTac5S = lazy(() => import('@/2_main/ketoan/doanhnghiep/NguyenTac5S'));
  const GiupDoDongNghiep = lazy(() => import('@/2_main/ketoan/doanhnghiep/GiupDoDongNghiep'));

  // Quiz
  const TracNghiemVeDoanhNghiep = lazy(() => import('@/2_main/ketoan/doanhnghiep/quiz/TracNghiemVeDoanhNghiep'));

  // 6. Bảo Hiểm
  const BaoHiemIndex = lazy(() => import('@/2_main/ketoan/_indexes/BaoHiemIndex'));
  const BaoHiemXaHoi = lazy(() => import('@/2_main/ketoan/baohiem/BaoHiemXaHoi'));
  const BaoHiemYTe = lazy(() => import('@/2_main/ketoan/baohiem/BaoHiemYTe'));
  const BaoHiemThatNghiep = lazy(() => import('@/2_main/ketoan/baohiem/BaoHiemThatNghiep'));

  // Quiz
  const TracNghiemVeBaoHiem = lazy(() => import('@/2_main/ketoan/baohiem/quiz/TracNghiemVeBaoHiem'));

// 3. Test Tailwind
	const TestTailwind = lazy(() => import('@/components/test/TestTailwind'));

// Xuất khẩu chức năng
export default function AppRoutes(): React.JSX.Element {
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
        <Route path="/contact" element={<ContactIndex />} />
        <Route path="/portfolio" element={<Portfolio />} />

        {/* 2_main Khai báo đường dẫn path cho Accounting */}

          {/* 1. Accounting */}
          <Route path="/accounting" element={<AccountingIndex />} />
          <Route path="/accounting/what-is-accounting?" element={<Accounting />} />
          <Route path="/accounting/what-is-an-accountant?" element={<Accountant />} />
          <Route path="/accounting/what-is-an-auditor?" element={<Auditor />} />
          <Route path="/accounting/what-are-financial-statements?" element={<FinancialStatements />} />
          <Route path="/accounting/what-is-the-accounting-equation?" element={<AccountingEquation />} />
          <Route path="/accounting/what-is-fifo?" element={<FIFO />} />
          <Route path="/accounting/what-are-good-habits?" element={<GoodHabits />} />
          <Route path="/accounting/what-is-a-balance-sheet?" element={<BalanceSheet />} />
          <Route path="/accounting/what-is-a-cash-flow-statement?" element={<CashFlowStatement />} />
          <Route path="/accounting/what-is-accrual-accounting?" element={<AccrualAccounting />} />
          <Route path="/accounting/what-is-financial-accounting?" element={<FinancialAccounting />} />
          <Route path="/accounting/what-is-a-T-account?" element={<TAccount />} />
          <Route path="/accounting/what-is-a-certified-Public-accountant?" element={<CertifiedPublicAccountant />} />

          {/* Quiz */}
          <Route path="/accounting/accounting-basic-practice" element={<AccountingBasicPractice />} />
          <Route path="/accounting/basic-accounting-principles" element={<BasicAccountingPrinciples />} />
          <Route path="/accounting/cash-accrual-accounting" element={<CashAccrualAccounting />} />
          <Route path="/accounting/forensic-accounting-quiz" element={<ForensicAccountingQuiz />} />
          <Route path="/accounting/international-accounting-quiz" element={<InternationalAccountingQuiz />} />
          <Route path="/accounting/managerial-accounting-quiz" element={<ManagerialAccountingQuiz />} />

          {/* CPA */}
          <Route path="/accounting/cpa-multiple-choice" element={<CPAMultipleChoice />} />

          {/* FS */}
          <Route path="/accounting/fs-multiple-choice" element={<FSMultipleChoice />} />

          {/* CFS */}
          <Route path="/accounting/consolidated-fs-quiz" element={<ConsolidatedFSQuiz />} />

          {/* CFA */}
          <Route path="/accounting/fs-analysis-quiz" element={<FSAnalysisQuiz />} />

          {/* Audit */}
          <Route path="/accounting/audit-questions" element={<AuditQuestions />} />
          

          {/* 3. Tax */}
          <Route path="/tax" element={<TaxIndex />} />
          <Route path="/tax/what-is-value-added-tax?" element={<ValueAddedTax />} />
          <Route path="/tax/what-is-a-tariff?" element={<Tariff />} />

          {/* Quiz */}
          <Route path="/tax/questions-on-taxation" element={<QuestionsOnTaxation />} />
          
          {/* 3. Finance */}
          <Route path="/finance" element={<FinanceIndex />} />
          <Route path="/finance/what-is-save-for-the-rainy-days?" element={<SaveForTheRainyDays />} />
          <Route path="/finance/what-is-the-50-30-20-rule?" element={<The503020Rule />} />
          <Route path="/finance/what-is-a-chief-financial-officer?" element={<ChiefFinancialOfficer />} />

          {/* Quiz */}
          <Route path="/finance/financial-questions" element={<FinancialQuestions />} />
          
          {/* 4. Law */}
          <Route path="/law" element={<LawIndex />} />
          <Route path="/law/what-is-law?" element={<Law />} />
          <Route path="/law/what-is-tax-law?" element={<TaxLaw />} />
          <Route path="/law/what-is-an-attorney?" element={<Attorney />} />

          {/* Quiz */}
          <Route path="/law/legal-multiple-choice" element={<LegalMultipleChoice />} />
          
          {/* 5. Business */}
          <Route path="/business" element={<BusinessIndex />} />
          <Route path="/business/what-is-human-resources?" element={<HumanResources />} />
          <Route path="/business/what-is-pomodoro-technique?" element={<PomodoroTechnique />} />

          {/* Quiz */}
          <Route path="/business/business-multiple-choice" element={<BusinessMultipleChoice />} />

          {/* 6. Insurance */}
          <Route path="/insurance" element={<InsuranceIndex />} />
          <Route path="/insurance/what-is-business-insurance?" element={<BusinessInsurance />} />
          <Route path="/insurance/what-is-health-insurance?" element={<HealthInsurance />} />

          {/* Quiz */}
          <Route path="/insurance/insurance-questions" element={<InsuranceQuestions />} />

        {/* 2_main Khai báo đường dẫn path cho Kế Toán */}

          {/* 1. Kế Toán */}
          <Route path="/ke-toan" element={<KeToanIndex />} />
          <Route path="/ke-toan/ke-toan-la-gi?" element={<KeToan />} />
          <Route path="/ke-toan/ke-toan-vien-la-gi?" element={<KeToanVien />} />
          <Route path="/ke-toan/kiem-toan-vien-la-gi?" element={<KiemToanVien />} />
          <Route path="/ke-toan/bao-cao-tai-chinh-la-gi?" element={<BaoCaoTaiChinh />} />
          <Route path="/ke-toan/phuong-trinh-ke-toan-la-gi?" element={<PhuongTrinhKeToan />} />
          <Route path="/ke-toan/fifo-la-gi?" element={<FIFOKT />} />
          <Route path="/ke-toan/sinh-vien-ke-toan-la-gi?" element={<SinhVienKeToan />} />
          <Route path="/ke-toan/nhung-thoi-quen-tot-la-gi?" element={<NhungThoiQuenTot />} />
          <Route path="/ke-toan/bang-can-doi-ke-toan-la-gi?" element={<BangCanDoiKeToan />} />
          <Route path="/ke-toan/bao-cao-luu-chuyen-tien-te-gian-tiep-la-gi?" element={<BCLCTTGianTiep />} />
          <Route path="/ke-toan/quy-trinh-ke-toan-la-gi?" element={<QuyTrinhKeToan />} />
          <Route path="/ke-toan/ke-toan-thue-la-gi?" element={<KeToanThue />} />


          {/* Quiz */}
          <Route path="/ke-toan/thuc-hanh-ke-toan-co-ban" element={<ThucHanhKeToanCoBan />} />
          <Route path="/ke-toan/tien-mat-don-tich-ke-toan" element={<TienMatDonTichKeToan />} />
          <Route path="/ke-toan/phap-ly-ke-toan-quiz" element={<PhapLyKeToanQuiz />} />
          <Route path="/ke-toan/quoc-te-ke-toan-quiz" element={<QuocTeKeToanQuiz />} />
          <Route path="/ke-toan/quan-tri-ke-toan-quiz" element={<QuanTriKeToanQuiz />} />

          {/* CPA */}
          <Route path="/ke-toan/trac-nghiem-ve-cpa" element={<TracNghiemVeCPA />} />

          {/* BCTC */}
          <Route path="/ke-toan/trac-nghiem-ve-bctc" element={<TracNghiemVeBCTC />} />

          {/* BCTC Hợp Nhất*/}
          <Route path="/ke-toan/trac-nghiem-ve-bctc-hop-nhat" element={<TracNghiemVeBCTCHN />} />

          {/* Phân tích BCTC*/}
          <Route path="/ke-toan/trac-nghiem-bctc-phan-tich-1" element={<TracNghiemPhanTichBCTC />} />
          <Route path="/ke-toan/trac-nghiem-bctc-phan-tich-2" element={<TracNghiemPTBCTC />} />

          {/* Kiểm toán */}
          <Route path="/ke-toan/trac-nghiem-ve-kiem-toan" element={<TracNghiemVeKiemToan />} />

          {/* 2. Thuế */}
          <Route path="/thue" element={<ThueIndex />} />
          <Route path="/thue/thue-vat-la-gi?" element={<ThueVAT />} />
          <Route path="/thue/thue-tncn-la-gi?" element={<ThueTNCN />} />
          <Route path="/thue/thue-tndn-la-gi?" element={<ThueTNDN />} />
          <Route path="/thue/thue-tai-san-la-gi?" element={<ThueTaiSan />} />
          <Route path="/thue/thue-quan-la-gi?" element={<ThueQuan />} />

          {/* Quiz */}
          <Route path="/thue/trac-nghiem-thue-viet-nam" element={<TracNghiemThueVietNam />} />

          {/* Hóa đơn */}
          <Route path="/thue/kien-thuc-co-ban-ve-hoa-don" element={<KienThucCoBanVeHoaDon />} />

          {/* VAT */}
          <Route path="/thue/trac-nghiem-ve-thue-vat" element={<TracNghiemVeThueVAT />} />

          {/* PIT */}
          <Route path="/thue/trac-nghiem-ve-thue-pit" element={<TracNghiemVeThuePIT />} />

          {/* CIT */}
          <Route path="/thue/trac-nghiem-ve-thue-cit" element={<TracNghiemVeThueCIT />} />

          {/* Môn bài */}
          <Route path="/thue/trac-nghiem-ve-thue-mon-bai" element={<TracNghiemVeThueMB />} />

          {/* Thuế NK */}
          <Route path="/thue/trac-nghiem-ve-tnk" element={<TracNghiemVeTNK />} />

          {/* Thuế XK */}
          <Route path="/thue/trac-nghiem-ve-txk" element={<TracNghiemVeTXK />} />

          {/* Thuế FCT */}
          <Route path="/thue/trac-nghiem-ve-thue-fct" element={<TracNghiemVeThueFCT />} />

          {/* Thuế Tài sản */}
          <Route path="/thue/trac-nghiem-ve-thue-tai-san" element={<TracNghiemVeTTS />} />



          {/* 3. Tài Chính */}
          <Route path="/tai-chinh" element={<TaiChinhIndex />} />
          <Route path="/tai-chinh/quy-tac-50-30-20-la-gi?" element={<QuyTac503020 />} />
          <Route path="/tai-chinh/heo-dat-la-gi?" element={<HeoDat />} />
          <Route path="/tai-chinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?" element={<TietKiemChoNhungNgayMua />} />
          <Route path="/tai-chinh/tranh-su-dung-the-tin-dung-la-gi?" element={<TranhSuDungTheTinDung />} />
          <Route path="/tai-chinh/giam-doc-tai-chinh-la-ai?" element={<GiamDocTaiChinh />} />
          <Route path="/tai-chinh/sinh-viên-tai-chinh-la-ai?" element={<SinhVienTaiChinh />} />

          {/* Quiz */}
          <Route path="/tai-chinh/trac-nghiem-ve-tai-chinh" element={<TracNghiemVeTaiChinh />} />

          {/* 4. Luật */}
          <Route path="/luat" element={<LuatIndex />} />
          <Route path="/luat/luat-thue-la-gi?" element={<LuatThue />} />
          <Route path="/luat/luat-doanh-nghiep-la-gi?" element={<LuatDoanhNghiep />} />
          <Route path="/luat/chuyen-gia-luat-la-gi?" element={<ChuyenGiaLuat />} />
          <Route path="/luat/sinh-vien-luat-la-gi?" element={<SinhVienLuat />} />
          <Route path="/luat/cong-chung-vien-la-gi?" element={<CongChungVien />} />

          {/* Quiz */}
          <Route path="/luat/trac-nghiem-ve-luat-phap" element={<TracNghiemVeLuatPhap />} />

          {/* 5. Doanh Nghiệp */}
          <Route path="/doanh-nghiep" element={<DoanhNghiepIndex />} />
          <Route path="/doanh-nghiep/doanh-nghiep-la-gi?" element={<DoanhNghiep />} />
          <Route path="/doanh-nghiep/nguyen-tac-5S-la-gi?" element={<NguyenTac5S />} />
          <Route path="/doanh-nghiep/giup-do-dong-nghiep-la-gi?" element={<GiupDoDongNghiep />} />

          {/* Quiz */}
          <Route path="/doanh-nghiep/trac-nghiem-ve-doanh-nghiep" element={<TracNghiemVeDoanhNghiep />} />
          
          {/* 6. Bảo Hiểm */}
          <Route path="/bao-hiem" element={<BaoHiemIndex />} />
          <Route path="/bao-hiem/bao-hiem-xa-hoi-la-gi?" element={<BaoHiemXaHoi />} />
          <Route path="/bao-hiem/bao-hiem-y-te-la-gi?" element={<BaoHiemYTe />} />
          <Route path="/bao-hiem/bao-hiem-that-nghiep-la-gi?" element={<BaoHiemThatNghiep />} />

          {/* Quiz */}
          <Route path="/bao-hiem/trac-nghiem-ve-bao-hiem" element={<TracNghiemVeBaoHiem />} />

          {/* 3. Test Tailwind */}
					<Route path="/tailwindcss/test-tailwind" element={<TestTailwind />} />

      </Route>

    </Routes>

  </Suspense>

  );
}