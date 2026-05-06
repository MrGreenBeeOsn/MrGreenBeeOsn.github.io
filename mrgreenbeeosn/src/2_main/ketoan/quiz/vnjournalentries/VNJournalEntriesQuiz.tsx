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

export default function VNJournalEntriesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Doanh nghiệp mua văn phòng phẩm về sử dụng ngay tại bộ phận quản lý doanh nghiệp, trị giá 5.000.000 VNĐ (chưa bao gồm 10% thuế GTGT), thanh toán bằng tiền mặt.",
			options: [
				"Nợ TK 642: 5.000.000 / Nợ TK 133: 500.000 / Có TK 111: 5.500.000",
				"Nợ TK 153: 5.000.000 / Nợ TK 133: 500.000 / Có TK 111: 5.500.000",
				"Nợ TK 642: 5.500.000 / Có TK 111: 5.500.000",
				"Nợ TK 242: 5.000.000 / Nợ TK 133: 500.000 / Có TK 111: 5.500.000"
			],
			correctAnswer: 0,
			explanation: "Vì vật phẩm sử dụng ngay nên được ghi nhận trực tiếp vào chi phí quản lý (TK 642). Giá trị tính thuế GTGT là 5.000.000 * 10% = 500.000. Tổng thanh toán là 5.500.000."
		},
		{
			id: 2,
			question: "Doanh nghiệp bán lô hàng cho khách hàng A, trị giá xuất kho 100.000.000 VNĐ, giá bán chưa thuế 150.000.000 VNĐ, thuế GTGT 10%, khách hàng chưa thanh toán.",
			options: [
				"Nợ TK 632: 150.000.000 / Có TK 156: 150.000.000",
				"Nợ TK 632: 100.000.000 / Có TK 156: 100.000.000",
				"Nợ TK 131: 165.000.000 / Có TK 632: 100.000.000",
				"Nợ TK 632: 165.000.000 / Có TK 156: 165.000.000"
			],
			correctAnswer: 1,
			explanation: "Giá vốn hàng bán phải được ghi nhận theo giá xuất kho (giá gốc), không phải giá bán. Do đó, ghi nhận Nợ TK 632 Có TK 156 với giá 100.000.000."
		},
		{
			id: 3,
			question: "Khách hàng thanh toán khoản nợ 50.000.000 VNĐ cho doanh nghiệp bằng tiền gửi ngân hàng.",
			options: [
				"Nợ TK 131: 50.000.000 / Có TK 112: 50.000.000",
				"Nợ TK 112: 50.000.000 / Có TK 131: 50.000.000",
				"Nợ TK 112: 50.000.000 / Có TK 511: 50.000.000",
				"Nợ TK 111: 50.000.000 / Có TK 131: 50.000.000"
			],
			correctAnswer: 1,
			explanation: "Khi thu được tiền từ khách hàng, tài sản là tiền gửi ngân hàng (TK 112) tăng lên (ghi Nợ), đồng thời khoản phải thu khách hàng (TK 131) giảm đi (ghi Có)."
		},
		{
			id: 4,
			question: "Chủ sở hữu góp vốn kinh doanh bằng tiền mặt 200.000.000 VNĐ.",
			options: [
				"Nợ TK 411: 200.000.000 / Có TK 111: 200.000.000",
				"Nợ TK 111: 200.000.000 / Có TK 411: 200.000.000",
				"Nợ TK 111: 200.000.000 / Có TK 421: 200.000.000",
				"Nợ TK 112: 200.000.000 / Có TK 411: 200.000.000"
			],
			correctAnswer: 1,
			explanation: "Khi góp vốn, tiền mặt (tài sản) tăng (Nợ TK 111) và nguồn vốn chủ sở hữu (TK 411) tăng (ghi Có)."
		},
		{
			id: 5,
			question: "Doanh nghiệp mua một máy móc thiết bị dùng cho sản xuất, giá mua chưa thuế 300.000.000 VNĐ, thuế GTGT 10%, chưa thanh toán cho người bán.",
			options: [
				"Nợ TK 211: 300.000.000 / Nợ TK 133: 30.000.000 / Có TK 331: 330.000.000",
				"Nợ TK 211: 330.000.000 / Có TK 331: 330.000.000",
				"Nợ TK 241: 300.000.000 / Nợ TK 133: 30.000.000 / Có TK 331: 330.000.000",
				"Nợ TK 211: 300.000.000 / Có TK 331: 300.000.000"
			],
			correctAnswer: 0,
			explanation: "Mua tài sản cố định hữu hình dùng ngay cho sản xuất ghi vào TK 211. Thuế GTGT được khấu trừ ghi vào TK 133. Tổng nợ phải trả cho người bán là giá sau thuế (330.000.000)."
		},
		{
			id: 6,
			question: "Trả tiền thuê nhà xưởng cho 6 tháng tới bằng tiền gửi ngân hàng là 60.000.000 VNĐ (chưa gồm 10% thuế GTGT).",
			options: [
				"Nợ TK 642: 60.000.000 / Nợ TK 133: 6.000.000 / Có TK 112: 66.000.000",
				"Nợ TK 242: 60.000.000 / Nợ TK 133: 6.000.000 / Có TK 112: 66.000.000",
				"Nợ TK 627: 60.000.000 / Nợ TK 133: 6.000.000 / Có TK 112: 66.000.000",
				"Nợ TK 142: 60.000.000 / Nợ TK 133: 6.000.000 / Có TK 112: 66.000.000"
			],
			correctAnswer: 1,
			explanation: "Chi phí trả trước cho nhiều kỳ (6 tháng) phải được ghi vào TK 242 (Chi phí trả trước), sau đó mới phân bổ dần vào chi phí sản xuất kinh doanh hàng tháng."
		},
		{
			id: 7,
			question: "Doanh nghiệp xuất kho nguyên vật liệu dùng cho sản xuất sản phẩm chính, giá trị 20.000.000 VNĐ.",
			options: [
				"Nợ TK 621: 20.000.000 / Có TK 152: 20.000.000",
				"Nợ TK 152: 20.000.000 / Có TK 621: 20.000.000",
				"Nợ TK 627: 20.000.000 / Có TK 152: 20.000.000",
				"Nợ TK 154: 20.000.000 / Có TK 152: 20.000.000"
			],
			correctAnswer: 0,
			explanation: "Xuất nguyên vật liệu cho sản xuất trực tiếp sản phẩm ghi Nợ TK 621 (Chi phí nguyên vật liệu trực tiếp)."
		},
		{
			id: 8,
			question: "Trích khấu hao tài sản cố định dùng cho bộ phận bán hàng, số tiền 10.000.000 VNĐ.",
			options: [
				"Nợ TK 627: 10.000.000 / Có TK 214: 10.000.000",
				"Nợ TK 642: 10.000.000 / Có TK 214: 10.000.000",
				"Nợ TK 641: 10.000.000 / Có TK 214: 10.000.000",
				"Nợ TK 214: 10.000.000 / Có TK 211: 10.000.000"
			],
			correctAnswer: 2,
			explanation: "Khấu hao TSCĐ phục vụ bộ phận bán hàng được tính vào chi phí bán hàng (TK 641). Khấu hao lũy kế ghi tăng bên Có TK 214."
		},
		{
			id: 9,
			question: "Doanh nghiệp vay ngắn hạn ngân hàng để trả nợ người bán 100.000.000 VNĐ.",
			options: [
				"Nợ TK 331: 100.000.000 / Có TK 341: 100.000.000",
				"Nợ TK 341: 100.000.000 / Có TK 331: 100.000.000",
				"Nợ TK 112: 100.000.000 / Có TK 341: 100.000.000",
				"Nợ TK 331: 100.000.000 / Có TK 112: 100.000.000"
			],
			correctAnswer: 0,
			explanation: "Việc vay tiền để trả nợ giúp làm giảm nợ phải trả người bán (Nợ TK 331) và làm tăng khoản vay nợ thuê tài chính (Có TK 341)."
		},
		{
			id: 10,
			question: "Nhận được giấy báo Có của ngân hàng về khoản tiền lãi tiền gửi 2.000.000 VNĐ.",
			options: [
				"Nợ TK 112: 2.000.000 / Có TK 635: 2.000.000",
				"Nợ TK 112: 2.000.000 / Có TK 515: 2.000.000",
				"Nợ TK 515: 2.000.000 / Có TK 112: 2.000.000",
				"Nợ TK 112: 2.000.000 / Có TK 711: 2.000.000"
			],
			correctAnswer: 1,
			explanation: "Doanh thu hoạt động tài chính (lãi tiền gửi) được ghi nhận vào bên Có TK 515. Tiền gửi ngân hàng tăng lên ghi Nợ TK 112."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#ev-journal-entries-quiz"><mark className="highlight-tertiary-padding-4-8">Kế toán</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Trắc Nghiệm Định Khoản Kế Toán</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental kế toán concepts</p>
				</header>
	
				{/* This is the content of Kế toán Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>April 26, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};