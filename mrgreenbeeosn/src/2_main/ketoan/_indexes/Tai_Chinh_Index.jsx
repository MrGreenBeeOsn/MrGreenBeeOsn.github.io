import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Tai_Chinh_Index() {
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

    {/* =============================
        3. Thuật ngữ Tài chính
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-tai-chinh">Thuật ngữ Tài chính</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/tai-chinh/quy-tac-50-30-20-la-gi?">Quy tắc 50/30/20</Link></li>
      
      <li><Link to="/tai-chinh/heo-dat-la-gi?">Heo đất</Link></li>

      <li><Link to="/tai-chinh/tiet-kiem-cho-nhung-ngay-mua-la-gi?">Tiết kiệm cho những ngày mưa</Link></li>
      
      <li><Link to="/tai-chinh/tranh-su-dung-the-tin-dung-la-gi?">Tránh sử dụng thẻ tín dụng</Link></li>

    </ul>
    
  </main>

  </>);
}