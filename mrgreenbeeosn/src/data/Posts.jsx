import AccountingPosts from './accounting/AccountingPosts.json';
import TaxPosts from './accounting/TaxPosts.json';
import FinancialPosts from './accounting/FinancialPosts.json';
import LawPosts from './accounting/LawPosts.json';
import BusinessPosts from './accounting/BusinessPosts.json';
import InsurancePosts from './accounting/InsurancePosts.json';

import KeToanPosts from './ketoan/KeToanPosts.json';
import ThuePosts from './ketoan/ThuePosts.json';
import TaiChinhPosts from './ketoan/TaichinhPosts.json';
import LuatPosts from './ketoan/LuatPosts.json';
import DoanhNghiepPosts from './ketoan/DoanhNghiepPosts.json';
import BaoHiemPosts from './ketoan/BaoHiemPosts.json';

export default function Posts() {
  return [
    ...AccountingPosts (),
    ...TaxPosts (),
    ...FinancialPosts (),
    ...LawPosts (),
    ...BusinessPosts (),
    ...InsurancePosts (),

    ...KeToanPosts (),
    ...ThuePosts (),
    ...TaiChinhPosts (),
    ...LuatPosts (),
    ...DoanhNghiepPosts (),
    ...BaoHiemPosts ()
  ];
}