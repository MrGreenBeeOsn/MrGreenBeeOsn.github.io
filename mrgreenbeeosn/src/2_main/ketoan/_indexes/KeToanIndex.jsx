import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '/src/components/KeToanTopic';

export default function KeToan() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
          Kế Toán Topic
    ============================= */}
    
      <KeToanTopic />

    {/* =============================
          1. Thuật ngữ Kế Toán
    ============================= */}

    <h3 className="margin-y-50 text-center" id="thuat-ngu-ke-toan">Thuật ngữ Kế toán</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/ke-toan/ke-toan-la-gi?">Kế toán</Link></li>
      
      <li><Link to="/ke-toan/ke-toan-vien-la-gi?">Kế toán viên</Link></li>

      <li><Link to="/ke-toan/kiem-toan-vien-la-gi?">Kiểm toán viên</Link></li>

      <li><Link to="/ke-toan/bao-cao-tai-chinh-la-gi?">Báo cáo tài chính</Link></li>

      <li><Link to="/ke-toan/phuong-trinh-ke-toan-la-gi?">Phương trình kế toán</Link></li>

    </ul>
    
  </main>

  </>);
}