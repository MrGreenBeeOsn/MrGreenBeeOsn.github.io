import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function BCLCTTGianTiep(): React.JSX.Element {

  const postId = "BCLCTTGianTiep";

  return (<>

  <main className="image image2">

    <article>
  
      <h4><HashLink smooth to="/ke-toan#thuat-ngu-ke-toan"><mark className="highlight-tertiary-padding-4-8">Kế Toán</mark></HashLink></h4>
      
      <h1 className="margin-y-50 text-center">Báo cáo lưu chuyển tiền tệ gián tiếp là gì?</h1>

      {/* Đây là nội dung của Thuật ngữ Kế toán. */}

      <p><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> - "Bảng theo dõi dòng tiền từ lợi nhuận" trong kế toán!</p>

      <p><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> là một phương pháp lập báo cáo lưu chuyển tiền tệ trong kế toán. Phương pháp này thể hiện dòng tiền của doanh nghiệp một cách gián tiếp thông qua việc điều chỉnh lợi nhuận được ghi nhận trong báo cáo kết quả kinh doanh.</p>

      <p className="margin-top-20"><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> được lập bằng cách thực hiện các bước sau:</p>
      
        <ol>
      
          <li><strong>Bắt đầu với lợi nhuận trước thuế</strong>: Lấy số liệu lợi nhuận trước thuế từ báo cáo kết quả kinh doanh.</li>
      
          <li><strong>Điều chỉnh các khoản không thu tiền</strong>: Thêm vào hoặc trừ đi các khoản thu nhập và chi phí không liên quan đến dòng tiền trong kỳ. Ví dụ, cộng thêm khấu hao tài sản cố định và trừ đi thu nhập từ đầu tư tài chính.</li>
      
          <li><strong>Điều chỉnh các thay đổi trong vốn lưu động</strong>: Phân tích các thay đổi trong các khoản tài khoản vốn lưu động (ví dụ như hàng tồn kho, khoản phải thu, khoản phải trả) để xác định tác động của chúng đến dòng tiền.</li>

          <li><strong>Xác định dòng tiền hoạt động kinh doanh</strong>: Tính toán dòng tiền hoạt động kinh doanh bằng cách cộng hoặc trừ các thay đổi trong các khoản vốn lưu động liên quan đến hoạt động kinh doanh.</li>
      
          <li><strong>Xác định dòng tiền từ hoạt động đầu tư</strong>: Thêm vào hoặc trừ đi các khoản thu nhập và chi phí liên quan đến hoạt động đầu tư (ví dụ như mua bán tài sản cố định, mua bán chứng khoán) để xác định dòng tiền từ hoạt động đầu tư.</li>
      
          <li><strong>Xác định dòng tiền từ hoạt động tài chính</strong>: Thêm vào hoặc trừ đi các khoản thu nhập và chi phí liên quan đến hoạt động tài chính (ví dụ như vay/trả nợ ngân hàng, phát hành/chuyển nhượng cổ phiếu) để xác định dòng tiền từ hoạt động tài chính.</li>

          <li><strong>Xác định tăng</strong>/<strong>giảm tiền và tương đương tiền</strong>: Cộng hoặc trừ các khoản thu nhập và chi phí không liên quan đến dòng tiền để xác định số tiền tăng/giảm tiền và tương đương tiền trong kỳ.</li>
      
        </ol>

      <p className="margin-top-20">Ưu điểm của <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong>:</p>
      
        <ul className="list-square">
      
          <li><strong>Đơn giản</strong>: <strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> thường đơn giản hơn so với phương pháp trực tiếp để lập báo cáo lưu chuyển tiền tệ.</li>
      
          <li><strong>Dễ hiểu</strong>: <strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> dễ hiểu hơn đối với những người không quen thuộc với kế toán.</li>
      
          <li><strong>Ít dữ liệu</strong>: <strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> yêu cầu ít dữ liệu hơn so với phương pháp trực tiếp để lập báo cáo lưu chuyển tiền tệ.</li>
      
        </ul>

      <p className="margin-top-20">Nhược điểm của <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong>:</p>
      
        <ul className="list-square">
      
          <li><strong>Ít chi tiết</strong>: <strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> cung cấp ít thông tin chi tiết hơn về dòng tiền so với phương pháp trực tiếp.</li>
      
          <li><strong>Khó so sánh</strong>: <strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> khó so sánh với báo cáo lưu chuyển tiền tệ của các doanh nghiệp khác.</li>
      
        </ul>
      
      <p className="margin-top-20">Cách lập <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong>:</p>
      
        <ul className="list-square">
      
          <li><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> được lập dựa trên dữ liệu từ báo cáo kết quả kinh doanh, bảng cân đối kế toán và các thông tin khác liên quan đến hoạt động kinh doanh, đầu tư và tài chính của doanh nghiệp.</li>
      
          <li>Doanh nghiệp có thể sử dụng phần mềm kế toán để tự động lập <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong>.</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">Lưu ý:</h3>
      
        <ul className="list-square">
      
          <li><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> cần được lập định kỳ và cập nhật thường xuyên.</li>
      
          <li>Doanh nghiệp cần phân tích kỹ lưỡng thông tin trong <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong> để đưa ra các quyết định phù hợp.</li>
      
        </ul>

      {/* =============================
          ☘️ Hãy nghĩ thật đơn giản!
      ============================= */}

      <hr className="hr-short"/>

      <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

      <p><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> - "Bảng theo dõi tiền heo đất từ sổ tay ghi chép" trong kế toán!</p>

      <p>Con hãy tưởng tượng con có một heo đất để tiết kiệm tiền. Con ghi chép lại số tiền bỏ vào heo đất mỗi ngày vào một cuốn sổ tay. Cuối tháng, con muốn biết mình đã tiết kiệm được bao nhiêu tiền và số tiền đó được sử dụng để mua gì. Lúc này, con có thể sử dụng cuốn sổ tay để tính toán số tiền đó. Cách tính toán này giống như <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong> trong kế toán của các cửa hàng vậy.</p>

      <p><strong>Báo cáo lưu chuyển tiền tệ gián tiếp</strong> giống như một "phép tính siêu toán" giúp các cửa hàng theo dõi tiền mặt của họ từ sổ tay ghi chép trong một khoảng thời gian nhất định (thường là một tháng, quý hoặc năm). Thay vì ghi chép số tiền bỏ vào heo đất, báo cáo sẽ sử dụng các con số trong sổ tay ghi chép để tính toán xem cửa hàng đã kiếm được bao nhiêu tiền từ việc bán hàng, chi tiêu bao nhiêu tiền cho các khoản chi phí và còn lại bao nhiêu tiền mặt.</p>

      <h3 className="margin-y-50 text-center">Báo cáo này giúp ích gì?</h3>
          
      <p><strong>Như con</strong>: Con có thể biết mình đã tiết kiệm được bao nhiêu tiền và số tiền đó được sử dụng để mua gì.</p>

      <p><strong>Cửa hàng</strong>:</p>
      
        <ul className="list-square">
      
          <li>Biết mình đã kiếm được bao nhiêu tiền từ việc bán hàng trong một khoảng thời gian nhất định.</li>
      
          <li>Biết mình đã chi tiêu bao nhiêu tiền cho từng khoản chi phí như tiền mua nguyên vật liệu, tiền lương nhân viên, tiền thuê mặt bằng,...</li>
      
          <li>Biết số tiền họ còn lại sau khi đã trừ đi tất cả các khoản chi phí.</li>

          <li>Biết số tiền họ có thể sử dụng để đầu tư hoặc trả nợ.</li>
      
        </ul>

      <h3 className="margin-y-50 text-center">Báo cáo này tính toán như thế nào?</h3>
          
        <ol>
      
          <li><strong>Bắt đầu với sổ tay ghi chép</strong>: Cửa hàng lấy số tiền lợi nhuận họ đã ghi chép trong sổ tay.</li>
      
          <li><strong>Điều chỉnh một số khoản</strong>: Cửa hàng cần thêm hoặc bớt một số khoản tiền vào số tiền lợi nhuận để tính toán chính xác hơn. Ví dụ, họ cần thêm tiền khấu hao tài sản cố định (bởi vì tài sản sau một thời gian sử dụng sẽ có giá trị thấp hơn) và bớt đi tiền thu nhập từ đầu tư tài chính (bởi vì số tiền này không liên quan đến việc bán hàng).</li>
      
          <li><strong>Tính toán dòng tiền</strong>: Cửa hàng sử dụng các con số đã điều chỉnh để tính toán xem họ đã kiếm được bao nhiêu tiền từ việc bán hàng, chi tiêu bao nhiêu tiền cho các khoản chi phí và còn lại bao nhiêu tiền mặt.</li>
      
        </ol>

      <h3 className="margin-y-50 text-center">Báo cáo này có gì khác với "báo cáo lưu chuyển tiền tệ trực tiếp"?</h3>
          
        <ul className="list-square">
      
          <li>Báo cáo lưu chuyển tiền tệ trực tiếp giống như con ghi chép số tiền bỏ vào heo đất mỗi ngày, còn <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong> giống như con tính toán số tiền heo đất sau khi đã ghi chép tất cả các khoản thu - chi.</li>
      
          <li>Báo cáo lưu chuyển tiền tệ trực tiếp cung cấp nhiều thông tin chi tiết hơn, nhưng <strong>báo cáo lưu chuyển tiền tệ gián tiếp</strong> dễ hiểu và dễ sử dụng hơn.</li>
      
        </ul>

      <div className="viewcounter">

        <div className="post-date no-margin">
          <span>February 26, 2024 · by 💎GEM ·</span>
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