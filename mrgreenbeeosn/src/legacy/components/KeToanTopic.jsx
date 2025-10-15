import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function KeToanTopic() {
  return (

    <div className="topic-container">

      {/* =============================
        1. Thuật ngữ Kế toán
      ============================= */}

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

  );
}