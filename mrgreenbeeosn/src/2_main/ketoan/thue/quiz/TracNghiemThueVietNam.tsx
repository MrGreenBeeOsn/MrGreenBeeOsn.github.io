// AccountingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import VnPracticeQuiz from '../../../../components/quiz/VnPracticeQuiz';

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

export default function TracNghiemThueVietNam(): React.JSX.Element {
	// Danh sách câu hỏi về Thuế cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Trong hệ thống thuế Việt Nam, loại thuế nào đánh vào giá trị tăng thêm của hàng hóa, dịch vụ phát sinh trong quá trình sản xuất, lưu thông đến tiêu dùng?",
			options: [
				"Thuế Thu nhập cá nhân (TNCN)",
				"Thuế Tiêu thụ đặc biệt (TTĐB)",
				"Thuế Giá trị gia tăng (GTGT)",
				"Thuế Thu nhập doanh nghiệp (TNDN)"
			],
			correctAnswer: 2,
			explanation: "Thuế GTGT là thuế gián thu, đánh vào phần giá trị tăng thêm của hàng hóa, dịch vụ."
		},
		{
			id: 2,
			question: "Thuế suất phổ thông (chuẩn) của Thuế Giá trị gia tăng (GTGT) tại Việt Nam hiện nay là bao nhiêu?",
			options: [
				"5%",
				"10%",
				"15%",
				"20%"
			],
			correctAnswer: 1,
			explanation: "Mức thuế suất 10% là mức thuế suất phổ thông, áp dụng cho phần lớn hàng hóa, dịch vụ."
		},
		{
			id: 3,
			question: "Theo Luật Thuế Thu nhập doanh nghiệp (TNDN), mức thuế suất TNDN phổ thông hiện hành tại Việt Nam là bao nhiêu?",
			options: [
				"15%",
				"20%",
				"22%",
				"25%"
			],
			correctAnswer: 1,
			explanation: "Mức thuế suất 20% là mức thuế suất phổ thông áp dụng cho các doanh nghiệp."
		},
		{
			id: 4,
			question: "Trong Thuế Thu nhập cá nhân (TNCN) đối với tiền lương, tiền công, cá nhân được áp dụng phương pháp tính thuế nào?",
			options: [
				"Tính thuế theo tỷ lệ cố định 10% trên toàn bộ thu nhập.",
				"Tính thuế theo biểu thuế lũy tiến từng phần.",
				"Tính thuế theo tỷ lệ cố định 20% trên thu nhập đã giảm trừ.",
				"Chỉ tính thuế khi thu nhập vượt quá 100 triệu đồng/năm."
			],
			correctAnswer: 1,
			explanation: "Thu nhập từ tiền lương, tiền công được tính theo Biểu thuế lũy tiến từng phần (từ 5% đến 35%)."
		},
		{
			id: 5,
			question: "Theo quy định hiện hành về Thuế Thu nhập cá nhân (TNCN), mức giảm trừ gia cảnh cho bản thân người nộp thuế là bao nhiêu một tháng?",
			options: [
				"9 triệu đồng",
				"11 triệu đồng",
				"4,4 triệu đồng",
				"15 triệu đồng"
			],
			correctAnswer: 1,
			explanation: "Mức giảm trừ cho bản thân người nộp thuế là 11 triệu đồng/tháng (theo Nghị quyết 954/2020/UBTVQH14)."
		},
		{
			id: 6,
			question: "Loại thuế nào sau đây được coi là thuế gián thu?",
			options: [
				"Thuế Thu nhập cá nhân (TNCN)",
				"Thuế Thu nhập doanh nghiệp (TNDN)",
				"Thuế Giá trị gia tăng (GTGT)",
				"Thuế sử dụng đất phi nông nghiệp"
			],
			correctAnswer: 2,
			explanation: "Thuế GTGT là thuế gián thu, được cộng vào giá bán và người tiêu dùng cuối cùng là người chịu thuế."
		},
		{
			id: 7,
			question: "Thuế suất 0% của Thuế GTGT áp dụng cho trường hợp nào sau đây?",
			options: [
				"Hàng hóa, dịch vụ thiết yếu phục vụ đời sống.",
				"Hàng hóa, dịch vụ xuất khẩu.",
				"Dịch vụ y tế, giáo dục.",
				"Hàng hóa, dịch vụ của doanh nghiệp siêu nhỏ."
			],
			correctAnswer: 1,
			explanation: "Thuế suất 0% áp dụng cho hàng hóa, dịch vụ xuất khẩu để khuyến khích xuất khẩu."
		},
		{
			id: 8,
			question: "Doanh nghiệp phải nộp thuế Thu nhập doanh nghiệp (TNDN) tạm tính theo quý và nộp thuế tạm tính chậm nhất trong thời hạn nào?",
			options: [
				"Ngày 20 của tháng đầu tiên quý sau.",
				"Ngày cuối cùng của quý.",
				"Ngày 30 của tháng đầu tiên quý sau.",
				"Ngày 31 tháng 3 năm sau (cùng với quyết toán năm)."
			],
			correctAnswer: 2,
			explanation: "Thời hạn nộp thuế TNDN tạm tính quý là chậm nhất ngày 30 của tháng đầu quý sau."
		},
		{
			id: 9,
			question: "Thu nhập từ chuyển nhượng bất động sản của cá nhân được tính thuế Thu nhập cá nhân (TNCN) theo mức thuế suất nào trên giá trị chuyển nhượng?",
			options: [
				"5%",
				"2%",
				"10%",
				"Không phải chịu thuế."
			],
			correctAnswer: 1,
			explanation: "Thu nhập từ chuyển nhượng bất động sản được tính thuế TNCN theo thuế suất 2% trên giá chuyển nhượng."
		},
		{
			id: 10,
			question: "Hàng hóa, dịch vụ nào sau đây thuộc đối tượng không chịu Thuế Giá trị gia tăng (GTGT)?",
			options: [
				"Dịch vụ ăn uống, nhà hàng.",
				"Xuất bản, nhập khẩu, phát hành báo, tạp chí, bản tin chuyên ngành, sách chính trị, sách giáo khoa, giáo trình.",
				"Dịch vụ vận tải hàng hóa trong nước.",
				"Kinh doanh vàng, bạc, đá quý."
			],
			correctAnswer: 1,
			explanation: "Các hoạt động liên quan đến báo chí, xuất bản sách giáo khoa, sách chính trị thuộc đối tượng không chịu thuế GTGT."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/thue#vat-basic-practice"><mark className="highlight-tertiary-padding-4-8">Thuế VAT</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Thuế Việt Nam</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental thuế VAT concepts</p>
				</header>
	
				{/* This is the content of Thuế VAT Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 07, 2025 · by 💎GEM ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};