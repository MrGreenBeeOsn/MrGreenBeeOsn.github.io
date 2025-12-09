import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';
import ADELERVN from '@/components/method/ADELERVN';

export default function KeToan(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}
      
        <KeToanTopic />

      {/* =============================
            1. Thuật ngữ Kế Toán
      ============================= */}

      <h3 className="margin-y-50 text-center" id="thuat-ngu-ke-toan">Thuật ngữ Kế toán</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch2 />

        <ADELERVN />
							
			</div>

      <div className="vocabulary-container">
      
        {/* =============================
              Kế Toán Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="ke-toan-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/thuc-hanh-ke-toan-co-ban">Thực hành Kế toán cơ bản</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              CPA Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="cpa-basic-practice"><mark className="highlight-secondary-padding-2-4">CPA</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/trac-nghiem-ve-cpa">Trắc Nghiệm Về CPA</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              BCTC Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="bctc-basic-practice"><mark className="highlight-secondary-padding-2-4">BCTC</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/trac-nghiem-ve-bctc">Trắc Nghiệm Về Báo Cáo Tài Chính</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

        {/* =============================
              BCTC Quiz
        ============================= */}

        <details className="sub-box-fix-2 margin-bottom-20">
      
          <summary id="kiem-toan-basic-practice"><mark className="highlight-secondary-padding-2-4">Kiểm Toán</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/trac-nghiem-ve-kiem-toan">Trắc Nghiệm Về Kiểm Toán</Link>
              </div>
            </li>

            
            
          </ul>

        </details>

      </div>

      <div className="flex-container">

        <div className="sub-box">
        
          {/* =============================
              Kế Toán Terms
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/ke-toan-la-gi?">Kế toán</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/phuong-trinh-ke-toan-la-gi?">Phương trình kế toán</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/fifo-la-gi?">FIFO</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/nhung-thoi-quen-tot-la-gi?">Những thói quen tốt</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/quy-trinh-ke-toan-la-gi?">Quy trình kế toán</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/ke-toan-thue-la-gi?">Kế toán thuế</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">
        
          {/* =============================
              Người Kế toán
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/ke-toan/ke-toan-vien-la-gi?">Kế toán viên</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/kiem-toan-vien-la-gi?">Kiểm toán viên</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/ke-toan/sinh-vien-ke-toan-la-gi?">Sinh viên kế toán</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">

            <li><Link to="/ke-toan/bao-cao-tai-chinh-la-gi?">Báo cáo tài chính</Link></li>

            <li><Link to="/ke-toan/bang-can-doi-ke-toan-la-gi?">Bảng cân đối kế toán</Link></li>

            <li><Link to="/ke-toan/bao-cao-luu-chuyen-tien-te-gian-tiep-la-gi?">Báo cáo lưu chuyển tiền tệ gián tiếp</Link></li>

          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}