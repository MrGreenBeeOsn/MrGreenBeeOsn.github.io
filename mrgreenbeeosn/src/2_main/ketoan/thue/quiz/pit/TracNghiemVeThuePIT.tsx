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

export default function TracNghiemVeThuePIT(): React.JSX.Element {
	// Danh sách câu hỏi về PIT cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Đối tượng nào sau đây không phải là người nộp thuế Thu nhập Cá nhân (TNCN) tại Việt Nam?",
			options: [
				"Cá nhân cư trú có thu nhập chịu thuế phát sinh trong và ngoài lãnh thổ Việt Nam.",
				"Cá nhân cư trú có thu nhập chịu thuế phát sinh tại Việt Nam.",
				"Cá nhân không cư trú có thu nhập chịu thuế phát sinh tại Việt Nam.",
				"Cá nhân nước ngoài làm việc tại Việt Nam dưới 183 ngày trong năm dương lịch."
			],
			correctAnswer: 3,
			explanation: "Cá nhân nước ngoài làm việc tại Việt Nam dưới 183 ngày được coi là cá nhân không cư trú và vẫn phải nộp thuế TNCN đối với thu nhập phát sinh tại Việt Nam (theo thuế suất 20%). Tất cả các trường hợp a, b, c đều là đối tượng nộp thuế TNCN."
		},
		{
			id: 2,
			question: "Thu nhập nào sau đây không thuộc nhóm thu nhập chịu thuế Thu nhập Cá nhân?",
			options: [
				"Thu nhập từ tiền lương, tiền công.",
				"Thu nhập từ đầu tư vốn.",
				"Thu nhập từ chuyển nhượng bất động sản giữa vợ với chồng.",
				"Thu nhập từ trúng thưởng."
			],
			correctAnswer: 2,
			explanation: "Theo Luật Thuế TNCN, thu nhập từ chuyển nhượng bất động sản giữa vợ với chồng (và một số mối quan hệ thân thích khác như cha đẻ, mẹ đẻ, con cái,...) là thu nhập được miễn thuế TNCN."
		},
		{
			id: 3,
			question: "Mức giảm trừ gia cảnh cho bản thân người nộp thuế theo quy định hiện hành là bao nhiêu (áp dụng từ kỳ tính thuế năm 2020)?",
			options: [
				"9 triệu đồng/tháng.",
				"11 triệu đồng/tháng.",
				"4,4 triệu đồng/tháng.",
				"15 triệu đồng/tháng."
			],
			correctAnswer: 1,
			explanation: "Mức giảm trừ gia cảnh hiện hành (áp dụng từ kỳ tính thuế năm 2020) là 11 triệu đồng/tháng cho bản thân người nộp thuế và 4,4 triệu đồng/tháng cho mỗi người phụ thuộc."
		},
		{
			id: 4,
			question: "Thuế suất áp dụng cho thu nhập từ tiền lương, tiền công đối với cá nhân cư trú được tính theo phương pháp nào?",
			options: [
				"Thuế suất cố định 10%.",
				"Thuế suất cố định 20%.",
				"Thuế suất lũy tiến từng phần (từ 5% đến 35%).",
				"Thuế suất toàn phần 25%."
			],
			correctAnswer: 2,
			explanation: "Thu nhập từ tiền lương, tiền công của cá nhân cư trú được tính theo Biểu thuế lũy tiến từng phần với 7 bậc, từ 5% (bậc 1) đến 35% (bậc 7)."
		},
		{
			id: 5,
			question: "Thuế suất áp dụng đối với thu nhập từ chuyển nhượng chứng khoán là bao nhiêu?",
			options: [
				"5% trên thu nhập tính thuế.",
				"0,1% trên giá chuyển nhượng từng lần.",
				"10% trên thu nhập tính thuế.",
				"20% trên thu nhập tính thuế."
			],
			correctAnswer: 1,
			explanation: "Thu nhập từ chuyển nhượng chứng khoán phải nộp thuế TNCN với thuế suất 0,1% trên giá bán chứng khoán từng lần (giá chuyển nhượng)."
		},
		{
			id: 6,
			question: "Khoản đóng góp nào sau đây của người lao động được trừ vào thu nhập chịu thuế khi tính thuế TNCN từ tiền lương, tiền công?",
			options: [
				"Bảo hiểm xã hội (BHXH), Bảo hiểm y tế (BHYT), Bảo hiểm thất nghiệp (BHTN) bắt buộc.",
				"Phí hội viên câu lạc bộ golf.",
				"Tiền điện thoại, văn phòng phẩm vượt mức khoán của công ty.",
				"Các khoản đóng góp từ thiện, nhân đạo không theo quy định của pháp luật."
			],
			correctAnswer: 0,
			explanation: "Các khoản đóng góp BHXH, BHYT, BHTN bắt buộc và một số quỹ bảo hiểm hưu trí tự nguyện có giới hạn được trừ vào thu nhập chịu thuế trước khi tính thuế TNCN."
		},
		{
			id: 7,
			question: "Thời điểm xác định thu nhập chịu thuế từ tiền lương, tiền công là khi nào?",
			options: [
				"Khi người lao động thực nhận lương.",
				"Khi công ty lập bảng lương.",
				"Khi công ty chi trả thu nhập cho người lao động.",
				"Khi người lao động ký hợp đồng lao động."
			],
			correctAnswer: 2,
			explanation: "Thời điểm xác định thu nhập chịu thuế từ tiền lương, tiền công là thời điểm tổ chức, cá nhân trả thu nhập cho người nộp thuế."
		},
		{
			id: 8,
			question: "Mức thuế suất cố định áp dụng cho thu nhập từ kinh doanh của cá nhân là bao nhiêu, nếu cá nhân đó đã thực hiện đầy đủ chế độ sổ sách kế toán?",
			options: [
				"5%.",
				"10%.",
				"15%",
				"Thuế suất lũy tiến từng phần (5% đến 35%)."
			],
			correctAnswer: 3,
			explanation: "Cá nhân kinh doanh nộp thuế theo phương pháp kê khai (có đầy đủ sổ sách kế toán) sẽ áp dụng Biểu thuế lũy tiến từng phần (giống như thu nhập từ tiền lương, tiền công)."
		},
		{
			id: 9,
			question: "Đối với cá nhân không cư trú, thuế TNCN từ tiền lương, tiền công được tính như thế nào?",
			options: [
				"Áp dụng Biểu thuế lũy tiến từng phần.",
				"Thuế suất cố định 20% trên tổng thu nhập chịu thuế phát sinh tại Việt Nam.",
				"Miễn thuế.",
				"Áp dụng Biểu thuế toàn phần 10%."
			],
			correctAnswer: 1,
			explanation: "Cá nhân không cư trú nộp thuế TNCN từ tiền lương, tiền công theo thuế suất 20% trên tổng thu nhập chịu thuế (không được giảm trừ gia cảnh)."
		},
		{
			id: 10,
			question: "Theo quy định, người nộp thuế được phép ủy quyền quyết toán thuế TNCN cho tổ chức trả thu nhập (công ty) trong trường hợp nào?",
			options: [
				"Chỉ khi cá nhân có thu nhập từ kinh doanh.",
				"Khi cá nhân chỉ có thu nhập từ tiền lương, tiền công và ký hợp đồng lao động từ 3 tháng trở lên tại một nơi.",
				"Luôn luôn được ủy quyền bất kể có bao nhiêu nguồn thu nhập.",
				"Khi cá nhân có thu nhập từ nhiều nơi và đã tự quyết toán một lần."
			],
			correctAnswer: 1,
			explanation: "Điều kiện cơ bản để được ủy quyền quyết toán thuế là cá nhân chỉ có thu nhập từ tiền lương, tiền công và ký hợp đồng lao động từ 3 tháng trở lên tại một đơn vị và thực tế đang làm việc tại đơn vị đó vào thời điểm ủy quyền quyết toán."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#pit-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế PIT</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Về Thuế Thu Nhập Cá Nhân (PIT)</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental thuế PIT concepts</p>
				</header>
	
				{/* This is the content of Thuế PIT Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 09, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};