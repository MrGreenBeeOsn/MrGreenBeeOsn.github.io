import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function FIFOKT(): React.JSX.Element {

  const postId = "FIFOKT";

  return (<>

  <main className="image image2">

    <article>
  
      <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">FIFO là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Kế toán. */}

      <p><strong>FIFO</strong> là viết tắt của <strong>First In</strong>, <strong>First Out</strong>, nghĩa là nhập trước xuất trước. Đây là một phương pháp hạch toán giá vốn hàng bán được sử dụng phổ biến trong kế toán.</p>
      
      <p className="margin-top-20">Theo phương pháp <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Giá vốn hàng bán được xác định dựa trên giá lô hàng đầu tiên được nhập kho.</li>

          <li>Lô hàng đầu tiên được nhập kho sẽ được xuất kho đầu tiên.</li>

          <li>Giá vốn hàng bán sẽ được cập nhật liên tục khi có hàng mới nhập kho.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <p>Công ty A nhập kho 100 sản phẩm với giá 10.000 đồng/sản phẩm vào ngày 1/1/2024.</p>

      <p>Ngày 5/1/2024, công ty A nhập kho thêm 50 sản phẩm với giá 12.000 đồng/sản phẩm.</p>

      <p>Ngày 10/1/2024, công ty A bán 80 sản phẩm.</p>

      <p className="margin-top-20">Theo phương pháp <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Giá vốn hàng bán của 80 sản phẩm được bán ra là 800.000 đồng (10.000 đồng/sản phẩm x 80 sản phẩm).</li>

          <li>Giá vốn hàng bán này được xác định dựa trên giá lô hàng đầu tiên được nhập kho (100 sản phẩm x 10.000 đồng/sản phẩm).</li>

          <li>Lô hàng thứ hai (50 sản phẩm) vẫn còn nguyên trong kho.</li>

        </ul>

      <p className="margin-top-20">Ưu điểm của phương pháp <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Phản ánh chính xác giá vốn hàng bán trong điều kiện giá cả biến động.</li>

          <li>Dễ dàng áp dụng và hiểu.</li>

          <li>Phù hợp với các doanh nghiệp có nhiều mặt hàng sản phẩm.</li>

        </ul>

      <p className="margin-top-20">Nhược điểm của phương pháp <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Có thể dẫn đến lợi nhuận thấp hơn trong điều kiện giá cả tăng.</li>

          <li>Có thể ảnh hưởng đến việc nộp thuế thu nhập doanh nghiệp.</li>

        </ul>

      <p className="margin-top-20">Lựa chọn phương pháp hạch toán giá vốn hàng bán nào phụ thuộc vào nhiều yếu tố, bao gồm đặc điểm ngành nghề kinh doanh, tình hình thị trường, và mục tiêu quản lý của doanh nghiệp.</p>

      <p className="margin-top-20">Hy vọng những thông tin trên đây hữu ích cho bạn!</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Con hãy tưởng tượng con có một hộp đựng kẹo. Con bỏ kẹo vào hộp theo thứ tự từ trái sang phải.</p>

      <p><strong>FIFO</strong> là viết tắt của First In, First Out, nghĩa là kẹo nào con bỏ vào hộp trước sẽ được lấy ra trước.</p>

      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

        <ul className="list-square">

          <li>Con bỏ vào hộp 10 viên kẹo màu đỏ.</li>

          <li>Sau đó, con bỏ vào hộp thêm 5 viên kẹo màu xanh.</li>

          <li>Cuối cùng, con lấy ra 8 viên kẹo từ hộp.</li>

        </ul>
      
      <p className="margin-top-20">Theo phương pháp <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>8 viên kẹo con lấy ra đầu tiên sẽ là kẹo màu đỏ.</li>

          <li>Vì kẹo màu đỏ là kẹo con bỏ vào hộp trước.</li>

          <li>Kẹo màu xanh vẫn còn nguyên trong hộp.</li>

        </ul>

      <p className="margin-top-20"><strong>FIFO</strong> trong kế toán cũng giống như vậy. Khi công ty nhập hàng hóa vào kho, họ sẽ ghi chép lại theo thứ tự nhập hàng. Khi bán hàng, họ sẽ bán những sản phẩm được nhập kho trước.</p>

      <p className="margin-top-20">Ưu điểm của <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Giúp công ty tính toán giá vốn hàng bán một cách chính xác.</li>

          <li>Đảm bảo công ty không bị lỗ khi giá cả hàng hóa tăng.</li>

        </ul>

      <p className="margin-top-20">Nhược điểm của <strong>FIFO</strong>:</p>

        <ul className="list-square">

          <li>Có thể khiến công ty lợi nhuận thấp hơn khi giá cả hàng hóa giảm.</li>

        </ul>

      <p className="margin-top-20">Lựa chọn phương pháp nào để tính toán giá vốn hàng bán phụ thuộc vào nhiều yếu tố, bao gồm loại hình kinh doanh của công ty và tình hình thị trường.</p>

      <p className="margin-top-20">Hy vọng những thông tin trên đây hữu ích cho con!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>February 24, 2024 · by 💎GEM ·</span>
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