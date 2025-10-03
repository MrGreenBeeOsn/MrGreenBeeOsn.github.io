import AccountingPosts from './accounting/AccountingPosts';
import TaxPosts from './accounting/TaxPosts';
import FinancialPosts from './accounting/FinancialPosts';
import LawPosts from './accounting/LawPosts';
import BusinessPosts from './accounting/BusinessPosts';
import InsurancePosts from './accounting/InsurancePosts';

import KeToanPosts from './ketoan/KeToanPosts';
import ThuePosts from './ketoan/ThuePosts';
import TaiChinhPosts from './ketoan/TaichinhPosts';
import LuatPosts from './ketoan/LuatPosts';
import DoanhNghiepPosts from './ketoan/DoanhNghiepPosts';
import BaoHiemPosts from './ketoan/BaoHiemPosts';

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