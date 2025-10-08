import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function BaoCaoTaiChinh() {

  const postId = "BaoCaoTaiChinh";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Báo cáo tài chính là gì?</h2>

    {/* Đây là nội dung của Thuật ngữ Kế toán. */}
    
    <p><strong>Báo cáo tài chính</strong> là một tập hợp các tài liệu cung cấp thông tin về tình hình tài chính của một doanh nghiệp hoặc tổ chức.</p>

    <p className="margin-top-20"><strong>Báo cáo tài chính</strong> bao gồm:</p>

    <h4 className="margin-y-50 text-center">1. Báo cáo kết quả kinh doanh:</h4>

    <p>Cho biết doanh nghiệp kiếm được bao nhiêu tiền, chi tiêu bao nhiêu tiền và lợi nhuận của doanh nghiệp là bao nhiêu.</p>

    <h4 className="margin-y-50 text-center">2. Bảng cân đối kế toán:</h4>
  
    <p>Cho biết doanh nghiệp sở hữu gì, nợ gì và giá trị tài sản ròng của doanh nghiệp là bao nhiêu.</p>

    <h4 className="margin-y-50 text-center">3. Báo cáo lưu chuyển tiền tệ:</h4>

    <p>Cho biết doanh nghiệp nhận được bao nhiêu tiền, chi tiêu bao nhiêu tiền và dòng tiền của doanh nghiệp là bao nhiêu.</p>

    <h4 className="margin-y-50 text-center">4. Ghi chú giải thích:</h4>

    <p>Cung cấp thông tin bổ sung về các khoản mục trong <strong>báo cáo tài chính</strong>.</p>

    <p><strong>Báo cáo tài chính</strong> được sử dụng bởi các nhà đầu tư, chủ nợ và các bên liên quan khác để đánh giá tình hình tài chính của một doanh nghiệp hoặc tổ chức và đưa ra quyết định về việc đầu tư hoặc cho vay tiền cho doanh nghiệp đó.</p>

    {/* =============================
        ☘️ Hãy nghĩ thật đơn giản!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>
    
    <p><strong>Báo cáo tài chính</strong> là một tờ giấy ghi lại tất cả những thứ bạn có và những thứ bạn nợ.</p>

    <p>Hãy tưởng tượng bạn có một quầy bán kẹo. Bạn bán kẹo cho các bạn và kiếm được tiền. Số tiền đó là tài sản của bạn.</p>

    <p>Nhưng bạn cũng mua kẹo từ cửa hàng để bán lại. Số tiền bạn nợ cửa hàng là phụ nợ của bạn.</p>

    <p><strong>Báo cáo tài chính</strong> là một tờ giấy ghi lại tất cả những thứ này. Nó cho bạn biết bạn đang kiếm được bao nhiêu tiền, bạn đang chi tiêu bao nhiêu tiền và bạn còn lại bao nhiêu tiền.</p>

    <h4 className="margin-y-50 text-center">Tại sao báo cáo tài chính lại quan trọng?</h4>

      <ul className="list-square">

        <li><strong>Báo cáo tài chính</strong> giúp bạn theo dõi tình hình tài chính của bạn. Nó cho bạn biết bạn đang kiếm được bao nhiêu tiền, bạn đang chi tiêu bao nhiêu tiền và bạn còn lại bao nhiêu tiền.</li>

        <li><strong>Báo cáo tài chính</strong> cũng giúp bạn đưa ra quyết định kinh doanh tốt hơn. Ví dụ, nếu bạn biết mình đang kiếm được nhiều tiền từ việc bán một loại kẹo nhất định, bạn có thể quyết định bán nhiều loại kẹo đó hơn.</li>

      </ul>

    <h4 className="margin-y-50 text-center">Báo cáo tài chính có khó không?</h4>

    <p><strong>Báo cáo tài chính</strong> có thể khó hiểu đối với người mới bắt đầu. Nhưng có rất nhiều tài nguyên sẵn có để giúp bạn học <strong>báo cáo tài chính</strong>. Bạn có thể tham gia một khóa học <strong>báo cáo tài chính</strong> hoặc tìm kiếm sự trợ giúp của một kế toán viên được chứng nhận.</p>

    <p className="margin-top-20">Hy vọng những giải thích này sẽ giúp bạn hiểu rõ hơn về <strong>báo cáo tài chính</strong>!</p>

    <div className="viewcounter">

			<div className="post-date no-margin">
				<span>February 23, 2024 · by 💎Gem ·</span>
			</div>

			<div className="eye-icon no-margin">
     	 	<EyeIcon />
    	</div>

			<div className="post-date no-margin">
				<ViewCounter postId={postId} />
			</div>

			<div className="like-button no-margin">
				<LikeButton postId={postId} />
			</div>

		</div>
    
  </main>

  </>);
}