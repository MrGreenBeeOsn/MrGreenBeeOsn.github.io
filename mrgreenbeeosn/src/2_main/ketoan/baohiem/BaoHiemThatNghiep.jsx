import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';

export default function BaoHiemThatNghiep() {
	return (<>

	<main className="image image2">
		
		<h4><HashLink smooth to="/bao-hiem#thuat-ngu-bao-hiem"><mark className="highlight-tertiary-padding-4-8">Bảo Hiểm</mark></HashLink></h4>
		
		<h2 className="margin-y-50 text-center">Bảo hiểm thất nghiệp là gì?</h2>

		{/* Đây là nội dung của Thuật ngữ Bảo hiểm. */}
		
		<p>Chào bạn,</p>

		<p><strong>Bảo hiểm thất nghiệp</strong> (<strong>BHTN</strong>) là một chế độ thuộc hệ thống an sinh xã hội, nhằm hỗ trợ người lao động khi họ bị mất việc làm. Khoản hỗ trợ này giúp người lao động có một khoản thu nhập tạm thời trong thời gian tìm kiếm công việc mới.</p>
		
		<h4 className="margin-y-50 text-center">Mục đích của Bảo hiểm thất nghiệp</h4>
		
		<p><strong>Bảo hiểm thất nghiệp</strong> có hai mục đích chính:</p>

			<ol>

				<li><strong>Hỗ trợ tài chính</strong>: Cung cấp một khoản trợ cấp thất nghiệp hàng tháng để giúp người lao động trang trải cuộc sống trong thời gian không có việc làm.</li>

				<li><strong>Hỗ trợ tìm kiếm việc làm</strong>: Cung cấp các dịch vụ tư vấn, giới thiệu việc làm, và hỗ trợ học nghề để người lao động sớm có việc làm mới.</li>

			</ol>

		<h4 className="margin-y-50 text-center">Ai phải tham gia và điều kiện hưởng BHTN</h4>
		
		<p className="margin-top-20"><strong>1</strong>. <strong>Tham gia</strong>:</p>

			<ul className="list-square">

				<li>Người lao động làm việc theo hợp đồng lao động có thời hạn hoặc không xác định thời hạn phải tham gia <strong>BHTN</strong>.</li>

				<li>Người lao động và người sử dụng lao động (công ty) cùng đóng phí vào quỹ <strong>BHTN</strong>.</li>

			</ul>

		<p className="margin-top-20"><strong>2</strong>. <strong>Điều kiện hưởng trợ cấp</strong>:</p>
		
		<p className="text-indent-whole">Để được hưởng trợ cấp thất nghiệp, người lao động cần đáp ứng một số điều kiện cơ bản, trong đó quan trọng nhất là:</p>

			<ul className="list-square">

				<li>Đã chấm dứt hợp đồng lao động (trừ một số trường hợp cụ thể như tự ý bỏ việc).</li>

				<li>Đã đóng <strong>BHTN</strong> đủ thời gian theo quy định (thường là từ 12 tháng trở lên trong vòng 24 tháng trước khi nghỉ việc).</li>

				<li>Đã nộp hồ sơ đề nghị hưởng trợ cấp thất nghiệp trong thời hạn quy định (thường là 03 tháng kể từ ngày chấm dứt hợp đồng lao động).</li>

				<li>Chưa tìm được việc làm sau 15 ngày kể từ ngày nộp hồ sơ.</li>

			</ul>

		<h4 className="margin-y-50 text-center">Quyền lợi khi hưởng BHTN</h4>

			<ul className="list-square">

				<li><strong>Trợ cấp thất nghiệp hàng tháng</strong>: Mức hưởng thường bằng một tỷ lệ phần trăm (ví dụ: 60%) của mức lương bình quân đóng <strong>BHTN</strong> của 06 tháng liền kề trước khi thất nghiệp.</li>

				<li><strong>Hỗ trợ tư vấn</strong>, <strong>giới thiệu việc làm miễn phí</strong>.</li>

				<li><strong>Hỗ trợ học nghề</strong> (nếu có nhu cầu).</li>

			</ul>

		<p className="margin-top-20"><strong>Tóm lại</strong>, <strong>Bảo hiểm thất nghiệp</strong> là một "tấm lưới an toàn" tài chính, giúp người lao động không bị rơi vào cảnh khó khăn về kinh tế ngay lập tức khi mất việc, đồng thời tạo điều kiện để họ nhanh chóng tìm được công việc phù hợp.</p>

		{/* =============================
				☘️ Hãy nghĩ thật đơn giản!
		============================= */}

		<hr className="hr-short"/>

		<h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

		<p>Con ơi, tưởng tượng ba mẹ con có một công việc để kiếm tiền mua đồ ăn, đồ chơi cho con và lo cho gia đình mình. Nhưng chẳng may, một ngày nào đó ba hoặc mẹ con bị mất việc và không có tiền mang về nữa.</p>

		<p><strong>Bảo hiểm thất nghiệp</strong> giống như một chiếc ví dự trữ bí mật của ba mẹ con. Mỗi tháng khi đi làm, ba mẹ con đều bỏ một chút tiền vào chiếc ví này.</p>

		<h4 className="margin-y-50 text-center">Chiếc ví bí mật này giúp gì?</h4>

			<ul className="list-square">

				<li><strong>Có tiền tiêu tạm thời</strong>: Khi ba hoặc mẹ con bị mất việc, chiếc ví này sẽ tự động đưa tiền ra mỗi tháng. Số tiền này tuy không nhiều bằng tiền lương nhưng sẽ giúp ba mẹ con có tiền để mua thức ăn, quần áo cho con trong khi ba mẹ đang đi tìm công việc mới.</li>

				<li><strong>Đi học nghề</strong>: Nếu ba mẹ con muốn học thêm một nghề mới để tìm công việc tốt hơn, chiếc ví này còn có tiền để đóng học phí nữa đấy!</li>

			</ul>

		<h4 className="margin-y-50 text-center">Khi nào được dùng ví?</h4>

			<ul className="list-square">

				<li>Phải là người lớn đã đi làm và bỏ tiền vào ví này thường xuyên.</li>

				<li>Phải thật sự bị mất việc, chứ không phải tự ý nghỉ chơi ở nhà.</li>

				<li>Phải chịu khó đi tìm công việc mới.</li>

			</ul>

		<p className="margin-top-20"><strong>Tóm lại</strong>, <strong>bảo hiểm thất nghiệp</strong> là một cách để những người lớn đi làm cùng nhau tiết kiệm một khoản tiền. Khi ai đó bị mất việc, khoản tiền chung đó sẽ giúp đỡ họ vượt qua khó khăn và sớm tìm được công việc mới.</p>

		<p className="margin-top-50 text-small">October 06, 2025 - by 💎Gem</p>
		
	</main>

	</>);
}