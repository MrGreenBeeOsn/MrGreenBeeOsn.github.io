import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import KeToanTopic from '@/components/topic/KeToanTopic';
import SearchComponent from '@/components/search/SearchComponent';
import VideoSearch2 from '@/components/video/test/VideoSearch2';

export default function ThueIndex(): React.JSX.Element {
  return (<>
     
  <main className="image image1 content">

    <article>

      {/* =============================
            Kế Toán Topic
      ============================= */}

        <KeToanTopic />

      {/* =============================
          2. Thuật ngữ Thuế
      ============================= */}

      <h3 className="margin-y-50 text-center" id="thuat-ngu-thue">Thuật ngữ Thuế</h3>

      <div className="table-search margin-bottom-50">
			
				<SearchComponent />
        
        <VideoSearch2 />
							
			</div>

      <div className="vocabulary-container">
            
        {/* =============================
              Thuế Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="thue-basic-practice"><mark className="highlight-secondary-padding-2-4">Quiz</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-thue-viet-nam">Trắc Nghiệm Thuế Việt Nam</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Hóa đơn Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="hoa-don-basic-practice"><mark className="highlight-secondary-padding-2-4">Hóa đơn</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/kien-thuc-co-ban-ve-hoa-don">Kiến thức cơ bản về Hóa đơn</Link>
              </div>
            </li>


            
          </ul>

        </details>

        {/* =============================
              Thuế VAT Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="vat-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế VAT</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-vat">Trắc Nghiệm Về Thuế VAT</Link>
              </div>
            </li>


            
          </ul>

        </details>

        {/* =============================
              Thuế PIT Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="pit-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế PIT</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-pit">Trắc Nghiệm Về Thuế PIT</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế CIT Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="cit-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế CIT</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-cit">Trắc Nghiệm Về Thuế CIT</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế Môn Bài Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="mon-bai-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế Môn Bài</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-mon-bai">Trắc Nghiệm Về Thuế Môn Bài</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế Nhập khẩu Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tnk-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế Nhập khẩu</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-tnk">Trắc Nghiệm Về Thuế Nhập khẩu</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế Xuất khẩu Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="txk-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế Xuất khẩu</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-txk">Trắc Nghiệm Về Thuế Xuất khẩu</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế FCT Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="fct-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế FCT</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-fct">Trắc Nghiệm về Thuế FCT</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

        {/* =============================
              Thuế Tài sản Quiz
        ============================= */}

        <details className="sub-box-fix-2">
      
          <summary id="tai-san-basic-practice"><mark className="highlight-secondary-padding-2-4">Thuế Tài sản</mark></summary>

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/trac-nghiem-ve-thue-tai-san">Trắc Nghiệm Về Thuế Tài Sản</Link>
              </div>
            </li>


            
          </ul>

          

        </details>

      </div>
      

      <div className="flex-container margin-top-20">

        <div className="sub-box">

          {/* =============================
              Thuế doanh nghiệp
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/thue-vat-la-gi?">Thuế VAT</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tncn-la-gi?">Thuế TNCN</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tndn-la-gi?">Thuế TNDN</Link>
              </div>
            </li>
            
          </ul>

        </div>

        <div className="sub-box">

          {/* =============================
              Thuế khác
          ============================= */}

          <ul className="list-border1">

            <li>
              <div className="li-content">
                <Link to="/thue/thue-quan-la-gi?">Thuế quan</Link>
              </div>
            </li>

            <li>
              <div className="li-content">
                <Link to="/thue/thue-tai-san-la-gi?">Thuế tài sản</Link>
              </div>
            </li>
            
          </ul>

        </div>

      </div>

    </article>
    
  </main>

  </>);
}