import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/EyeIcon';
import ViewCounter from '@/components/ViewCounter';
import LikeButton from '@/components/LikeButton';

export default function CongChungVien(): React.JSX.Element {

  const postId = "CongChungVien";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/luat#thuat-ngu-luat"><mark className="highlight-tertiary-padding-4-8">Luật</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Công chứng viên là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Luật. */}

      <p><strong>Công chứng viên</strong> là một người rất đặc biệt, giống như một bác sĩ cho các giấy tờ quan trọng vậy. Họ có nhiệm vụ kiểm tra và xác nhận xem những giấy tờ đó có đúng và hợp pháp không.</p>

      <p className="margin-top-20">Công việc của công chứng viên:</p>
      
        <ul className="list-square">
      
          <li><strong>Kiểm tra giấy tờ</strong>: Khi chúng ta có những giấy tờ quan trọng như hợp đồng mua bán nhà, giấy ủy quyền, giấy khai sinh,... và muốn cho giấy tờ đó có giá trị pháp lý, chúng ta sẽ mang đến văn phòng công chứng. <strong>Công chứng viên</strong> sẽ xem xét kỹ lưỡng từng chữ, từng số trên giấy tờ để đảm bảo mọi thông tin đều chính xác.</li>
      
          <li><strong>Đóng dấu và ký tên</strong>: Sau khi kiểm tra xong, nếu giấy tờ hợp lệ, <strong>công chứng viên</strong> sẽ đóng dấu và ký tên lên đó. Dấu và chữ ký của <strong>công chứng viên</strong> giống như một cái tem chứng nhận rằng giấy tờ đó là thật và có giá trị pháp lý.</li>
      
          <li><strong>Tư vấn pháp luật</strong>: Ngoài ra, <strong>công chứng viên</strong> còn giúp chúng ta hiểu rõ hơn về những giấy tờ mà mình đang làm, giải thích những điều khoản trong hợp đồng và tư vấn cho chúng ta những vấn đề liên quan đến pháp luật.</li>
      
        </ul>

      <h4 className="margin-y-50 text-center">Tại sao cần có công chứng viên?</h4>
      
        <ul className="list-square">
      
          <li><strong>Để bảo vệ quyền lợi</strong>: Giấy tờ được <strong>công chứng viên</strong> chứng thực sẽ giúp chúng ta bảo vệ quyền lợi của mình khi xảy ra tranh chấp.</li>
      
          <li><strong>Để tạo sự tin tưởng</strong>: Khi một giấy tờ được công chứng, mọi người sẽ tin tưởng rằng thông tin trên đó là chính xác và hợp pháp.</li>
      
          <li><strong>Để thực hiện các thủ tục hành chính</strong>: Nhiều thủ tục hành chính yêu cầu phải có giấy tờ được công chứng.</li>
      
        </ul>

      <h4 className="margin-y-50 text-center">Ví dụ:</h4>
          
        <ul className="list-square">
      
          <li>Khi chúng ta mua nhà, hợp đồng mua bán phải được công chứng để đảm bảo quyền sở hữu của chúng ta.</li>
      
          <li>Khi chúng ta muốn ủy quyền cho ai đó làm việc gì đó thay mình, giấy ủy quyền phải được công chứng để giấy ủy quyền đó có giá trị pháp lý.</li>
      
        </ul>

      <h4 className="margin-y-50 text-center">Tóm lại:</h4>

      <p><strong>Công chứng viên</strong> là người có nhiệm vụ xác nhận tính pháp lý của các giấy tờ quan trọng. Nhờ có <strong>công chứng viên</strong>, chúng ta mới có thể yên tâm thực hiện các giao dịch quan trọng trong cuộc sống.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Tưởng tượng con có một bức tranh vẽ con mèo rất đẹp. Con muốn cho bạn mượn bức tranh đó, nhưng ba mẹ con muốn có một dấu hiệu đặc biệt để chứng minh bức tranh đó là của con.</p>

      <p>Lúc này, người lớn sẽ đưa con đến gặp một người rất đặc biệt gọi là <strong>công chứng viên</strong>.</p>

      <p><strong>Công chứng viên</strong> giống như một bác sĩ cho các giấy tờ quan trọng vậy. Bác sĩ khám bệnh cho chúng ta để biết chúng ta có khỏe không, còn <strong>công chứng viên</strong> sẽ kiểm tra giấy tờ của chúng ta để xem chúng có đúng và hợp pháp không.</p>

      <p><strong>Công chứng viên</strong> sẽ nhìn kỹ bức tranh của con, xem con vẽ có đẹp không và xem có phải con tự vẽ hay không. Sau đó, bác ấy sẽ đóng một con dấu to và đẹp lên bức tranh. Con dấu này giống như một cái tem chứng tỏ bức tranh đó là của con thật.</p>

      <h4 className="margin-y-50 text-center">Tại sao cần có con dấu của công chứng viên?</h4>
          
        <ul className="list-square">
      
          <li><strong>Để bảo vệ bức tranh</strong>: Con dấu này sẽ giúp mọi người biết chắc chắn bức tranh là của con, không ai có thể lấy cắp và nói đó là của họ được.</li>
      
          <li><strong>Để làm giấy tờ quan trọng</strong>: Khi lớn lên, con sẽ có nhiều giấy tờ quan trọng như giấy khai sinh, sổ hộ khẩu,... Những giấy tờ này cũng cần có con dấu của <strong>công chứng viên</strong> để chứng minh chúng là thật.</li>
      
        </ul>

      <p className="margin-top-20">Giống như khi chúng ta đi khám bệnh, bác sĩ sẽ cho chúng ta một tờ giấy để chứng minh chúng ta đã đi khám, <strong>công chứng viên</strong> cũng sẽ cho chúng ta một tờ giấy chứng minh bức tranh là của con.</p>

      <h4 className="margin-y-50 text-center">Tóm lại:</h4>

      <p><strong>Công chứng viên</strong> là một người rất giỏi, giúp chúng ta làm cho những giấy tờ quan trọng trở nên thật sự quan trọng. Con dấu của <strong>công chứng viên</strong> giống như một cái tem chứng minh giấy tờ đó là thật.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 16, 2024 · by 💎Gem ·</span>
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