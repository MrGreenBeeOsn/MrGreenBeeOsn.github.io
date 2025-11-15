import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function NguyenTac5S(): React.JSX.Element {

  const postId = "NguyenTac5S";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/doanh-nghiep#thuat-ngu-doanh-nghiep"><mark className="highlight-tertiary-padding-4-8">Doanh Nghiệp</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Nguyên tắc 5S là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Doanh nghiệp. */}

      <p><strong>Nguyên tắc 5S</strong> là một phương pháp quản lý được nhiều doanh nghiệp áp dụng để tạo ra một môi trường làm việc gọn gàng, sạch sẽ và hiệu quả. 5S là viết tắt của 5 từ tiếng Nhật, mỗi từ đại diện cho một bước trong quá trình cải tiến.</p>

      <p>5 bước trong <strong>nguyên tắc 5S</strong>:</p>

      <h3 className="margin-y-50 text-center">1. Seiri (Sàng lọc):</h3>

        <ul className="list-square">

          <li><strong>Loại bỏ những thứ không cần thiết</strong>: Đánh giá tất cả các vật dụng, dụng cụ trong khu vực làm việc và loại bỏ những thứ không cần thiết, không sử dụng đến hoặc đã hỏng hóc.</li>

          <li><strong>Mục tiêu</strong>: Giảm thiểu sự lộn xộn, tạo không gian rộng rãi và dễ làm việc hơn.</li>

        </ul>

      <h3 className="margin-y-50 text-center">2. Seiton (Sắp xếp):</h3>

        <ul className="list-square">

          <li><strong>Sắp xếp các vật dụng có thứ tự</strong>: Sắp xếp các vật dụng còn lại theo một cách logic và dễ tìm thấy.</li>

          <li><strong>Đánh dấu vị trí</strong>: Đánh dấu rõ ràng vị trí của từng vật dụng bằng nhãn hoặc màu sắc để mọi người dễ dàng tìm kiếm và trả lại đúng vị trí.</li>

          <li><strong>Mục tiêu</strong>: Tìm kiếm nhanh chóng, giảm thiểu thời gian tìm kiếm và tăng năng suất làm việc.</li>

        </ul>

      <h3 className="margin-y-50 text-center">3. Seiso (Sạch sẽ):</h3>

        <ul className="list-square">

          <li><strong>Làm sạch khu vực làm việc</strong>: Vệ sinh sạch sẽ tất cả các bề mặt, thiết bị và dụng cụ làm việc.</li>

          <li><strong>Loại bỏ bụi bẩn</strong>: Loại bỏ bụi bẩn, dầu mỡ và các chất bẩn khác.</li>

          <li><strong>Mục tiêu</strong>: Tạo môi trường làm việc sạch sẽ, vệ sinh, giảm thiểu nguy cơ ô nhiễm và tai nạn lao động.</li>

        </ul>

      <h3 className="margin-y-50 text-center">4. Seiketsu (Tiêu chuẩn hóa):</h3>

        <ul className="list-square">

          <li><strong>Thiết lập các tiêu chuẩn</strong>: Thiết lập các tiêu chuẩn về sắp xếp, vệ sinh và bảo trì cho từng khu vực làm việc.</li>

          <li><strong>Tạo thói quen</strong>: Tạo thói quen thực hiện các tiêu chuẩn này cho tất cả mọi người.</li>

          <li><strong>Mục tiêu</strong>: Duy trì tình trạng sạch sẽ, ngăn nắp và hiệu quả lâu dài.</li>

        </ul>

      <h3 className="margin-y-50 text-center">5. Shitsuke (Kỷ luật):</h3>

        <ul className="list-square">

          <li><strong>Thực hiện kỷ luật</strong>: Mọi người trong công ty đều tuân thủ các tiêu chuẩn đã đề ra.</li>

          <li><strong>Kiểm tra thường xuyên</strong>: Thực hiện kiểm tra định kỳ để đảm bảo mọi người tuân thủ quy định.</li>

          <li><strong>Cải tiến liên tục</strong>: Liên tục cải tiến và nâng cao các tiêu chuẩn.</li>

          <li><strong>Mục tiêu</strong>: Duy trì và nâng cao hiệu quả của 5S.</li>

        </ul>

      <p className="margin-top-20">Lợi ích của việc áp dụng 5S:</p>

        <ul className="list-square">

          <li><strong>Tăng năng suất</strong>: Giảm thời gian tìm kiếm, tăng tốc độ làm việc.</li>

          <li><strong>Giảm chi phí</strong>: Giảm lãng phí nguyên vật liệu, giảm thiểu hư hỏng thiết bị.</li>

          <li><strong>Cải thiện an toàn</strong>: Giảm nguy cơ tai nạn lao động.</li>

          <li><strong>Nâng cao tinh thần làm việc</strong>: Môi trường làm việc sạch sẽ, gọn gàng tạo cảm giác thoải mái và khuyến khích nhân viên làm việc hiệu quả hơn.</li>

          <li><strong>Tăng cường hình ảnh doanh nghiệp</strong>: Một công ty áp dụng 5S sẽ có hình ảnh chuyên nghiệp và được khách hàng đánh giá cao.</li>

        </ul>
  
      <p>Tóm lại, <strong>nguyên tắc 5S</strong> là một công cụ quản lý đơn giản nhưng hiệu quả, giúp doanh nghiệp cải thiện môi trường làm việc, tăng năng suất và giảm chi phí. Việc áp dụng 5S đòi hỏi sự tham gia tích cực của toàn bộ nhân viên trong công ty.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Tưởng tượng phòng của con bừa bộn đồ chơi lắm, đúng không nào? Có những con gấu bông bị vứt lung tung, những chiếc xe hơi đồ chơi nằm dưới giường, và cả những viên bi lăn lóc khắp nơi.</p>

      <p><strong>Nguyên tắc 5S</strong> giống như một trò chơi giúp phòng của con trở nên gọn gàng và đẹp hơn. 5S có 5 bước chơi:</p>

        <ol>

          <li><strong>Sàng lọc</strong>: Con sẽ tìm những đồ chơi con không chơi nữa, hoặc những đồ chơi bị hỏng, rồi cho vào một cái hộp để tặng bạn khác hoặc bỏ đi.</li>

          <li><strong>Sắp xếp</strong>: Con sẽ sắp xếp những đồ chơi còn lại vào đúng chỗ của chúng. Ví dụ, các con gấu bông vào một cái giỏ, các chiếc xe hơi vào một cái hộp.</li>

          <li><strong>Sạch sẽ</strong>: Con sẽ lau chùi bàn, ghế, và cả những đồ chơi của con nữa.</li>

          <li><strong>Tiêu chuẩn hóa</strong>: Con sẽ nhớ rằng mỗi lần chơi xong, con phải xếp lại đồ chơi vào đúng chỗ.</li>

          <li><strong>Kỷ luật</strong>: Cả nhà cùng nhau giữ cho phòng luôn gọn gàng.</li>

        </ol>

      <h3 className="margin-y-50 text-center">Tại sao phải chơi trò 5S?</h3>

        <ul className="list-square">

          <li><strong>Dễ tìm đồ chơi hơn</strong>: Khi phòng gọn gàng, con sẽ dễ dàng tìm thấy đồ chơi mình muốn chơi.</li>

          <li><strong>Chơi vui hơn</strong>: Một căn phòng sạch sẽ và gọn gàng sẽ giúp con chơi vui hơn.</li>

          <li><strong>Trở thành một người ngăn nắp</strong>: Việc chơi trò 5S sẽ giúp con trở thành một người ngăn nắp và gọn gàng.</li>

        </ul>

      <p className="margin-top-20">Tóm lại, <strong>nguyên tắc 5S</strong> giúp chúng ta có một không gian sống sạch sẽ, gọn gàng và ngăn nắp.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>March 4, 2024 · by 💎Gem ·</span>
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