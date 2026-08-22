import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function HeoDat(): React.JSX.Element {

  const postId = "HeoDat";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/tai-chinh#thuat-ngu-tai-chinh"><mark className="highlight-tertiary-padding-4-8">Tài Chính</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Heo đất là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Tài chính. */}

      <p><strong>Heo đất</strong> - "Ngân hàng" nhỏ xinh cho bé tiết kiệm!</p>

      <p><strong>Heo đất</strong> là một loại hộp đựng tiền thường được làm bằng gốm hoặc sứ, có hình dạng giống như một chú heo. <strong>Heo đất</strong> được sử dụng để tiết kiệm tiền, giống như một "ngân hàng" nhỏ xinh cho bé.</p>

      <h3 className="margin-y-50 text-center">Tại sao người ta lại dùng heo đất để tiết kiệm tiền?</h3>

        <ul className="list-square">

          <li><strong>Hình dáng ngộ nghĩnh</strong>: <strong>Heo đất</strong> có hình dáng ngộ nghĩnh, đáng yêu, thu hút sự chú ý của trẻ em và khiến các bé thích thú khi tiết kiệm tiền.</li>

          <li><strong>Có thể tái sử dụng</strong>: <strong>Heo đất</strong> có thể được sử dụng nhiều lần, sau khi lấy tiền ra bạn có thể tiếp tục tiết kiệm thêm.</li>

          <li><strong>Mang ý nghĩa may mắn</strong>: <strong>Heo đất</strong> được coi là biểu tượng của sự may mắn và tài lộc trong nhiều nền văn hóa.</li>

          <li><strong>Giúp bé học cách quản lý tiền</strong>: Việc tiết kiệm tiền bằng <strong>heo đất</strong> giúp bé học cách quản lý tiền bạc một cách hiệu quả ngay từ khi còn nhỏ.</li>

        </ul>

      <p className="margin-top-20">Cách sử dụng <strong>heo đất</strong>:</p>

        <ul className="list-square">

          <li><strong>Mua heo đất</strong>: Bạn có thể mua <strong>heo đất</strong> ở cửa hàng quà lưu niệm, đồ chơi hoặc siêu thị.</li>

          <li><strong>Trang trí heo đất</strong>: Bạn có thể trang trí <strong>heo đất</strong> theo ý thích của mình bằng sơn, bút màu,...</li>

          <li><strong>Bỏ tiền vào heo đất</strong>: Bỏ tiền lẻ hoặc tiền tiết kiệm vào <strong>heo đất</strong> mỗi ngày.</li>

          <li><strong>Đập heo đất</strong>: Khi <strong>heo đất</strong> đầy, bạn có thể đập <strong>heo đất</strong> để lấy tiền ra.</li>

        </ul>

      <p className="margin-top-20"><strong>Heo đất</strong> là một món quà ý nghĩa dành cho trẻ em, giúp các bé học cách tiết kiệm tiền và quản lý tài chính một cách hiệu quả.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p><strong>Heo đất</strong> - "Ngân hàng" nhỏ xinh cho bé bỏ tiền vào!</p>

      <p>Hãy tưởng tượng <strong>heo đất</strong> như một chú heo con háu ăn, bụng nó rất to và có thể nuốt rất nhiều tiền.</p>

      <p>Nhiệm vụ của bạn là cho chú heo con này ăn tiền mỗi ngày, giống như cho heo thật ăn. Càng cho heo con ăn nhiều tiền, bụng heo sẽ càng to và bạn sẽ tiết kiệm được càng nhiều tiền.</p>

      <h3 className="margin-y-50 text-center">Tại sao người ta lại dùng heo đất để tiết kiệm tiền?</h3>

        <ul className="list-square">

          <li><strong>Heo con rất dễ thương</strong>: <strong>Heo đất</strong> có hình dáng ngộ nghĩnh, đáng yêu, giống như heo con thật, khiến các bé thích thú khi cho heo ăn tiền.</li>

          <li><strong>Heo con có thể ăn nhiều</strong>: <strong>Heo đất</strong> có thể chứa được rất nhiều tiền, giúp bạn tiết kiệm được nhiều hơn.</li>

          <li><strong>Heo con mang lại may mắn</strong>: Nhiều người tin rằng <strong>heo đất</strong> mang lại may mắn và tài lộc cho gia đình.</li>

          <li><strong>Heo con giúp bé học cách quản lý tiền</strong>: Việc cho <strong>heo đất</strong> ăn tiền mỗi ngày giúp bé học cách tiết kiệm tiền và quản lý tài chính ngay từ khi còn nhỏ.</li>

        </ul>

      <p className="margin-top-20">Cách sử dụng <strong>heo đất</strong>:</p>

        <ul className="list-square">

          <li><strong>Mua heo đất</strong>: Bạn có thể mua <strong>heo đất</strong> ở cửa hàng bán đồ chơi hoặc siêu thị.</li>

          <li><strong>Trang trí heo đất</strong>: Bạn có thể trang trí <strong>heo đất</strong> theo ý thích của mình bằng sơn màu, bút vẽ,...</li>

          <li><strong>Cho heo đất ăn tiền</strong>: Bỏ tiền lẻ hoặc tiền tiết kiệm vào khe hở trên lưng <strong>heo đất</strong> mỗi ngày.</li>

          <li><strong>Lấy tiền ra khỏi heo đất</strong>: Khi <strong>heo đất</strong> đã đầy, bạn có thể đập <strong>heo đất</strong> để lấy tiền ra.</li>

        </ul>

      <p className="margin-top-20"><strong>Heo đất</strong> là một món quà ý nghĩa dành cho trẻ em, giúp các bé học cách tiết kiệm tiền và quản lý tài chính một cách hiệu quả.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>June 1, 2024 · by 💎GEM ·</span>
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