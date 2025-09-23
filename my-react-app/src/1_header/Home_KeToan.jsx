import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function KeToan() {
  return (<>
     
  <main className="image image1 content">

    {/* =============================
        1. Thuật ngữ Kế toán
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-ke-toan">Thuật ngữ Kế toán</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/ketoan/ke-toan-la-gi?">Kế toán</Link></li>
      
      <li><Link to="/ketoan/ke-toan-vien-la-gi?">Kế toán viên</Link></li>

      <li><Link to="/ketoan/kiem-toan-vien-la-gi?">Kiểm toán viên</Link></li>

      <li><Link to="/ketoan/bao-cao-tai-chinh-la-gi?">Báo cáo tài chính</Link></li>

    </ul>

    {/* =============================
        2. Thuật ngữ Thuế
    ============================= */}

    <h3 className="margin-y-50 text-center" id="thuat-ngu-thue">Thuật ngữ Thuế</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/thue/thue-vat-la-gi?">Thuế VAT</Link></li>
      
      <li><Link to="/thue/thue-tncn-la-gi?">Thuế TNCN</Link></li>

      <li><Link to="/thue/thue-tndn-la-gi?">Thuế TNDN</Link></li>

      <li><Link to="/thue/thue-tai-san-la-gi?">Thuế tài sản</Link></li>

      <li><Link to="/thue/thue-quan-la-gi?">Thuế quan</Link></li>

    </ul>

    {/* =============================
          3. Thuật ngữ Bảo hiểm
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-bao-hiem">Thuật ngữ Bảo hiểm</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/baohiem/bao-hiem-xa-hoi-la-gi?">Bảo hiểm xã hội</Link></li>
      
      <li><Link to="/baohiem/bao-hiem-y-te-la-gi?">Bảo hiểm y tế</Link></li>

      <li><Link to="/baohiem/bao-hiem-that-nghiep-la-gi?"></Link></li>

    </ul>

    {/* =============================
          4. Thuật ngữ Luật
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-luat">Thuật ngữ Luật</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/luat/luat-thue-la-gi?">Luật thuế</Link></li>
      
      <li><Link to="/luat/luat-doanh-nghiep-la-gi?">Luật doanh nghiệp</Link></li>

    </ul>

    {/* =============================
        5. Thuật ngữ Tài chính
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-tai-chinh">Thuật ngữ Tài chính</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/taichinh/quy-tac-50-30-20-la-gi?">Quy tắc 50/30/20</Link></li>
      
      <li><Link to="/taichinh/heo-dat-la-gi?">Heo đất</Link></li>

      <li><Link to="/taichinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?">Tiết kiệm cho những ngày mưa</Link></li>
      
      <li><Link to="/taichinh/tranh-su-dung-the-tin-dung-la-gi?">Tránh sử dụng thẻ tín dụng</Link></li>

    </ul>

    {/* =============================
        6. Thuật ngữ Doanh nghiệp
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-doanh-nghiep">Thuật ngữ Doanh nghiệp</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/doanhnghiep/doanh-nghiep-la-gi?">Doanh nghiệp</Link></li>
      
      <li><Link to="/doanhnghiep/nguyen-tac-5S-la-gi?">Nguyên tắc 5S</Link></li>

    </ul>
    
  </main>

  </>);
}