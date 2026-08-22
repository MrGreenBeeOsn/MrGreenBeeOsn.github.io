import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BangCanDoiKeToan(): React.JSX.Element {

  const postId = "BangCanDoiKeToan";

  return (<>

  <main className="image image2">

    <article>
  
      <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Bảng cân đối kế toán là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Kế toán. */}

      <p><strong>Bảng cân đối kế toán</strong> là một báo cáo tài chính cho biết tình hình tài chính của một doanh nghiệp hoặc tổ chức tại một thời điểm nhất định. Nó bao gồm ba phần chính:</p>

      <h3 className="margin-y-50 text-center">1. Tài sản:</h3>
          
        <ul className="list-square">
      
          <li><strong>Tài sản ngắn hạn</strong>: Là những tài sản mà doanh nghiệp có thể chuyển đổi thành tiền mặt trong vòng một năm. Ví dụ như tiền mặt, hàng tồn kho, các khoản phải thu.</li>
      
          <li><strong>Tài sản dài hạn</strong>: Là những tài sản mà doanh nghiệp sử dụng trong hơn một năm. Ví dụ như đất đai, nhà cửa, máy móc thiết bị.</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">2. Nguồn vốn:</h3>
          
        <ul className="list-square">
      
          <li><strong>Vốn chủ sở hữu</strong>: Là số tiền mà chủ sở hữu đã đầu tư vào doanh nghiệp.</li>
      
          <li><strong>Nợ phải trả</strong>: Là số tiền mà doanh nghiệp nợ các bên khác. Ví dụ như vay ngân hàng, các khoản phải trả nhà cung cấp.</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">3. Phân bổ lợi nhuận:</h3>
          
        <ul className="list-square">
      
          <li><strong>Lợi nhuận giữ lại</strong>: Là phần lợi nhuận mà doanh nghiệp giữ lại để tái đầu tư.</li>
      
          <li><strong>Lợi nhuận chia cổ tức</strong>: Là phần lợi nhuận mà doanh nghiệp chia cho cổ đông.</li>
      
        </ul>

      <p className="margin-top-20"><strong>Bảng cân đối kế toán</strong> được sử dụng để:</p>
      
        <ul className="list-square">
      
          <li><strong>Đánh giá tình hình tài chính của doanh nghiệp</strong>: <strong>Bảng cân đối kế toán</strong> cho biết doanh nghiệp có bao nhiêu tài sản, nợ bao nhiêu tiền và giá trị tài sản ròng của doanh nghiệp là bao nhiêu.</li>
      
          <li><strong>Đánh giá khả năng thanh toán nợ của doanh nghiệp</strong>: <strong>Bảng cân đối kế toán</strong> cho biết doanh nghiệp có đủ tiền mặt để thanh toán các khoản nợ ngắn hạn hay không.</li>
      
          <li><strong>Đánh giá hiệu quả hoạt động của doanh nghiệp</strong>: <strong>Bảng cân đối kế toán</strong> cho biết doanh nghiệp có sử dụng tài sản hiệu quả hay không.</li>
      
        </ul>

      <p className="margin-top-20"><strong>Bảng cân đối kế toán</strong> là một công cụ quan trọng để đánh giá tình hình tài chính của doanh nghiệp.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p><strong>Bảng cân đối kế toán</strong> là một tờ giấy ghi lại tất cả những thứ bạn có và những thứ bạn nợ.</p>

      <p>Hãy tưởng tượng bạn có một quầy bán kẹo.</p>

      <h3 className="margin-y-50 text-center">Tài sản:</h3>
          
      <p>Là tất cả những thứ bạn có, bao gồm:</p>
      
        <ul className="list-square">

          <li><strong>Kẹo</strong>: Bạn có bao nhiêu kẹo?</li>
      
          <li><strong>Tiền mặt</strong>: Bạn có bao nhiêu tiền?</li>
      
          <li><strong>Đồ đạc</strong>: Bạn có những đồ đạc gì, như bàn ghế, tủ kệ?</li>
      
        </ul>
      
      <h3 className="margin-y-50 text-center">Nguồn vốn:</h3>
          
      <p>Là số tiền bạn đã đầu tư vào quầy bán kẹo và số tiền bạn nợ người khác, bao gồm:</p>
      
        <ul className="list-square">
      
          <li><strong>Tiền của bạn</strong>: Bạn đã bỏ ra bao nhiêu tiền để mua kẹo, đồ đạc?</li>
      
          <li><strong>Tiền nợ</strong>: Bạn nợ ai bao nhiêu tiền, ví dụ như bạn nợ tiền nhà cung cấp kẹo?</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">Phân bổ lợi nhuận:</h3>

      <p>Là số tiền bạn kiếm được từ việc bán kẹo và số tiền bạn giữ lại để mua thêm kẹo hoặc chi tiêu cho các việc khác, bao gồm:</p>
      
        <ul className="list-square">
      
          <li><strong>Lợi nhuận</strong>: Bạn kiếm được bao nhiêu tiền từ việc bán kẹo?</li>
      
          <li><strong>Tiền giữ lại</strong>: Bạn giữ lại bao nhiêu tiền để mua thêm kẹo hoặc chi tiêu cho các việc khác?</li>
      
        </ul>
      
      <p className="margin-top-20"><strong>Bảng cân đối kế toán</strong> giúp bạn theo dõi tình hình kinh doanh của bạn và đưa ra quyết định kinh doanh tốt hơn.</p>

      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <p className="margin-top-20">Bạn có thể sử dụng <strong>bảng cân đối kế toán</strong> để xem bạn có nên mua thêm kẹo hay không.</p>
      
        <ul className="list-square">
      
          <li>Nếu bạn có nhiều tiền mặt và ít nợ, bạn có thể mua thêm kẹo.</li>
      
          <li>Nếu bạn có ít tiền mặt và nhiều nợ, bạn nên cẩn thận trước khi mua thêm kẹo.</li>
      
        </ul>

      <p className="margin-top-20">Bạn có thể sử dụng <strong>bảng cân đối kế toán</strong> để xem bạn có nên giảm giá kẹo hay không.</p>
      
        <ul className="list-square">
      
          <li>Nếu bạn bán được nhiều kẹo, bạn có thể giảm giá kẹo để thu hút thêm khách hàng.</li>
      
          <li>Nếu bạn bán được ít kẹo, bạn nên tăng giá kẹo để kiếm được nhiều lợi nhuận hơn.</li>
      
        </ul>

      <p className="margin-top-20">Bạn có thể sử dụng <strong>bảng cân đối kế toán</strong> để xem bạn có nên thuê thêm nhân viên hay không.</p>
      
        <ul className="list-square">
      
          <li>Nếu bạn bán được nhiều kẹo và bạn không thể tự mình bán hết, bạn có thể thuê thêm nhân viên.</li>
      
          <li>Nếu bạn bán được ít kẹo, bạn không nên thuê thêm nhân viên vì bạn sẽ tốn thêm chi phí.</li>
      
        </ul>

      <p className="margin-top-20">Hy vọng những giải thích này sẽ giúp bạn hiểu rõ hơn về <strong>bảng cân đối kế toán</strong>!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>February 23, 2024 · by 💎GEM ·</span>
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

    </article>

  </main>

  </>);
}