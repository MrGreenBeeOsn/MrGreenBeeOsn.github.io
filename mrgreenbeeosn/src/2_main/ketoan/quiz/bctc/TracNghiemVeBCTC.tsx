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

export default function TracNghiemVeBCTC(): React.JSX.Element {
	// Danh sách câu hỏi về BCTC cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Báo cáo tài chính hợp nhất là gì?",
			options: [
				"Báo cáo thể hiện tình hình tài chính của một công ty mẹ duy nhất.",
				"Báo cáo tổng hợp tình hình tài chính của công ty mẹ và các công ty con như một thực thể kinh tế duy nhất.",
				"Báo cáo chỉ dành cho các công ty niêm yết trên sàn chứng khoán.",
				"Báo cáo chi tiết về dòng tiền của doanh nghiệp trong kỳ."
			],
			correctAnswer: 1,
			explanation: "Báo cáo hợp nhất cung cấp cái nhìn tổng thể về tài chính của cả tập đoàn (công ty mẹ và các công ty con) như một đơn vị kinh tế độc lập, được lập trên cơ sở tổng hợp Báo cáo tài chính riêng của từng đơn vị."
		},
		{
			id: 2,
			question: "Báo cáo nào sau đây cung cấp thông tin về tài sản, nợ phải trả và vốn chủ sở hữu của doanh nghiệp tại một thời điểm cụ thể?",
			options: [
				"Báo cáo kết quả hoạt động kinh doanh.",
				"Báo cáo lưu chuyển tiền tệ.",
				"Bảng cân đối kế toán.",
				"Thuyết minh báo cáo tài chính."
			],
			correctAnswer: 2,
			explanation: "Bảng cân đối kế toán (Balance Sheet) phản ánh tình hình tài chính (Tài sản, Nợ phải trả, Vốn chủ sở hữu) tại một thời điểm cụ thể, tuân theo Phương trình kế toán cơ bản: Tài sản = Nợ phải trả + Vốn chủ sở hữu."
		},
		{
			id: 3,
			question: "Khoản mục nào sau đây KHÔNG nằm trong Báo cáo kết quả hoạt động kinh doanh?",
			options: [
				"Doanh thu bán hàng và cung cấp dịch vụ.",
				"Chi phí quản lý doanh nghiệp.",
				"Phải thu khách hàng.",
				"Lợi nhuận sau thuế thu nhập doanh nghiệp."
			],
			correctAnswer: 2,
			explanation: "Phải thu khách hàng là một khoản mục Tài sản ngắn hạn, thể hiện số tiền khách hàng nợ doanh nghiệp, do đó nó được trình bày trên Bảng cân đối kế toán, không phải Báo cáo kết quả hoạt động kinh doanh (nơi ghi nhận doanh thu và chi phí)."
		},
		{
			id: 4,
			question: "Mục đích chính của việc lập Báo cáo lưu chuyển tiền tệ là gì?",
			options: [
				"Tính toán lợi nhuận ròng của doanh nghiệp trong kỳ.",
				"Đánh giá khả năng thanh toán ngắn hạn của doanh nghiệp.",
				"Phân tích khả năng tạo ra và sử dụng tiền của doanh nghiệp từ ba hoạt động: kinh doanh, đầu tư và tài chính.",
				"Xác định giá trị vốn chủ sở hữu của doanh nghiệp."
			],
			correctAnswer: 2,
			explanation: "Báo cáo lưu chuyển tiền tệ (Cash Flow Statement) là công cụ duy nhất cung cấp thông tin về luồng tiền mặt thực tế theo 3 hoạt động chính: Kinh doanh, Đầu tư và Tài chính, giúp đánh giá khả năng tạo ra tiền của doanh nghiệp."
		},
		{
			id: 5,
			question: "Công thức cơ bản nào mô tả mối quan hệ giữa các thành phần trên Bảng cân đối kế toán?",
			options: [
				"Doanh thu = Chi phí + Lợi nhuận.",
				"Tài sản = Nợ phải trả + Vốn chủ sở hữu.",
				"Tài sản ngắn hạn = Tài sản dài hạn + Nợ phải trả.",
				"Tổng cộng nguồn vốn = Tổng cộng tài sản - Nợ phải trả."
			],
			correctAnswer: 1,
			explanation: "Đây là Phương trình kế toán cơ bản và là nguyên tắc cốt lõi của Bảng cân đối kế toán, đảm bảo Tổng Tài sản luôn cân bằng với tổng nguồn hình thành nên Tài sản đó (Nợ phải trả và Vốn chủ sở hữu)."
		},
		{
			id: 6,
			question: "Lợi nhuận gộp được tính bằng công thức nào?",
			options: [
				"Lợi nhuận trước thuế - Chi phí thuế thu nhập doanh nghiệp.",
				"Lợi nhuận thuần từ hoạt động kinh doanh - Chi phí tài chính.",
				"Doanh thu thuần - Chi phí bán hàng và Chi phí quản lý doanh nghiệp.",
				"Doanh thu thuần về bán hàng và cung cấp dịch vụ - Giá vốn hàng bán."
			],
			correctAnswer: 3,
			explanation: "Lợi nhuận gộp (Gross Profit) là lợi nhuận còn lại sau khi lấy Doanh thu thuần trừ đi Giá vốn hàng bán (chi phí trực tiếp tạo ra sản phẩm/dịch vụ), phản ánh hiệu quả của hoạt động sản xuất kinh doanh cốt lõi."
		},
		{
			id: 7,
			question: "Theo chuẩn mực kế toán, một doanh nghiệp thường phải lập Báo cáo tài chính vào thời điểm nào?",
			options: [
				"Chỉ khi có yêu cầu từ cơ quan thuế.",
				"Hàng ngày hoặc hàng tuần.",
				"Cuối mỗi kỳ kế toán (Thường là hàng quý và hàng năm).",
				"Chỉ khi doanh nghiệp gặp khó khăn tài chính."
			],
			correctAnswer: 2,
			explanation: "Báo cáo tài chính được lập theo Chu kỳ kế toán và bắt buộc phải được lập vào cuối kỳ kế toán (thường là hàng quý và hàng năm) theo quy định pháp luật để cung cấp thông tin định kỳ cho người sử dụng."
		},
		{
			id: 8,
			question: "Trong Báo cáo lưu chuyển tiền tệ, tiền thu được từ việc bán tài sản cố định thuộc hoạt động nào?",
			options: [
				"Hoạt động kinh doanh.",
				"Hoạt động tài chính.",
				"Hoạt động đầu tư.",
				"Hoạt động quản lý."
			],
			correctAnswer: 2,
			explanation: "Tiền thu được từ việc mua sắm, thanh lý hoặc nhượng bán tài sản dài hạn (ví dụ: tài sản cố định, bất động sản đầu tư) được phân loại vào Hoạt động đầu tư trên Báo cáo lưu chuyển tiền tệ."
		},
		{
			id: 9,
			question: "Thuyết minh Báo cáo tài chính có vai trò gì?",
			options: [
				"Thay thế cho Báo cáo kết quả hoạt động kinh doanh.",
				"Cung cấp thông tin tài chính cô đọng, tóm tắt.",
				"Giải thích chi tiết hơn về các chỉ tiêu đã trình bày trong Bảng cân đối kế toán, Báo cáo kết quả hoạt động kinh doanh và Báo cáo lưu chuyển tiền tệ.",
				"Đưa ra các dự báo về doanh thu trong tương lai."
			],
			correctAnswer: 2,
			explanation: "Thuyết minh Báo cáo tài chính là phần không thể thiếu, có vai trò giải thích các chính sách kế toán đã áp dụng và phân tích chi tiết các khoản mục quan trọng được trình bày tổng hợp trong ba báo cáo chính còn lại."
		},
		{
			id: 10,
			question: "Tỷ số tài chính nào sau đây được sử dụng để đo lường khả năng doanh nghiệp thanh toán các khoản nợ ngắn hạn?",
			options: [
				"Tỷ suất lợi nhuận trên doanh thu (ROS).",
				"Tỷ suất nợ trên vốn chủ sở hữu (D/E).",
				"Tỷ suất sinh lời cơ bản (EPS).",
				"Tỷ số thanh toán hiện hành (Current Ratio)."
			],
			correctAnswer: 3,
			explanation: "Tỷ số thanh toán hiện hành (Current Ratio = Tài sản ngắn hạn / Nợ ngắn hạn) là chỉ tiêu cơ bản nhất để đánh giá khả năng thanh toán ngắn hạn của doanh nghiệp (khả năng dùng tài sản lưu động để chi trả nợ trong vòng một năm)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#bctc-basic-practice"><mark className="highlight-tertiary-padding-4-8">BCTC</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm về Báo Cáo Tài Chính</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental BCTC concepts</p>
				</header>
	
				{/* This is the content of BCTC Quiz. */}
	
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