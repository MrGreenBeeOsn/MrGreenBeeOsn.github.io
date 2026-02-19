// AccountingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import VnPracticeQuiz from '../../../components/quiz/VnPracticeQuiz';

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

export default function PhapLyKeToanQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Mục đích chính của Kế toán pháp lý (Forensic Accounting) là gì?",
			options: [
				"Lập báo cáo tài chính định kỳ cho doanh nghiệp.",
				"Cung cấp bằng chứng và phân tích tài chính phù hợp để sử dụng trước tòa án.",
				"Tính toán số thuế thu nhập cá nhân cho nhân viên.",
				"Giảm thiểu chi phí vận hành của doanh nghiệp."
			],
			correctAnswer: 1,
			explanation: "Khác với kế toán thông thường (phục vụ quản trị/thuế), kế toán pháp lý tập trung vào việc thu thập, phân tích và trình bày các dữ liệu tài chính sao cho chúng có giá trị pháp lý cao nhất để phục vụ tranh tụng hoặc điều tra tội phạm."
		},
		{
			id: 2,
			question: "\"Tam giác gian lận\" (Fraud Triangle) bao gồm ba yếu tố nào sau đây?",
			options: [
				"Cơ hội, Áp lực, Sự hợp lý hóa.",
				"Tiền bạc, Quyền lực, Lòng tham.",
				"Sai sót hệ thống, Thiếu kiểm soát, Ý đồ xấu.",
				"Áp lực, Công nghệ, Sự lỏng lẻo."
			],
			correctAnswer: 0,
			explanation: "Đây là mô hình kinh điển của Donald Cressey. Gian lận xảy ra khi hội tụ đủ 3 yếu tố: Áp lực (túng quẫn tài chính), Cơ hội (lỗ hổng kiểm soát nội bộ) và Sự hợp lý hóa (người phạm tội tự biện hộ rằng hành động của mình là \"mượn tạm\" hoặc \"xứng đáng\")."
		},
		{
			id: 3,
			question: "Điểm khác biệt cơ bản giữa Kiểm toán tài chính và Kế toán pháp lý là gì?",
			options: [
				"Kiểm toán tài chính luôn tìm kiếm gian lận, còn Kế toán pháp lý thì không.",
				"Kiểm toán tài chính dựa trên mẫu thử, trong khi Kế toán pháp lý đi sâu vào chi tiết các giao dịch nghi vấn.",
				"Kế toán pháp lý chỉ thực hiện bởi cơ quan nhà nước.",
				"Không có sự khác biệt nào."
			],
			correctAnswer: 1,
			explanation: "Kiểm toán viên tài chính thường dùng phương pháp chọn mẫu để đưa ra ý kiến về sự trung thực của BCTC. Trong khi đó, kế toán pháp lý thường điều tra 100% các giao dịch liên quan đến một nghi vấn cụ thể để tìm ra \"vết sẹo\" tài chính."
		},
		{
			id: 4,
			question: "Kỹ thuật \"Benford's Law\" thường được kế toán pháp lý sử dụng để làm gì?",
			options: [
				"Tính toán khấu hao tài sản cố định.",
				"Xác định giá trị doanh nghiệp khi sáp nhập.",
				"Phân tích tần suất xuất hiện của các chữ số đầu tiên để phát hiện dữ liệu bất thường.",
				"Dự báo doanh thu trong tương lai."
			],
			correctAnswer: 2,
			explanation: "Luật Benford chỉ ra rằng trong tập dữ liệu số tự nhiên, chữ số 1 xuất hiện ở vị trí đầu tiên khoảng 30% trường hợp, số 2 là 17%,... Nếu một người cố tình làm giả hóa đơn, các con số họ \"bịa\" ra thường không tuân theo quy luật này, giúp chuyên gia phát hiện điểm nghi vấn."
		},
		{
			id: 5,
			question: "Hành vi \"Skimming\" trong gian lận tài chính được hiểu là:",
			options: [
				"Lấy trộm tiền mặt trước khi nó được ghi nhận vào hệ thống kế toán.",
				"Ghi khống hóa đơn để rút tiền từ công ty.",
				"Thay đổi số liệu trên báo cáo tài chính đã công bố.",
				"Sử dụng tài sản công ty cho mục đích cá nhân."
			],
			correctAnswer: 0,
			explanation: "Skimming (hớt váng) là loại gian lận \"ngoài sổ sách\". Ví dụ: Nhân viên bán hàng thu tiền mặt của khách nhưng không xuất hóa đơn và đút túi riêng, do đó hệ thống kế toán không hề biết số tiền đó đã từng tồn tại."
		},
		{
			id: 6,
			question: "Trong một vụ kiện tụng, Kế toán pháp lý thường đóng vai trò là:",
			options: [
				"Thẩm phán đưa ra phán quyết cuối cùng.",
				"Người bào chữa cho bị cáo.",
				"Nhân chứng chuyên gia (Expert Witness).",
				"Thư ký tòa án."
			],
			correctAnswer: 2,
			explanation: "Họ được mời đến tòa để cung cấp các phân tích chuyên sâu về số liệu tài chính phức tạp mà người bình thường (hoặc bồi thẩm đoàn) khó lòng tự hiểu được, từ đó giúp tòa có căn cứ ra quyết định."
		},
		{
			id: 7,
			question: "Thuật ngữ \"Lapping\" đề cập đến loại gian lận nào?",
			options: [
				"Gian lận trong việc mua sắm vật tư.",
				"Che dấu việc mất tiền mặt bằng cách lấy tiền thu hồi nợ của khách hàng này đắp vào khoản nợ của khách hàng khác.",
				"Khai khống doanh số bán hàng vào cuối năm tài chính.",
				"Trả lương cho \"nhân viên ma\"."
			],
			correctAnswer: 1,
			explanation: "Đây là hành vi lấy tiền của khách hàng A để tiêu xài, sau đó khi khách hàng B trả nợ thì lấy tiền đó ghi có cho tài khoản khách hàng A để tránh bị phát hiện nợ quá hạn. Chu trình này phải lặp lại liên tục (lapping) cho đến khi bị đổ vỡ."
		},
		{
			id: 8,
			question: "Bước đầu tiên quan trọng nhất trong quy trình điều tra kế toán pháp lý là:",
			options: [
				"Phỏng vấn ngay lập tức nghi phạm chính.",
				"Thu thập và bảo vệ bằng chứng (Evidence preservation).",
				"Viết báo cáo gửi lên tòa án.",
				"Công bố thông tin cho báo chí."
			],
			correctAnswer: 1,
			explanation: "Nếu bằng chứng (dữ liệu máy tính, sổ sách, email) không được bảo vệ hoặc niêm phong đúng cách, nghi phạm có thể tiêu hủy chúng hoặc luật sư bên đối phương có thể bác bỏ chứng cứ đó tại tòa vì cho rằng nó đã bị thay đổi."
		},
		{
			id: 9,
			question: "\"Rửa tiền\" (Money Laundering) thường bao gồm 3 giai đoạn theo trình tự nào?",
			options: [
				"Sắp xếp (Placement), Phân lớp (Layering), Tích hợp (Integration).",
				"Thu gom, Cất giữ, Sử dụng.",
				"Chuyển khoản, Rút tiền, Đầu tư.",
				"Ngụy trang, Phân tán, Thu hồi."
			],
			correctAnswer: 0,
			explanation: "Đưa tiền bẩn vào hệ thống tài chính. Layering: Tạo ra hàng loạt giao dịch phức tạp để xóa dấu vết gốc. Integration: Đưa tiền đã được làm sạch trở lại nền kinh tế dưới dạng tài sản hợp pháp."
		},
		{
			id: 10,
			question: "Tỷ lệ nợ trên vốn chủ sở hữu tăng đột biến mà không có lý do rõ ràng có thể là dấu hiệu (Red flag) của:",
			options: [
				"Công ty đang quản lý dòng tiền rất tốt.",
				"Gian lận trong việc che dấu nợ phải trả hoặc thổi phồng tài sản.",
				"Sự sụt giảm của thị trường chứng khoán.",
				"Doanh nghiệp đang mở rộng quy mô sản xuất."
			],
			correctAnswer: 1,
			explanation: "\"Red flag\" là những tín hiệu cảnh báo. Sự thay đổi đột ngột của các chỉ số tài chính (như nợ tăng vọt) thường gợi ý rằng công ty đang thực hiện các nghiệp vụ tài chính bất thường để bù đắp thua lỗ hoặc che đậy hành vi chiếm dụng vốn."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#ke-toan-basic-practice"><mark className="highlight-tertiary-padding-4-8">Kế toán</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Pháp Lý Kế Toán</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental kế toán concepts</p>
				</header>
	
				{/* This is the content of Kế toán Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>February 19, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};