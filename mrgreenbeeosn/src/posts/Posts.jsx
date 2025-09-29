import Accounting_Posts from './accounting/Accounting_Posts';
import Ketoan_Posts from './ketoan/Ketoan_Posts';

export default function Posts() {
  return [
    ...Accounting_Posts (),
    ...Ketoan_Posts ()
  ];
}