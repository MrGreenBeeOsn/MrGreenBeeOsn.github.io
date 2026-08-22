import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function PhuongTrinhKeToan(): React.JSX.Element {

  const postId = "PhuongTrinhKeToan";

  return (<>

  <main className="image image2">

    <article>
  
      <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Phương trình kế toán là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Kế toán. */}

      <p><strong>Phương trình kế toán</strong> là một công thức đơn giản giúp ta hiểu rõ mối quan hệ giữa tài sản, nợ phải trả và vốn chủ sở hữu của một doanh nghiệp.</p>

      <p>Công thức của <strong>phương trình kế toán</strong> là:</p>

        <p className="margin-y-50 text-center">

          <span className="highlight-255-padding-0-4 text-border">
            <strong>
              <HashLink smooth to="#tai-san">Tài sản</HashLink>
            </strong>
          </span> =&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <strong>
              <HashLink smooth to="#no-phai-tra">Nợ phải trả</HashLink>
            </strong>
          </span> +&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <strong>
              <HashLink smooth to="#von-chu-so-huu">Vốn chủ sở hữu</HashLink>
            </strong>
          </span>
        
        </p>

      <p className="margin-top-20">Giải thích:</p>
      
      <h3 className="margin-y-50 text-center" id="tai-san">Tài sản:</h3>
      
      <p>Là tất cả những gì doanh nghiệp sở hữu, bao gồm tiền mặt, hàng hóa, thiết bị, nhà đất,...</p>
      
      <h3 className="margin-y-50 text-center" id="no-phai-tra">Nợ phải trả:</h3>
      
      <p>Là số tiền doanh nghiệp đang nợ người khác, bao gồm tiền vay ngân hàng, tiền nợ nhà cung cấp,...</p>
      
      <h3 className="margin-y-50 text-center" id="von-chu-so-huu">Vốn chủ sở hữu:</h3>
      
      <p>Là số tiền mà chủ sở hữu đã đầu tư vào doanh nghiệp.</p>

      <p><strong>Phương trình kế toán</strong> luôn cân bằng, nghĩa là:</p>

        <p className="margin-top-50 text-center">

          <span className="highlight-255-padding-0-4 text-border">
            Tài sản
          </span> -&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            Nợ phải trả
          </span> =&nbsp;
          
          <span className="highlight-255-padding-0-4 text-border">
            Vốn chủ sở hữu
          </span>

        </p>
      
      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <ul className="list-square">

          <li>Doanh nghiệp có tài sản là 100 triệu đồng.</li>

          <li>Doanh nghiệp nợ người khác 50 triệu đồng.</li>

        </ul>
      
      <p className="margin-top-20">Vậy vốn chủ sở hữu của doanh nghiệp là 50 triệu đồng.</p>
      
      <p><strong>Phương trình kế toán</strong> giúp ta:</p>

        <ul className="list-square">

          <li>Hiểu rõ tình hình tài chính của doanh nghiệp.</li>

          <li>Đánh giá hiệu quả hoạt động của doanh nghiệp.</li>

          <li>Dự đoán khả năng phát triển của doanh nghiệp.</li>

        </ul>

      <p className="margin-top-20"><strong>Phương trình kế toán</strong> là một công cụ quan trọng trong quản trị tài chính doanh nghiệp.</p>

      <p>Ngoài ra, bạn có thể tham khảo thêm:</p>

      <p>Hy vọng những thông tin trên hữu ích với bạn!</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p><strong>Phương trình kế toán</strong> là một công thức giúp ta biết được "túi tiền" của công ty có bao nhiêu tiền.</p>
      
      <p>Giống như con có heo đất để tiết kiệm tiền, công ty cũng có "heo đất" riêng.</p>

      <h3 className="margin-top-50 margin-bottom-20 text-center">Phương trình kế toán là:</h3>

        <p className="margin-y-50 text-center">

          <span className="highlight-255-padding-0-4 text-border">
            <strong>Tài sản</strong>
          </span> =&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <strong>Nợ phải trả</strong>
            </span> +&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            <strong>Vốn chủ sở hữu</strong>
          </span>

        </p>

      <p className="margin-top-20">Giải thích:</p>

        <ul className="list-square">

          <li><strong>Tài sản</strong>: Là tất cả những gì công ty sở hữu, bao gồm tiền mặt, hàng hóa, xe cộ, nhà cửa,...</li>

          <li><strong>Nợ phải trả</strong>: Là số tiền công ty đang nợ người khác, bao gồm tiền vay ngân hàng, tiền nợ nhà cung cấp,...</li>

          <li><strong>Vốn chủ sở hữu</strong>: Là số tiền mà chủ sở hữu đã đầu tư vào công ty.</li>

        </ul>

      <p className="margin-top-20"><strong>Phương trình kế toán</strong> luôn cân bằng, nghĩa là:</p>

        <p className="margin-top-50 text-center">

          <span className="highlight-255-padding-0-4 text-border">
            Tài sản
          </span> -&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            Nợ phải trả
          </span> =&nbsp;

          <span className="highlight-255-padding-0-4 text-border">
            Vốn chủ sở hữu
          </span>

        </p>
      
      <h3 className="margin-y-50 text-center">Ví dụ:</h3>

      <ul className="list-square">

          <li>Công ty có tài sản là 100 triệu đồng.</li>

          <li>Công ty nợ người khác 50 triệu đồng.</li>

        </ul>
      
      <p className="margin-top-20">Vậy vốn chủ sở hữu của công ty là 50 triệu đồng.</p>

      <p><strong>Phương trình kế toán</strong> giúp ta:</p>

        <ul className="list-square">

          <li>Biết được "túi tiền" của công ty có bao nhiêu tiền.</li>

          <li>Biết được công ty có đang nợ ai hay không.</li>

          <li>Biết được chủ sở hữu đã đầu tư bao nhiêu tiền vào công ty.</li>

        </ul>

      <p className="margin-top-20"><strong>Phương trình kế toán</strong> là một công cụ quan trọng để giúp "ông chủ" quản lý công ty.</p>

      <p>Ngoài ra, con cũng có thể:</p>

        <ul className="list-square">

          <li>Hỏi ba mẹ về <strong>phương trình kế toán</strong>.</li>

          <li>Xem phim hoạt hình về <strong>phương trình kế toán</strong>.</li>

          <li>Chơi trò chơi quản lý "túi tiền" của công ty.</li>

        </ul>

      <p className="margin-top-20">Hãy biến việc học về <strong>phương trình kế toán</strong> trở thành một hoạt động vui vẻ và bổ ích!</p>

      <p>Chúc con thành công!</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>March 3, 2024 · by 💎GEM ·</span>
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