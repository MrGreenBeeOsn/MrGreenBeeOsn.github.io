// AccountingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import VnPracticeQuiz from '../../../../../components/quiz/VnPracticeQuiz';

import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import EyeIcon from '@/components/view/EyeIcon';
import ViewCounter from '@/components/view/ViewCounter';
import LikeButton from '@/components/like/LikeButton';

interface Question {
	id: number;
	question: string;
	options: string[];
	correctAnswer: number;
	explanation: string;
}

export default function TracNghiemVeTTS(): React.JSX.Element {
	// Danh sách câu hỏi về Thuế Tài sản cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Thuế tài sản là loại thuế đánh vào đối tượng nào?",
			options: [
				"Thu nhập phát sinh từ tài sản",
				"Giá trị của tài sản hiện có",
				"Hoạt động chuyển nhượng tài sản",
				"Việc sử dụng tài sản trong kinh doanh"
			],
			correctAnswer: 1,
			explanation: "Thuế tài sản (hay thuế giá trị tài sản ròng) đánh trực tiếp vào giá trị của tài sản (nhà, đất, v.v.) mà cá nhân, tổ chức đang sở hữu. Thuế này được tính dựa trên giá trị tài sản, và không phụ thuộc vào việc tài sản đó có sinh ra thu nhập hay không."
		},
		{
			id: 2,
			question: "Ở Việt Nam, đối tượng tài sản nào được đề xuất áp dụng Thuế tài sản trong các dự thảo chính sách gần đây?",
			options: [
				"Tất cả các loại tài sản hữu hình và vô hình.",
				"Đất ở, nhà ở có giá trị lớn hoặc vượt hạn mức.",
				"Phương tiện giao thông cá nhân.",
				"Cổ phiếu và các chứng khoán khác."
			],
			correctAnswer: 1,
			explanation: "Đối tượng trọng tâm và gây nhiều tranh cãi nhất khi bàn luận về Thuế tài sản tại Việt Nam là đất ở và nhà ở, đặc biệt là những tài sản có giá trị lớn hoặc là nhà ở, đất ở thứ hai trở đi (vượt hạn mức), nhằm mục đích điều tiết."
		},
		{
			id: 3,
			question: "Cơ sở chính để xác định mức Thuế tài sản phải nộp là gì?",
			options: [
				"Thu nhập của người sở hữu tài sản.",
				"Số lần tài sản được sử dụng trong năm.",
				"Giá trị tính thuế của tài sản (thường là giá trị thị trường hoặc giá trị theo bảng giá của Nhà nước).",
				"Mục đích sử dụng tài sản (ở, kinh doanh, sản xuất)."
			],
			correctAnswer: 2,
			explanation: "Thuế tài sản là thuế suất áp dụng trên giá trị của tài sản. Giá trị tính thuế là căn cứ quan trọng nhất để xác định số thuế phải nộp."
		},
		{
			id: 4,
			question: "Thuế tài sản thuộc nhóm thuế nào trong hệ thống thuế?",
			options: [
				"Thuế gián thu",
				"Thuế trực thu",
				"Thuế tiêu dùng",
				"Thuế xuất nhập khẩu"
			],
			correctAnswer: 1,
			explanation: "Thuế tài sản là loại thuế trực thu vì người nộp thuế (chủ sở hữu tài sản) cũng chính là người chịu thuế, không thể chuyển gánh nặng thuế sang cho bên thứ ba thông qua giá cả."
		},
		{
			id: 5,
			question: "Mục đích chủ yếu của việc áp dụng Thuế tài sản đối với nhà ở, đất ở là gì?",
			options: [
				"Khuyến khích người dân mua sắm nhiều tài sản hơn.",
				"Điều tiết thu nhập, góp phần bình ổn thị trường bất động sản và chống đầu cơ.",
				"Tăng nguồn thu cho ngân sách trung ương.",
				"Giảm chi phí quản lý hành chính cho Nhà nước."
			],
			correctAnswer: 1,
			explanation: "Thuế tài sản, đặc biệt đối với bất động sản giá trị lớn, nhằm mục đích tăng công bằng xã hội và ngăn chặn hành vi tích trữ, đầu cơ bất động sản không cần thiết."
		},
		{
			id: 6,
			question: "Nếu Thuế tài sản được áp dụng theo phương pháp lũy tiến, điều này có nghĩa là gì?",
			options: [
				"Thuế suất không thay đổi theo giá trị tài sản.",
				"Thuế suất giảm khi giá trị tài sản tăng lên.",
				"Thuế suất tăng lên khi giá trị tài sản hoặc số lượng tài sản tăng lên.",
				"Thuế suất chỉ áp dụng cho tài sản mới mua."
			],
			correctAnswer: 2,
			explanation: "Thuế lũy tiến là cơ chế đánh thuế trong đó thuế suất (tỷ lệ thuế) tăng lên theo mức tăng của cơ sở tính thuế (giá trị tài sản)."
		},
		{
			id: 7,
			question: "Ở các quốc gia phát triển, Thuế tài sản thường là nguồn thu quan trọng nhất cho cấp ngân sách nào?",
			options: [
				"Ngân sách trung ương",
				"Ngân sách địa phương (chính quyền thành phố, quận/huyện)",
				"Ngân sách quốc phòng",
				"Ngân sách dự trữ quốc gia"
			],
			correctAnswer: 1,
			explanation: "Tại nhiều quốc gia, Thuế tài sản (Property Tax) được dùng để tài trợ trực tiếp cho các dịch vụ công cộng tại địa phương (trường học, đường sá, an ninh), nên nó là nguồn thu chính của ngân sách cấp này."
		},
		{
			id: 8,
			question: "Trường hợp nào sau đây có khả năng được miễn Thuế tài sản (nếu chính sách được áp dụng)?",
			options: [
				"Tài sản dùng để đầu cơ.",
				"Tài sản có giá trị rất cao.",
				"Nhà ở xã hội, nhà ở thuộc diện tái định cư hoặc đất nông nghiệp.",
				"Tài sản được sử dụng để cho thuê kinh doanh."
			],
			correctAnswer: 2,
			explanation: "Chính sách miễn giảm thuế thường được áp dụng cho các đối tượng nhằm đảm bảo an sinh xã hội (nhà ở xã hội, tái định cư) hoặc khuyến khích sản xuất (đất nông nghiệp)."
		},
		{
			id: 9,
			question: "Thuế tài sản và Thuế sử dụng đất phi nông nghiệp có mối quan hệ như thế nào?",
			options: [
				"Chúng là hai tên gọi khác nhau của cùng một loại thuế.",
				"Thuế tài sản là một loại thuế rộng hơn, bao gồm cả Thuế sử dụng đất phi nông nghiệp.",
				"Thuế sử dụng đất phi nông nghiệp là một loại thuế rộng hơn, bao gồm cả Thuế tài sản.",
				"Chúng là hai loại thuế hoàn toàn độc lập và không liên quan đến nhau."
			],
			correctAnswer: 1,
			explanation: "Thuế sử dụng đất phi nông nghiệp chỉ đánh vào giá trị đất. Thuế tài sản (khi đề xuất) thường đánh vào giá trị đất VÀ giá trị công trình xây dựng trên đất (nhà ở), do đó nó có phạm vi rộng hơn."
		},
		{
			id: 10,
			question: "Vấn đề lớn nhất khi áp dụng Thuế tài sản theo giá trị thị trường là gì?",
			options: [
				"Khó khăn trong việc tìm người chịu trách nhiệm nộp thuế.",
				"Thuế suất quá thấp dẫn đến nguồn thu không đáng kể.",
				"Việc xác định giá trị thị trường của tài sản (đặc biệt là bất động sản) mang tính phức tạp, biến động và dễ gây tranh cãi.",
				"Tài sản không bị mất giá theo thời gian."
			],
			correctAnswer: 2,
			explanation: "Thách thức lớn nhất là làm thế nào để định giá tài sản (thẩm định giá) một cách chính xác, minh bạch, và công bằng theo giá trị thị trường để làm cơ sở tính thuế."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/thue#tai-san-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế Tài sản</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Về Thuế Tài Sản</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Thuế Tài sản</p>
				</header>
	
				{/* This is the content of Thuế Tài sản Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 12, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};