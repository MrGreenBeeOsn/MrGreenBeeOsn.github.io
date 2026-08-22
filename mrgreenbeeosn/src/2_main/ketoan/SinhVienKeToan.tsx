import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SinhVienKeToan(): React.JSX.Element {

  const postId = "SinhVienKeToan";

  return (<>

  <main className="image image2">

    <article>
  
      <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Kế toán là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Kế toán. */}

      <p><strong>Sinh viên kế toán</strong>: "Chú ong" siêng năng thu thập số liệu tài chính!</p>

      <p><strong>Sinh viên kế toán</strong> giống như những "chú ong" siêng năng thu thập số liệu tài chính từ các hoạt động kinh doanh của doanh nghiệp. Họ học tập và rèn luyện để trở thành những kế toán viên chuyên nghiệp, góp phần quản lý tài chính hiệu quả cho doanh nghiệp.</p>

      <p className="margin-top-20">Công việc chính của <strong>sinh viên kế toán</strong> bao gồm:</p>

        <ul className="list-square">

          <li><strong>Học tập các môn học về kế toán</strong>: Sinh viên sẽ học về các nguyên tắc, phương pháp và kỹ thuật kế toán, cũng như các quy định pháp luật liên quan đến lĩnh vực tài chính.</li>

          <li><strong>Luyện tập kỹ năng thực hành</strong>: Sinh viên sẽ tham gia các bài tập thực hành, dự án mô phỏng và thực tập tại doanh nghiệp để rèn luyện kỹ năng thực hành kế toán.</li>

          <li><strong>Tham gia các hoạt động ngoại khóa</strong>: Sinh viên có thể tham gia các câu lạc bộ kế toán, hội thảo chuyên ngành và các hoạt động ngoại khóa khác để nâng cao kiến thức và kỹ năng.</li>

          <li><strong>Chuẩn bị cho kỳ thi tốt nghiệp</strong>: Sinh viên cần học tập và ôn luyện kỹ lưỡng để đạt kết quả cao trong kỳ thi tốt nghiệp và có thể xin việc làm sau khi ra trường.</li>

        </ul>
      
      <p className="margin-top-20"><strong>Sinh viên kế toán</strong> cần có những phẩm chất sau:</p>

        <ul className="list-square">

          <li><strong>Có khả năng học tập tốt</strong>: Kế toán là một lĩnh vực đòi hỏi nhiều kiến thức chuyên môn, do đó sinh viên cần có khả năng học tập tốt và tiếp thu kiến thức nhanh chóng.</li>

          <li><strong>Có cẩn thận</strong>, <strong>tỉ mỉ</strong>: Công việc kế toán đòi hỏi sự cẩn thận và tỉ mỉ trong việc ghi chép, kiểm tra và xử lý số liệu tài chính.</li>

          <li><strong>Có khả năng phân tích</strong>: Sinh viên cần có khả năng phân tích số liệu tài chính để đánh giá tình hình hoạt động kinh doanh của doanh nghiệp và đưa ra những đề xuất phù hợp.</li>

          <li><strong>Có khả năng giao tiếp tốt</strong>: Sinh viên cần có khả năng giao tiếp tốt để làm việc hiệu quả với đồng nghiệp và khách hàng.</li>

        </ul>

      <p className="margin-top-20"><strong>Sinh viên kế toán</strong> có nhiều cơ hội nghề nghiệp sau khi ra trường:</p>

        <ul className="list-square">

          <li><strong>Làm kế toán viên</strong>: Đây là công việc phổ biến nhất cho <strong>sinh viên kế toán</strong>. Kế toán viên có thể làm việc trong các doanh nghiệp, tổ chức, cơ quan nhà nước,...</li>

          <li><strong>Làm kiểm toán viên</strong>: Kiểm toán viên có trách nhiệm kiểm tra và đánh giá hoạt động tài chính của doanh nghiệp để đảm bảo tính minh bạch và chính xác.</li>

          <li><strong>Làm giảng viên</strong>: <strong>Sinh viên kế toán</strong> có thể trở thành giảng viên tại các trường đại học, cao đẳng, trung cấp để đào tạo thế hệ kế toán viên tương lai.</li>

          <li><strong>Làm nghiên cứu khoa học</strong>: <strong>Sinh viên kế toán</strong> có thể tham gia nghiên cứu khoa học về lĩnh vực kế toán và tài chính.</li>

        </ul>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p><strong>Sinh viên kế toán</strong>: "Chú ong" siêng năng đếm tiền cho heo đất!</p>

      <h3 className="margin-y-50 text-center">Con biết heo đất không?</h3>
      
      <p>Heo đất là nơi con cất giữ tiền tiết kiệm của mình.</p>

      <p><strong>Sinh viên kế toán</strong> cũng giống như những "chú ong" siêng năng thu thập tiền cho heo đất của các công ty. Các bạn ấy học cách ghi chép, đếm tiền và sử dụng tiền một cách thông minh để giúp công ty có nhiều tiền hơn.</p>

      <p className="margin-top-20">Công việc của <strong>sinh viên kế toán</strong> giống như:</p>

        <ul className="list-square">

          <li><strong>Ghi chép số tiền</strong>: Con ghi chép bao nhiêu tiền bỏ vào heo đất mỗi ngày, <strong>sinh viên kế toán</strong> cũng ghi chép lại số tiền mà công ty kiếm được mỗi ngày từ việc bán hàng.</li>

          <li><strong>Đếm tiền</strong>: Con đếm số tiền trong heo đất để biết có bao nhiêu tiền, <strong>sinh viên kế toán</strong> cũng đếm số tiền của công ty để biết công ty có bao nhiêu tiền.</li>

          <li><strong>Sử dụng tiền</strong>: Con dùng tiền heo đất để mua đồ chơi, mua sách vở,... <strong>sinh viên kế toán</strong> cũng giúp công ty sử dụng tiền để mua sắm vật liệu, trả lương cho nhân viên,...</li>

        </ul>

      <p className="margin-top-20"><strong>Sinh viên kế toán</strong> rất quan trọng vì các bạn ấy giúp heo đất của công ty:</p>

        <ul className="list-square">

          <li><strong>Luôn đầy ắp tiền</strong>: Công ty có thể theo dõi và kiểm soát số tiền của mình, đảm bảo sử dụng tiền một cách hợp lý và hiệu quả.</li>

          <li><strong>Sử dụng tiền đúng cách</strong>: Công ty có thể thực hiện đầy đủ nghĩa vụ thuế và các quy định pháp luật liên quan đến tiền bạc.</li>

          <li><strong>Lập kế hoạch cho tương lai</strong>: Công ty có thể dựa trên số tiền trong heo đất để đưa ra những quyết định đúng đắn cho tương lai.</li>

        </ul>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>June 2, 2024 · by 💎GEM ·</span>
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