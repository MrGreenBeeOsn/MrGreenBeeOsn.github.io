import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch from '@/components/video/VideoSearch';

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
        
        <VideoSearch />
							
			</div>

      <div className="flex-container">

        <div className="sub-box">

          <ul className="list-border1">
        
            <li><Link to="/ke-toan/ke-toan-la-gi?">Kế toán</Link></li>

            <li><Link to="/ke-toan/phuong-trinh-ke-toan-la-gi?">Phương trình kế toán</Link></li>

            <li><Link to="/ke-toan/fifo-la-gi?">FIFO</Link></li>

            <li><Link to="/ke-toan/nhung-thoi-quen-tot-la-gi?">Những thói quen tốt</Link></li>

            <li><Link to="/ke-toan/quy-trinh-ke-toan-la-gi?">Quy trình kế toán</Link></li>

            <li><Link to="/ke-toan/ke-toan-thue-la-gi?">Kế toán thuế</Link></li>

          </ul>

        </div>

        <div className="sub-box">

          <ul className="list-border1">
            
            <li><Link to="/ke-toan/ke-toan-vien-la-gi?">Kế toán viên</Link></li>

            <li><Link to="/ke-toan/kiem-toan-vien-la-gi?">Kiểm toán viên</Link></li>

            <li><Link to="/ke-toan/sinh-vien-ke-toan-la-gi?">Sinh viên kế toán</Link></li>

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