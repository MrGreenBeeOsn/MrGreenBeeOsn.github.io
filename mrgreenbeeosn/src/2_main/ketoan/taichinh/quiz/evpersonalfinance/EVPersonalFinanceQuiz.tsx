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

export default function EVPersonalFinanceQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Tài chính cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is a \"fiat\" currency?",
			options: [
				"A currency backed by gold.",
				"A currency that has value because a government says it does.",
				"A digital-only currency like Bitcoin.",
				"A currency used only for international trade."
			],
			correctAnswer: 1,
			explanation: "Tiền pháp định (fiat money) không được bảo chứng bằng hàng hóa hữu hình (như vàng), mà có giá trị dựa trên niềm tin và sự ấn định của chính phủ."
		},
		{
			id: 2,
			question: "Which of the following is a \"liquid\" asset?",
			options: [
				"Real estate.",
				"A classic car collection.",
				"Cash in a savings account.",
				"A 10-year government bond."
			],
			correctAnswer: 2,
			explanation: "Tài sản thanh khoản (liquid asset) là tài sản có thể nhanh chóng chuyển đổi thành tiền mặt mà không bị mất nhiều giá trị. Tiền trong tài khoản tiết kiệm là ví dụ điển hình nhất."
		},
		{
			id: 3,
			question: "What does the \"50/30/20 rule\" for budgeting suggest?",
			options: [
				"50% wants, 30% needs, 20% savings.",
				"50% needs, 30% savings, 20% debt.",
				"50% needs, 30% wants, 20% savings/debt repayment.",
				"50% investment, 30% needs, 20% fun."
			],
			correctAnswer: 2,
			explanation: "Quy tắc 50/30/20 phân bổ thu nhập sau thuế: 50% cho nhu cầu thiết yếu (needs), 30% cho sở thích cá nhân (wants) và 20% cho tiết kiệm hoặc trả nợ."
		},
		{
			id: 4,
			question: "In finance, what is \"Compound Interest\"?",
			options: [
				"Interest calculated only on the principal amount.",
				"Interest calculated on the principal and the accumulated interest from previous periods.",
				"A fixed fee charged by banks every year.",
				"Interest that is paid out to the investor monthly."
			],
			correctAnswer: 1,
			explanation: "Lãi kép (compound interest) là tiền lãi được tính trên cả vốn gốc ban đầu và số lãi tích lũy của các kỳ trước đó (\"lãi mẹ đẻ lãi con\")."
		},
		{
			id: 5,
			question: "What is a \"Credit Score\"?",
			options: [
				"The amount of money you have in your bank account.",
				"A number representing your creditworthiness based on your credit history.",
				"The total amount of debt you owe to everyone.",
				"A discount code for credit card users."
			],
			correctAnswer: 1,
			explanation: "Điểm tín dụng là một con số phản ánh khả năng trả nợ của một cá nhân dựa trên lịch sử vay nợ và thanh toán trước đó."
		},
		{
			id: 6,
			question: "What is the primary purpose of an \"Emergency Fund\"?",
			options: [
				"To save for a luxury vacation.",
				"To buy stocks when the market crashes.",
				"To cover unexpected expenses like medical bills or job loss.",
				"To pay for a child's university education in the future."
			],
			correctAnswer: 2,
			explanation: "Quỹ dự phòng khẩn cấp dùng để chi trả cho các tình huống bất ngờ, không lường trước được nhằm tránh việc phải vay nợ khi gặp khó khăn tài chính."
		},
		{
			id: 7,
			question: "What does \"Diversification\" in investing mean?",
			options: [
				"Investing all your money in the best-performing stock.",
				"Keeping all your money in a savings account.",
				"Spreading investments across different asset classes to reduce risk.",
				"Changing your investment strategy every day."
			],
			correctAnswer: 2,
			explanation: "Đa dạng hóa danh mục đầu tư là việc phân bổ vốn vào nhiều loại tài sản khác nhau để giảm thiểu rủi ro nếu một loại tài sản nào đó bị giảm giá."
		},
		{
			id: 8,
			question: "What is \"Inflation\"?",
			options: [
				"A general increase in prices and a decrease in the purchasing power of money.",
				"A decrease in the cost of living.",
				"When the stock market grows very fast.",
				"When a government prints less money."
			],
			correctAnswer: 0,
			explanation: "Lạm phát là sự tăng mức giá chung của hàng hóa, dịch vụ theo thời gian, dẫn đến việc giảm sức mua của một đơn vị tiền tệ."
		},
		{
			id: 9,
			question: "Which of these is considered a \"Liability\"?",
			options: [
				"A stock portfolio.",
				"A rental property that generates income.",
				"A car loan.",
				"A high-interest savings account."
			],
			correctAnswer: 2,
			explanation: "Nợ phải trả (liability) là những khoản tiền bạn nợ người khác hoặc tổ chức khác. Khoản vay mua xe là một nghĩa vụ nợ."
		},
		{
			id: 10,
			question: "What is a \"Bull Market\"?",
			options: [
				"A period when stock prices are falling.",
				"A period when stock prices are rising or expected to rise.",
				"A market where only agricultural products are traded.",
				"A market that is closed for holidays."
			],
			correctAnswer: 1,
			explanation: "Thị trường \"Bò tót\" (Bull Market) là thuật ngữ chỉ trạng thái thị trường chứng khoán đang trên đà tăng trưởng mạnh mẽ hoặc kỳ vọng sẽ tăng trong tương lai."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tai-chinh#ev-personal-finance-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Personal Finance Basic Practice</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental tài chính concepts</p>
				</header>
	
				{/* This is the content of Finance Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 26, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};