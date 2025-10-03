import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function KeToan() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Thuật ngữ Kế toán
    ============================= */}

    <div className="topic-container">

      <div  className="flex-topic">

        <HashLink smooth to="/ke-toan">
          <mark className="highlight-tertiary-padding-2-4">Kế Toán</mark>
        </HashLink>

        <HashLink smooth to="/thue">
          <mark className="highlight-tertiary-padding-2-4">Thuế</mark>
        </HashLink>

        <HashLink smooth to="/tai-chinh">
          <mark className="highlight-tertiary-padding-2-4">Tài Chính</mark>
        </HashLink>

        <HashLink smooth to="/luat">
          <mark className="highlight-tertiary-padding-2-4">Luật</mark>
        </HashLink>

        <HashLink smooth to="/doanh-nghiep">
          <mark className="highlight-tertiary-padding-2-4">Doanh Nghiệp</mark>
        </HashLink>

        <HashLink smooth to="/bao-hiem">
          <mark className="highlight-tertiary-padding-2-4">Bảo hiểm</mark>
        </HashLink>
				
			</div>

    </div>

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