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

export default function TracNghiemVeTXK(): React.JSX.Element {
	// Danh sách câu hỏi về Thuế Xuất khẩu cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Thuế xuất khẩu là gì?",
			options: [
				"Là loại thuế thu vào hàng hóa, dịch vụ được bán trong nước.",
				"Là loại thuế thu vào hàng hóa được nhập khẩu qua cửa khẩu, biên giới Việt Nam.",
				"Là loại thuế thu vào hàng hóa được xuất khẩu qua cửa khẩu, biên giới Việt Nam.",
				"Là loại thuế thu vào thu nhập của các doanh nghiệp."
			],
			correctAnswer: 2,
			explanation: "Thuế xuất khẩu là loại thuế gián thu đánh vào hàng hóa được phép xuất khẩu qua cửa khẩu, biên giới Việt Nam."
		},
		{
			id: 2,
			question: "Căn cứ tính Thuế xuất khẩu là gì?",
			options: [
				"Số lượng hàng hóa thực tế xuất khẩu và thuế suất.",
				"Trị giá tính thuế và thuế suất.",
				"Trị giá tính thuế, số lượng hàng hóa và thuế suất.",
				"Trị giá tính thuế và thuế suất tại thời điểm đăng ký Tờ khai hải quan."
			],
			correctAnswer: 3,
			explanation: "Căn cứ tính thuế xuất khẩu là Trị giá tính thuế và thuế suất tại thời điểm đăng ký Tờ khai hải quan."
		},
		{
			id: 3,
			question: "Thuế suất Thuế xuất khẩu được quy định như thế nào?",
			options: [
				"Áp dụng theo biểu thuế suất cố định cho mọi mặt hàng.",
				"Áp dụng theo một mức thuế suất duy nhất (thuế suất tuyệt đối).",
				"Áp dụng theo Biểu thuế suất ưu đãi, ưu đãi đặc biệt hoặc thuế suất thông thường.",
				"Doanh nghiệp tự kê khai và quyết định mức thuế suất."
			],
			correctAnswer: 2,
			explanation: "Thuế suất thuế xuất khẩu được quy định theo Biểu thuế xuất khẩu, bao gồm thuế suất ưu đãi, ưu đãi đặc biệt và thuế suất thông thường, tùy thuộc vào xuất xứ và thỏa thuận thương mại."
		},
		{
			id: 4,
			question: "Thời điểm nào được xác định để tính Thuế xuất khẩu?",
			options: [
				"Thời điểm hàng hóa đến cửa khẩu xuất.",
				"Thời điểm hợp đồng mua bán được ký kết.",
				"Thời điểm hàng hóa được sản xuất xong.",
				"Thời điểm đăng ký Tờ khai hải quan (trừ trường hợp pháp luật có quy định khác)."
			],
			correctAnswer: 3,
			explanation: "Theo quy định hiện hành, thời điểm tính thuế xuất khẩu là thời điểm đăng ký Tờ khai hải quan, đây là thời điểm xác định nghĩa vụ thuế."
		},
		{
			id: 5,
			question: "Đơn vị nào có trách nhiệm ban hành Biểu thuế xuất khẩu?",
			options: [
				"Quốc hội.",
				"Bộ Tài chính.",
				"Chính phủ.",
				"Tổng cục Hải quan."
			],
			correctAnswer: 2,
			explanation: "Biểu thuế xuất khẩu, Biểu thuế nhập khẩu do Chính phủ ban hành theo quy định của Luật Thuế xuất khẩu, Thuế nhập khẩu."
		},
		{
			id: 6,
			question: "Đối tượng nào sau đây không phải nộp Thuế xuất khẩu?",
			options: [
				"Hàng hóa là sản phẩm chế biến từ tài nguyên thiên nhiên, khoáng sản.",
				"Hàng hóa được gia công cho nước ngoài và sau đó xuất khẩu trở lại.",
				"Hàng hóa được sản xuất tại Việt Nam đưa vào khu phi thuế quan.",
				"Hàng hóa được miễn thuế theo quy định của pháp luật."
			],
			correctAnswer: 3,
			explanation: "Các đối tượng được miễn thuế xuất khẩu theo quy định của pháp luật (như hàng viện trợ nhân đạo, hàng hóa tạm xuất tái nhập,...) sẽ không phải nộp Thuế xuất khẩu."
		},
		{
			id: 7,
			question: "Trị giá tính Thuế xuất khẩu là gì?",
			options: [
				"Trị giá bán tại cửa khẩu nhập.",
				"Giá bán theo hợp đồng thương mại.",
				"Giá vốn sản xuất hàng hóa.",
				"Trị giá bán tại cửa khẩu xuất (giá FOB hoặc tương đương) không bao gồm phí bảo hiểm và vận tải quốc tế."
			],
			correctAnswer: 3,
			explanation: "Trị giá tính thuế xuất khẩu là trị giá tính theo giá bán tại cửa khẩu xuất (giá FOB – Free On Board hoặc giá tương đương)."
		},
		{
			id: 8,
			question: "Mặt hàng nào sau đây thường chịu mức thuế suất Thuế xuất khẩu cao?",
			options: [
				"Hàng hóa có giá trị gia tăng cao, khuyến khích xuất khẩu.",
				"Sản phẩm công nghệ cao, ít sử dụng tài nguyên.",
				"Hàng hóa là tài nguyên, khoáng sản chưa qua chế biến hoặc đã qua chế biến đơn giản.",
				"Hàng nông sản, thủy sản tươi sống."
			],
			correctAnswer: 2,
			explanation: "Nhà nước thường áp dụng mức thuế suất cao đối với hàng hóa là tài nguyên, khoáng sản để hạn chế xuất khẩu nguyên liệu thô và khuyến khích chế biến sâu."
		},
		{
			id: 9,
			question: "Việc nộp Thuế xuất khẩu được thực hiện tại cơ quan nào?",
			options: [
				"Cơ quan Thuế nội địa (Cục Thuế, Chi cục Thuế).",
				"Kho bạc Nhà nước.",
				"Cơ quan Hải quan.",
				"Ngân hàng thương mại."
			],
			correctAnswer: 2,
			explanation: "Thuế xuất khẩu là loại thuế do cơ quan Hải quan quản lý và thu, người nộp thuế thực hiện thủ tục và nghĩa vụ nộp thuế tại Cơ quan Hải quan."
		},
		{
			id: 10,
			question: "Mặt hàng xuất khẩu nào được miễn thuế nếu đáp ứng các điều kiện theo quy định?",
			options: [
				"Hàng hóa xuất khẩu không sử dụng nguyên vật liệu nhập khẩu.",
				"Hàng hóa nhập khẩu để gia công, sau đó xuất khẩu sản phẩm gia công.",
				"Hàng hóa xuất khẩu có giá trị dưới 50 triệu đồng.",
				"Hàng hóa xuất khẩu sang các nước không có hiệp định thương mại tự do."
			],
			correctAnswer: 1,
			explanation: "Hàng hóa nhập khẩu để gia công, sau đó xuất khẩu sản phẩm gia công theo hợp đồng đã ký với nước ngoài thường thuộc đối tượng được miễn thuế xuất khẩu theo Luật Thuế xuất khẩu, Thuế nhập khẩu."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/thue#txk-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế Xuất khẩu</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Về Thuế Xuất Khẩu</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental thuế Xuất khẩu</p>
				</header>
	
				{/* This is the content of Thuế Xuất khẩu Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 11, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};