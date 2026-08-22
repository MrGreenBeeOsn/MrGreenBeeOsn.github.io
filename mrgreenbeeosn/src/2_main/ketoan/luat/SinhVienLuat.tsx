import React from 'react';
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

export default function SinhVienLuat(): React.JSX.Element {

	const postId = "SinhVienLuat";

	return (<>

	<main className="image image2">

		<article>
		
			<h4><HashLink smooth to="/luat#thuat-ngu-luat"><mark className="highlight-tertiary-padding-4-8">Luật</mark></HashLink></h4>
			
			<h1 className="margin-y-50 text-center">Luật thuế là gì?</h1>

			{/* Đây là nội dung của Thuật ngữ Luật. */}

			<p>Chào bạn,</p>

			<p><strong>Sinh viên luật</strong> là những bạn trẻ đang theo học ngành Luật tại các trường đại học. Ngành Luật là một ngành học rất thú vị, giúp chúng ta hiểu rõ hơn về các quy định của pháp luật, về quyền và nghĩa vụ của mỗi người trong xã hội.</p>

			<h3 className="margin-y-50 text-center">Sinh viên luật học những gì?</h3>

				<ul className="list-square">

					<li><strong>Các bộ luật</strong>: <strong>Sinh viên luật</strong> sẽ được học về các bộ luật cơ bản như Bộ luật Dân sự, Bộ luật Hình sự, Bộ luật Tố tụng Dân sự, Bộ luật Tố tụng Hình sự...</li>

					<li><strong>Các lý thuyết pháp lý</strong>: Sinh viên sẽ được học về các lý thuyết pháp lý như lý thuyết về nhà nước pháp quyền, lý thuyết về hợp đồng, lý thuyết về tội phạm...</li>

					<li><strong>Các kỹ năng cần thiết</strong>: Bên cạnh kiến thức chuyên môn, <strong>sinh viên luật</strong> còn được trang bị các kỹ năng như kỹ năng phân tích, kỹ năng lập luận, kỹ năng giao tiếp, kỹ năng làm việc nhóm...</li>

				</ul>

			<h3 className="margin-y-50 text-center">Sinh viên luật làm gì?</h3>

				<ul className="list-square">

					<li><strong>Học bài</strong>: <strong>Sinh viên luật</strong> phải dành nhiều thời gian để học bài, làm bài tập, đọc sách.</li>

					<li><strong>Tham gia các buổi thảo luận</strong>: Sinh viên sẽ được tham gia các buổi thảo luận để trao đổi ý kiến, trình bày quan điểm về các vấn đề pháp lý.</li>

					<li><strong>Thực tập</strong>: Sinh viên có thể tham gia thực tập tại các công ty luật, các cơ quan nhà nước để tích lũy kinh nghiệm.</li>

					<li><strong>Tham gia các hoạt động ngoại khóa</strong>: Sinh viên có thể tham gia các câu lạc bộ luật, các cuộc thi pháp lý để rèn luyện kỹ năng và mở rộng mối quan hệ.</li>

				</ul>

			<h3 className="margin-y-50 text-center">Tại sao nên học luật?</h3>

				<ul className="list-square">

					<li><strong>Hiểu rõ về quyền lợi của mình</strong>: Học luật giúp chúng ta hiểu rõ về quyền và nghĩa vụ của mình, từ đó bảo vệ được quyền lợi hợp pháp của bản thân.</li>

					<li><strong>Có cơ hội việc làm ổn định</strong>: Sinh viên tốt nghiệp ngành Luật có nhiều cơ hội việc làm như luật sư, thẩm phán, công chứng viên, cán bộ tư pháp...</li>

					<li><strong>Đóng góp cho xã hội</strong>: <strong>Sinh viên luật</strong> có thể đóng góp vào việc xây dựng một xã hội công bằng, dân chủ, văn minh.</li>

				</ul>
			
			<p className="margin-top-20">Tóm lại, <strong>sinh viên luật</strong> là những người đang trên con đường trở thành những chuyên gia pháp lý. Họ không chỉ học để có một công việc ổn định mà còn để đóng góp vào sự phát triển của xã hội.</p>

			{/* =============================
					☘️ Hãy nghĩ thật đơn giản!
			============================= */}

			<hr className="hr-short"/>

			<h3 className="margin-bottom-50 text-center">☘️ Hãy nghĩ thật đơn giản!</h3>

			<p>Con ơi, <strong>sinh viên luật</strong> giống như những người thợ xây đang xây một ngôi nhà thật lớn và đẹp. Ngôi nhà đó là bộ luật, giúp chúng ta biết được những điều gì là đúng, điều gì là sai trong cuộc sống.</p>

			<h3 className="margin-y-50 text-center">Sinh viên luật làm gì?</h3>

				<ul className="list-square">

					<li><strong>Học cách xây nhà</strong>: Các bạn <strong>sinh viên luật</strong> sẽ học cách xây từng viên gạch, từng bức tường của ngôi nhà luật. Nghĩa là họ học về các quy định của pháp luật.</li>

					<li><strong>Chơi trò xây nhà</strong>: Các bạn sẽ cùng nhau thảo luận, cùng nhau giải quyết các vấn đề về luật, giống như các bạn nhỏ chơi trò xây nhà bằng lego vậy.</li>

					<li><strong>Tham quan các công trình</strong>: Các bạn sẽ đi tham quan các tòa án, các văn phòng luật để xem ngôi nhà luật được sử dụng như thế nào trong thực tế.</li>

				</ul>

			<h3 className="margin-y-50 text-center">Tại sao lại học luật?</h3>

				<ul className="list-square">

					<li><strong>Để biết mình có quyền gì</strong>: Giống như khi xây một ngôi nhà, chúng ta cần biết căn phòng nào là của mình, <strong>sinh viên luật</strong> sẽ học để biết mình có những quyền gì và nghĩa vụ gì.</li>

					<li><strong>Để giúp đỡ mọi người</strong>: Khi biết luật, các bạn có thể giúp đỡ mọi người khi họ gặp khó khăn liên quan đến pháp luật, giống như khi một ngôi nhà bị hư, thợ xây sẽ đến sửa chữa.</li>

					<li><strong>Để xây dựng một xã hội tốt đẹp</strong>: Khi mọi người đều hiểu luật và tuân thủ luật, xã hội sẽ trở nên công bằng và tốt đẹp hơn.</li>

				</ul>

			<p className="margin-top-20">Tóm lại, <strong>sinh viên luật</strong> là những người đang cố gắng xây dựng một xã hội tốt đẹp hơn bằng cách học hỏi và hiểu rõ về pháp luật.</p>

			<div className="viewcounter">

				<div className="post-date no-margin">
					<span>August 2, 2024 · by 💎GEM ·</span>
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