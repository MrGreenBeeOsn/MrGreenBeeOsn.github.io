import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function ThueVAT(): React.JSX.Element {

  const postId = "ThueVAT";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/thue#thuat-ngu-thue"><mark className="highlight-tertiary-padding-4-8">Thuế</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Thuế VAT là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Thuế. */}
      
      <p><strong>Thuế giá trị gia tăng</strong> (viết tắt là VAT) là một loại thuế gián tiếp được tính trên giá trị hàng hóa hoặc dịch vụ mà người tiêu dùng mua. Nói cách khác, khi bạn mua một món đồ, bạn sẽ phải trả thêm một khoản tiền nữa, đó chính là <strong>thuế VAT</strong>.</p>

      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <p>Giả sử bạn mua một chiếc bánh kem có giá 100.000 đồng. Nếu <strong>thuế VAT</strong> là 10%, bạn sẽ phải trả thêm 10.000 đồng tiền thuế, tức là tổng cộng bạn phải trả 110.000 đồng.</p>

      <h3 className="margin-y-50 text-center">Tại sao lại có thuế VAT?</h3>

      <p>Tiền <strong>thuế VAT</strong> thu được sẽ được nhà nước sử dụng để xây dựng các công trình công cộng như trường học, bệnh viện, đường xá, và cung cấp các dịch vụ công cộng khác.</p>

      <h3 className="margin-y-50 text-center">Ai phải nộp thuế VAT?</h3>
      
        <ul className="list-square">

          <li><strong>Người tiêu dùng</strong>: Mặc dù tên gọi là <strong>thuế giá trị gia tăng</strong>, nhưng người trực tiếp trả tiền thuế là người tiêu dùng.</li>

          <li><strong>Doanh nghiệp</strong>: Doanh nghiệp có trách nhiệm thu hộ tiền <strong>thuế VAT</strong> từ người tiêu dùng và nộp vào ngân sách nhà nước.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Vì sao thuế VAT lại được gọi là thuế gián tiếp?</h3>

      <p><strong>Thuế VAT</strong> được gọi là thuế gián tiếp vì gánh nặng thuế không trực tiếp rơi vào người sản xuất hoặc người bán hàng mà được chuyển qua cho người tiêu dùng cuối cùng.</p>
      
      <p>Các mức <strong>thuế VAT</strong>:</p>

      <p className="text-indent-whole">Tùy thuộc vào loại hàng hóa hoặc dịch vụ, mức <strong>thuế VAT</strong> sẽ khác nhau. Tại Việt Nam, hiện nay có các mức <strong>thuế VAT</strong> phổ biến như 0%, 5%, 8% và 10%.</p>

      <p>Tổng kết:</p>

      <p className="text-indent-whole"><strong>Thuế VAT</strong> là một phần không thể thiếu trong nền kinh tế của mọi quốc gia. Việc thu <strong>thuế VAT</strong> giúp nhà nước có nguồn thu để đầu tư vào các công trình công cộng và đảm bảo cuộc sống của người dân.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Tưởng tượng con đi siêu thị cùng ba mẹ và mua một hộp bánh quy. Khi đến quầy tính tiền, cô bán hàng sẽ tính thêm một chút tiền nữa vào giá của hộp bánh quy. Số tiền thêm đó gọi là thuế.</p>

      <p>Thuế giống như khi chúng mình chơi trò chơi mà mỗi lần thắng cuộc, chúng mình sẽ được thêm một viên kẹo vậy. Số tiền thuế mà mọi người đóng góp sẽ được dùng để xây trường học, bệnh viện, làm đường cho chúng mình được đi học, đi khám bệnh và đi chơi dễ dàng hơn.</p>

      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <p>Nếu hộp bánh quy của con có giá 20.000 đồng và thuế là 1.000 đồng thì con sẽ phải trả cô bán hàng tổng cộng 21.000 đồng. 1.000 đồng đó là tiền thuế, sẽ được dùng để xây những thứ có ích cho mọi người.</p>

      <h3 className="margin-y-50 text-center">Tại sao phải đóng thuế?</h3>

        <ul className="list-square">

          <li><strong>Để có trường học, bệnh viện đẹp</strong>: Nhờ có tiền thuế, chúng mình mới có trường học sạch sẽ, đầy đủ đồ chơi và bệnh viện để khám chữa bệnh khi ốm đau.</li>

          <li><strong>Để có đường đi rộng rãi</strong>: Tiền thuế cũng được dùng để làm đường, xây cầu cho chúng mình đi lại dễ dàng hơn.</li>

          <li><strong>Để có điện, nước sạch</strong>: Nhờ có tiền thuế, chúng mình mới có điện để thắp sáng, có nước sạch để uống.</li>

        </ul>

      <h3 className="margin-y-50 text-center">Tóm lại:</h3>

      <p>Thuế là một phần nhỏ trong số tiền chúng ta mua đồ. Tiền thuế sẽ được dùng để xây dựng những thứ tốt đẹp cho cả cộng đồng. Vì vậy, việc đóng thuế là rất quan trọng.</p>

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