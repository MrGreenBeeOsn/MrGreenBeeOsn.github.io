import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BaoHiemXaHoi(): React.JSX.Element {

  const postId = "BaoHiemXaHoi";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/bao-hiem#thuat-ngu-bao-hiem"><mark className="highlight-tertiary-padding-4-8">Bảo Hiểm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Bảo hiểm xã hội là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Bảo hiểm. */}

      <p><strong>Bảo hiểm xã hội</strong> (<strong>BHXH</strong>) là một hình thức bảo hiểm bắt buộc, giúp bảo vệ người lao động và gia đình họ trước những rủi ro trong cuộc sống như ốm đau, tai nạn, mất việc làm, hoặc khi về già.</p>

      <h3 className="margin-y-50 text-center">BHXH hoạt động như thế nào?</h3>

        <ul className="list-square">

          <li><strong>Đóng góp</strong>: Người lao động và người sử dụng lao động cùng đóng một phần tiền vào quỹ <strong>BHXH</strong> hàng tháng.</li>

          <li><strong>Hưởng lợi</strong>: Khi gặp phải các tình huống như ốm đau, tai nạn, nghỉ việc, về hưu,... người tham gia <strong>BHXH</strong> sẽ được hưởng các chế độ hỗ trợ từ quỹ <strong>BHXH</strong>.</li>

        </ul>
      
      <p className="margin-top-20">Những quyền lợi khi tham gia BHXH:</p>

        <ul className="list-square">

          <li><strong>Chế độ ốm đau</strong>: Được hưởng trợ cấp ốm đau khi nghỉ việc vì lý do sức khỏe.</li>

          <li><strong>Chế độ thai sản</strong>: Phụ nữ mang thai được hưởng chế độ thai sản để nghỉ ngơi và chăm sóc em bé.</li>

          <li><strong>Chế độ tai nạn lao động, bệnh nghề nghiệp</strong>: Được hỗ trợ khi gặp tai nạn trong quá trình làm việc hoặc mắc các bệnh liên quan đến công việc.</li>

          <li><strong>Chế độ hưu trí</strong>: Khi đến tuổi nghỉ hưu, người lao động sẽ được hưởng lương hưu hàng tháng.</li>

          <li><strong>Chế độ tử tuất</strong>: Nếu người tham gia <strong>BHXH</strong> không may qua đời，người thân sẽ được hưởng một khoản tiền để lo hậu sự.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Tại sao cần tham gia BHXH?</h3>

      <p></p>

        <ul className="list-square">

          <li><strong>Bảo vệ bản thân và gia đình</strong>: <strong>BHXH</strong> giúp bạn và gia đình có một cuộc sống ổn định hơn khi gặp khó khăn.</li>

          <li><strong>Đảm bảo an sinh xã hội</strong>: <strong>BHXH</strong> là một phần quan trọng của hệ thống an sinh xã hội, giúp giảm bớt gánh nặng cho xã hội.</li>

          <li><strong>Quyền lợi hợp pháp</strong>: Tham gia <strong>BHXH</strong> là quyền lợi của người lao động, được quy định bởi pháp luật.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Lưu ý:</h3>

        <ul className="list-square">

          <li><strong>Tham gia bắt buộc</strong>: Người lao động làm việc theo hợp đồng lao động phải tham gia <strong>BHXH</strong>.</li>

          <li><strong>Quy định cụ thể</strong>: Các chế độ và mức hưởng của <strong>BHXH</strong> được quy định chi tiết trong luật và các văn bản pháp luật liên quan.</li>

        </ul>

      <p className="margin-top-20"><strong>Tóm lại</strong>, <strong>BHXH</strong> là một hình thức <strong>bảo hiểm xã hội</strong> quan trọng, giúp bảo vệ quyền lợi của người lao động và góp phần xây dựng một xã hội công bằng, văn minh.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Con ơi, tưởng tượng con có một cái hộp tiết kiệm. Mỗi lần có tiền lì xì, con bỏ vào đó một ít. Khi nào con muốn mua đồ chơi lớn, con sẽ mở hộp tiết kiệm ra để lấy tiền mua.</p>

      <p><strong>Bảo hiểm xã hội</strong> cũng giống như một cái hộp tiết kiệm lớn của cả nước vậy. Mỗi tháng, ba mẹ con và những người đi làm khác sẽ bỏ một ít tiền vào hộp tiết kiệm này.</p>

      <h3 className="margin-y-50 text-center">Tại sao chúng ta cần hộp tiết kiệm lớn này?</h3>

        <ul className="list-square">

          <li><strong>Khi bị ốm</strong>: Nếu con bị ốm và phải nghỉ học, hộp tiết kiệm lớn sẽ giúp con có tiền để mua thuốc và đi khám bác sĩ.</li>

          <li><strong>Khi ba mẹ nghỉ việc</strong>: Nếu ba mẹ con nghỉ việc, hộp tiết kiệm lớn sẽ giúp gia đình có tiền để sinh hoạt.</li>

          <li><strong>Khi già</strong>: Khi con lớn lên và không còn đi làm nữa, hộp tiết kiệm lớn sẽ trả lại cho con một số tiền mỗi tháng để con có cuộc sống thoải mái.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Hộp tiết kiệm lớn này giúp chúng ta như thế nào?</h3>

        <ul className="list-square">

          <li><strong>Yên tâm khi gặp khó khăn</strong>: Khi có chuyện không hay xảy ra, chúng ta không cần quá lo lắng vì đã có hộp tiết kiệm lớn.</li>

          <li><strong>Cuộc sống ổn định</strong>: Hộp tiết kiệm lớn giúp mọi người có cuộc sống ổn định hơn.</li>

        </ul>

      <p className="margin-top-20">Tóm lại, <strong>bảo hiểm xã hội</strong> giống như một người bạn lớn luôn giúp đỡ chúng ta khi gặp khó khăn.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 25, 2024 · by 💎GEM ·</span>
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