import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BaoHiemYTe(): React.JSX.Element {

  const postId = "BaoHiemYTe";

  return (<>

  <main className="image image2">

    <article>
    
      <h4><HashLink smooth to="/bao-hiem#thuat-ngu-bao-hiem"><mark className="highlight-tertiary-padding-4-8">Bảo Hiểm</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Bảo hiểm y tế là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Bảo hiểm. */}

      <p><strong>Bảo hiểm y tế</strong> là một loại hợp đồng giữa bạn và một công ty bảo hiểm. Theo hợp đồng này, bạn sẽ đóng một khoản phí nhất định hàng tháng hoặc hàng năm. Đổi lại, khi bạn ốm đau, bệnh tật hoặc gặp phải tai nạn, công ty bảo hiểm sẽ hỗ trợ bạn chi trả một phần hoặc toàn bộ chi phí khám chữa bệnh.</p>

      <h3 className="margin-y-50 text-center">Tại sao cần bảo hiểm y tế?</h3>

        <ul className="list-square">

          <li><strong>Chi phí y tế ngày càng tăng</strong>: Khi ốm đau, bệnh tật, chi phí khám chữa bệnh có thể rất lớn. <strong>Bảo hiểm y tế</strong> giúp bạn chia sẻ gánh nặng tài chính này.</li>

          <li><strong>Yên tâm hơn</strong>: Khi đã có <strong>bảo hiểm y tế</strong>, bạn sẽ không phải lo lắng quá nhiều về chi phí khám chữa bệnh khi ốm đau. Bạn có thể yên tâm điều trị để mau khỏi bệnh.</li>

          <li><strong>Bảo vệ tài chính gia đình</strong>: Nếu không có <strong>bảo hiểm y tế</strong>, một cơn bệnh nặng có thể khiến gia đình bạn rơi vào khó khăn về tài chính.</li>

        </ul>

      <h3 className="margin-y-50 text-center"><strong>Bảo hiểm y tế</strong> bao gồm những gì?</h3>

        <ul className="list-square">

          <li><strong>Khám bệnh</strong>: Chi trả một phần hoặc toàn bộ chi phí khám bệnh tại các cơ sở y tế.</li>

          <li><strong>Chữa bệnh</strong>: Chi trả một phần hoặc toàn bộ chi phí điều trị, mua thuốc, xét nghiệm.</li>

          <li><strong>Nhập viện</strong>: Chi trả một phần hoặc toàn bộ chi phí nhập viện, phẫu thuật.</li>

          <li><strong>Sinh con</strong>: Chi trả một phần hoặc toàn bộ chi phí sinh con.</li>

        </ul>

      <p className="margin-top-20">Quyền lợi khi mua <strong>bảo hiểm y tế</strong>:</p>

        <ul className="list-square">

          <li><strong>Được hỗ trợ tài chính khi ốm đau</strong>: Công ty bảo hiểm sẽ chi trả một phần hoặc toàn bộ chi phí khám chữa bệnh.</li>

          <li><strong>Được lựa chọn cơ sở y tế</strong>: Bạn có thể lựa chọn khám chữa bệnh tại các cơ sở y tế có liên kết với công ty bảo hiểm.</li>

          <li><strong>Được hưởng các dịch vụ chăm sóc sức khỏe khác</strong>: Một số gói bảo hiểm còn cung cấp các dịch vụ chăm sóc sức khỏe khác như khám sức khỏe định kỳ, tư vấn sức khỏe.</li>

        </ul>

      <p className="margin-top-20">Lưu ý khi mua <strong>bảo hiểm y tế</strong>:</p>

        <ul className="list-square">

          <li><strong>Đọc kỹ hợp đồng</strong>: Trước khi ký kết hợp đồng, bạn nên đọc kỹ tất cả các điều khoản để hiểu rõ quyền lợi và nghĩa vụ của mình.</li>

          <li><strong>Chọn gói bảo hiểm phù hợp</strong>: Nên chọn gói bảo hiểm có các dịch vụ phù hợp với nhu cầu và khả năng tài chính của mình.</li>

          <li><strong>Chọn công ty bảo hiểm uy tín</strong>: Nên chọn những công ty bảo hiểm có uy tín trên thị trường để đảm bảo quyền lợi của mình.</li>

        </ul>

      <p className="margin-top-20">Tóm lại, <strong>bảo hiểm y tế</strong> là một công cụ hữu ích giúp bạn bảo vệ sức khỏe và tài chính của gia đình. Nếu bạn muốn tìm hiểu thêm về <strong>bảo hiểm y tế</strong>, bạn có thể tham khảo ý kiến của người tư vấn bảo hiểm hoặc tìm hiểu thông tin trên các trang web của các công ty bảo hiểm.</p>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p>Tưởng tượng con bị ốm và phải đến bệnh viện nhé. Khi đó, ba mẹ con sẽ phải trả một khoản tiền để bác sĩ khám bệnh và cho con uống thuốc.</p>

      <p><strong>Bảo hiểm y tế</strong> giống như một người bạn siêu nhân sẽ giúp ba mẹ con trả một phần hoặc toàn bộ số tiền đó đấy!</p>

      <h3 className="margin-y-50 text-center">Tại sao cần bảo hiểm y tế?</h3>

        <ul className="list-square">

          <li><strong>Khi bị ốm</strong>: Giống như siêu nhân giúp đỡ người yếu, <strong>bảo hiểm y tế</strong> sẽ giúp con khi con bị ốm đau, bệnh tật.</li>

          <li><strong>Không lo tốn tiền</strong>: Khi có <strong>bảo hiểm y tế</strong>, ba mẹ con sẽ không phải lo lắng về việc phải trả quá nhiều tiền khi đi khám bệnh.</li>

          <li><strong>Khỏe mạnh hơn</strong>: Nhờ có <strong>bảo hiểm y tế</strong>, ba mẹ con sẽ yên tâm đi khám bệnh thường xuyên để luôn khỏe mạnh.</li>

        </ul>

      <h3 className="margin-y-50 text-center"><strong>Bảo hiểm y tế</strong> giúp gì cho chúng ta?</h3>

        <ul className="list-square">

          <li><strong>Khám bệnh</strong>: Khi con bị ốm, bảo hiểm sẽ giúp trả tiền để con đi khám bác sĩ.</li>

          <li><strong>Uống thuốc</strong>: Nếu bác sĩ kê đơn thuốc, bảo hiểm sẽ giúp trả tiền thuốc cho con.</li>

          <li><strong>Nhập viện</strong>: Nếu con bị bệnh nặng phải nhập viện, bảo hiểm sẽ giúp trả tiền viện phí.</li>

        </ul>

      <p className="margin-top-20">Tóm lại, <strong>bảo hiểm y tế</strong> giống như một người bạn tốt, luôn sẵn sàng giúp đỡ khi con bị ốm đau.</p>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>August 23, 2024 · by 💎GEM ·</span>
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