import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '/src/components/EyeIcon';
import ViewCounter from '/src/components/ViewCounter';
import LikeButton from '/src/components/LikeButton';

export default function LuatThue() {

  const postId = "";

  return (<>

  <main className="image image2">
    
    <h4><HashLink smooth to="/luat#thuat-ngu-luat"><mark className="highlight-tertiary-padding-4-8">Luật</mark></HashLink></h4>
    
    <h2 className="margin-y-50 text-center">Luật thuế là gì?</h2>

    {/* Đây là nội dung của Thuật ngữ Luật. */}

    <p><strong>Luật thuế</strong> là một bộ phận của pháp luật quy định về việc thu các khoản tiền từ cá nhân và tổ chức để chi cho các hoạt động của Nhà nước. Nói một cách đơn giản, đó là những quy định về việc chúng ta phải đóng góp một phần tiền thu nhập của mình vào ngân sách nhà nước.</p>

    <h4 className="margin-y-50 text-center">Ví dụ:</h4>

      <ul className="list-square">

        <li><strong>Khi bạn mua một món đồ chơi</strong>: Bạn sẽ phải trả thêm một khoản tiền nhỏ, đó gọi là thuế giá trị gia tăng (VAT).</li>

        <li><strong>Khi ba mẹ bạn đi làm</strong>: Ba mẹ bạn phải nộp thuế thu nhập cá nhân.</li>

        <li><strong>Khi các công ty kinh doanh</strong>: Các công ty cũng phải nộp nhiều loại thuế khác nhau như thuế thu nhập doanh nghiệp, thuế tài sản,...</li>

      </ul>

    <h4 className="margin-y-50 text-center">Tại sao cần có luật thuế?</h4>

      <ul className="list-square">

        <li><strong>Để có tiền xây dựng đất nước</strong>: Tiền thuế được dùng để xây dựng đường xá, bệnh viện, trường học,... phục vụ cho mọi người.</li>

        <li><strong>Để đảm bảo công bằng</strong>: Mọi người đều phải đóng góp một phần vào ngân sách nhà nước, không ai được miễn trừ.</li>

        <li><strong>Để quản lý kinh tế</strong>: Thuế cũng được sử dụng như một công cụ để điều chỉnh nền kinh tế, khuyến khích hoặc hạn chế một số hoạt động kinh tế.</li>

      </ul>

    <p className="margin-top-20">Các loại thuế phổ biến:</p>

      <ul className="list-square">

        <li>
          <strong><Link to="/thue/thue-tncn-la-gi?">Thuế thu nhập cá nhân</Link></strong>: Áp dụng cho thu nhập của mỗi người.
        </li>

        <li>
          <strong><Link to="/thue/thue-tndn-la-gi?">Thuế thu nhập doanh nghiệp</Link></strong>: Áp dụng cho lợi nhuận của các công ty.
        </li>

        <li>
          <strong><Link to="/thue/thue-vat-la-gi?">Thuế giá trị gia tăng</Link></strong> (<strong>VAT</strong>): Áp dụng cho hầu hết các hàng hóa và dịch vụ.
        </li>

        <li>
          <strong><Link to="/thue/thue-tai-san-la-gi?"><strong>Thuế tài sản</strong></Link></strong>: Áp dụng cho các loại tài sản như nhà đất, xe ô tô,...
        </li>

      </ul>

    <p className="margin-top-20">Tóm lại, <strong>luật thuế</strong> là một phần quan trọng của cuộc sống. Nó giúp cho xã hội phát triển và đảm bảo sự công bằng giữa các thành viên.</p>

    {/* =============================
        ☘️ Hãy nghĩ thật đơn giản!
    ============================= */}

    <hr className="hr-short"/>

    <h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

    <p>Con ơi, <strong>luật thuế</strong> giống như một quy định để chúng ta đóng góp một ít tiền cho nhà nước. Cái tiền này sẽ được dùng để xây những con đường đẹp để chúng ta đi, xây những ngôi trường mới để chúng ta học, xây những bệnh viện để chúng ta khám bệnh khi ốm.</p>

    <p>Ví dụ như khi con đi siêu thị cùng ba mẹ và mua một món đồ chơi, ngoài giá tiền của món đồ chơi, chúng ta còn phải trả thêm một ít tiền nữa. Cái tiền thêm đó gọi là thuế.</p>

    <h4 className="margin-y-50 text-center">Tại sao chúng ta phải đóng thuế?</h4>

    <p>Để có tiền xây những thứ thật nhiều và thật đẹp cho tất cả mọi người. Giống như khi chúng ta cùng nhau góp tiền để mua một món quà thật to cho lớp học vậy.</p>

    <p className="margin-top-20">Tóm lại, đóng thuế là một việc làm rất tốt. Nhờ có thuế, đất nước của chúng ta mới ngày càng giàu đẹp.</p>

    <p className="margin-top-50 text-small">August 6, 2024 · by 💎Gem ·</p>

    <div className="viewcounter">

			<div className="post-date no-margin">
				<span>August 30, 2025 · by 💎Gem ·</span>
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
    
  </main>

  </>);
}