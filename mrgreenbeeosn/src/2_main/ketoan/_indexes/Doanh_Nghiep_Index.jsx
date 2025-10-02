import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function Doanh_Nghiep_Index() {
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
        5. Thuật ngữ Doanh nghiệp
    ============================= */}

    <h3 className="margin-y-50 text-center text-center" id="thuat-ngu-doanh-nghiep">Thuật ngữ Doanh nghiệp</h3>
    
    <ul className="list-border1">
      
      <li><Link to="/doanh-nghiep/doanh-nghiep-la-gi?">Doanh nghiệp</Link></li>
      
      <li><Link to="/doanh-nghiep/nguyen-tac-5S-la-gi?">Nguyên tắc 5S</Link></li>

    </ul>
    
  </main>

  </>);
}