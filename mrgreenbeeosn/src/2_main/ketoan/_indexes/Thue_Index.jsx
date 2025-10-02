import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Thue_Index() {
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
    
  </main>

  </>);
}