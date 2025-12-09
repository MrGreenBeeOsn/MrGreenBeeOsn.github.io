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

export default function TracNghiemVeThueVAT(): React.JSX.Element {
	// Danh sách câu hỏi về VAT cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Thuế Giá trị gia tăng (VAT) ở Việt Nam hiện nay được áp dụng theo phương pháp nào?",
			options: [
				"Phương pháp khấu trừ thuế và phương pháp thuế trực tiếp",
				"Phương pháp khấu trừ thuế",
				"Phương pháp tính theo tỷ lệ phần trăm",
				"Phương pháp tính theo doanh thu"
			],
			correctAnswer: 0,
			explanation: "Luật Thuế GTGT hiện hành tại Việt Nam quy định có hai phương pháp tính thuế GTGT là: Phương pháp khấu trừ thuế (áp dụng phổ biến). Phương pháp tính trực tiếp trên GTGT (áp dụng cho các đối tượng đặc thù)."
		},
		{
			id: 2,
			question: "Mức thuế suất Thuế GTGT phổ thông nhất hiện nay (áp dụng cho hầu hết hàng hóa, dịch vụ) ở Việt Nam là bao nhiêu?",
			options: [
				"5%",
				"8%",
				"10%",
				"15%"
			],
			correctAnswer: 2,
			explanation: "Mức thuế suất 10% là mức phổ thông, áp dụng cho các loại hàng hóa, dịch vụ không thuộc đối tượng chịu thuế suất 0%, 5% hoặc không chịu thuế GTGT."
		},
		{
			id: 3,
			question: "Đối tượng nào sau đây không chịu Thuế GTGT?",
			options: [
				"Sản phẩm là nông nghiệp, lâm nghiệp, nuôi trồng, khai thác, thủy hải sản chưa chế biến thành các sản phẩm khác hoặc chỉ qua sơ chế thông thường.",
				"Hàng hóa, dịch vụ sử dụng cho sản xuất, kinh doanh và tiêu dùng ở Việt Nam.",
				"Dịch vụ vận tải công cộng bằng xe buýt.",
				"Dịch vụ lưu trú (khách sạn)."
			],
			correctAnswer: 0,
			explanation: "Các sản phẩm nông nghiệp, lâm nghiệp, nuôi trồng, khai thác thủy sản chưa chế biến hoặc chỉ sơ chế thông thường thuộc nhóm đối tượng không chịu thuế GTGT theo quy định."
		},
		{
			id: 4,
			question: "Thuế suất % áp dụng cho loại hàng hóa, dịch vụ nào?",
			options: [
				"Hàng hóa, dịch vụ thiết yếu phục vụ đời sống.",
				"Hàng hóa, dịch vụ xuất khẩu.",
				"Hàng hóa, dịch vụ đặc thù (như y tế, giáo dục).",
				"Các loại hàng hóa, dịch vụ có giá trị thấp."
			],
			correctAnswer: 1,
			explanation: "Thuế suất % áp dụng cho hàng hóa, dịch vụ xuất khẩu, vận tải quốc tế. Mục đích là để khuyến khích xuất khẩu."
		},
		{
			id: 5,
			question: "Trong phương pháp khấu trừ, Thuế GTGT phải nộp được tính bằng công thức nào?",
			options: [
				"Thuế GTGT đầu ra + Thuế GTGT đầu vào",
				"Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ",
				"Doanh thu x Thuế suất",
				"Giá bán - Giá mua"
			],
			correctAnswer: 1,
			explanation: "Đây là công thức cơ bản của phương pháp khấu trừ thuế: Thuế GTGT phải nộp = Thuế GTGT đầu ra - Thuế GTGT đầu vào được khấu trừ."
		},
		{
			id: 6,
			question: "\"Thuế GTGT đầu ra\" là gì?",
			options: [
				"Thuế GTGT của hàng hóa, dịch vụ doanh nghiệp mua vào để phục vụ sản xuất, kinh doanh.",
				"Thuế GTGT tính trên giá bán hàng hóa, dịch vụ mà doanh nghiệp bán ra.",
				"Thuế GTGT được Nhà nước hoàn lại cho doanh nghiệp.",
				"Thuế GTGT chưa được khấu trừ."
			],
			correctAnswer: 1,
			explanation: "Thuế GTGT đầu ra là số thuế GTGT mà cơ sở kinh doanh thu của khách hàng khi bán hàng hóa, cung ứng dịch vụ."
		},
		{
			id: 7,
			question: "Doanh nghiệp áp dụng phương pháp khấu trừ thuế sẽ được hoàn thuế GTGT trong trường hợp nào?",
			options: [
				"Có số thuế GTGT đầu vào lớn hơn đầu ra trong nhiều kỳ liên tục.",
				"Doanh thu của doanh nghiệp tăng mạnh trong kỳ.",
				"Doanh nghiệp mua tài sản cố định có giá trị lớn.",
				"Tất cả các trường hợp trên."
			],
			correctAnswer: 0,
			explanation: "Việc hoàn thuế xảy ra khi số thuế GTGT đầu vào chưa được khấu trừ hết (lớn hơn số thuế GTGT đầu ra) và đáp ứng các điều kiện về số dư âm theo quy định."
		},
		{
			id: 8,
			question: "Doanh nghiệp mới thành lập (trừ một số trường hợp đặc biệt) thường áp dụng phương pháp tính thuế GTGT nào trong năm đầu tiên hoạt động?",
			options: [
				"Phương pháp tính trực tiếp trên GTGT",
				"Phương pháp khấu trừ thuế",
				"Tùy chọn, không bắt buộc",
				"Phương pháp tính thuế cố định"
			],
			correctAnswer: 1,
			explanation: "Theo quy định hiện hành, doanh nghiệp mới thành lập (trừ hộ/cá nhân kinh doanh hoặc thuộc diện bắt buộc áp dụng trực tiếp) sẽ tự nguyện đăng ký áp dụng phương pháp khấu trừ thuế trong năm đầu tiên."
		},
		{
			id: 9,
			question: "Trong công thức tính thuế GTGT theo phương pháp trực tiếp, \"Tỷ lệ % để tính thuế GTGT\" được áp dụng trên cơ sở nào?",
			options: [
				"Giá bán đã có thuế GTGT",
				"Giá vốn hàng bán",
				"Giá trị gia tăng thực tế",
				"Doanh thu"
			],
			correctAnswer: 3,
			explanation: "Phương pháp trực tiếp tính thuế GTGT bằng công thức: Số thuế GTGT phải nộp = Doanh thu x Tỷ lệ % tính thuế GTGT. Phương pháp này sử dụng doanh thu làm căn cứ."
		},
		{
			id: 10,
			question: "Căn cứ để tính Thuế GTGT theo phương pháp khấu trừ là gì?",
			options: [
				"Hợp đồng kinh tế và Biên bản giao nhận hàng hóa.",
				"Hóa đơn GTGT hợp pháp của hàng hóa, dịch vụ mua vào và bán ra.",
				"Phiếu thu, phiếu chi và sổ quỹ tiền mặt.",
				"Báo cáo tài chính cuối năm."
			],
			correctAnswer: 1,
			explanation: "Hóa đơn GTGT là chứng từ bắt buộc và quan trọng nhất để xác định số thuế GTGT đầu vào được khấu trừ và số thuế GTGT đầu ra phát sinh theo phương pháp khấu trừ."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#vat-basic-practice"><mark className="highlight-tertiary-padding-4-8">Kiểm toán</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Về Thuế VAT</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental VAT concepts</p>
				</header>
	
				{/* This is the content of VAT Quiz. */}
	
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