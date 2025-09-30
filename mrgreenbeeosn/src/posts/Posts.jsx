import Accounting_Posts from './accounting/Accounting_Posts';
import Tax_Posts from './accounting/Tax_Posts';
import Financial_Posts from './accounting/Financial_Posts';
import Law_Posts from './accounting/Law_Posts';
import Business_Posts from './accounting/Business_Posts';
import Insurance_Posts from './accounting/Insurance_Posts';

import Ketoan_Posts from './ketoan/Ketoan_Posts';
import Thue_Posts from './ketoan/Thue_Posts';
import Taichinh_Posts from './ketoan/Taichinh_Posts';
import Luat_Posts from './ketoan/Luat_Posts';
import Doanhnghiep_Posts from './ketoan/Doanhnghiep_Posts';
import Baohiem_Posts from './ketoan/Baohiem_Posts';

export default function Posts() {
  return [
    ...Accounting_Posts (),
    ...Tax_Posts (),
    ...Financial_Posts (),
    ...Law_Posts (),
    ...Business_Posts (),
    ...Insurance_Posts (),

    ...Ketoan_Posts (),
    ...Thue_Posts (),
    ...Taichinh_Posts (),
    ...Luat_Posts (),
    ...Doanhnghiep_Posts (),
    ...Baohiem_Posts ()
  ];
}