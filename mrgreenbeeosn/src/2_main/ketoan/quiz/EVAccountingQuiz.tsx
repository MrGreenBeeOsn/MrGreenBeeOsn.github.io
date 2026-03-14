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

export default function EVAccountingQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which financial statement reports the financial position of a business at a specific point in time?",
			options: [
				"Income Statement",
				"Statement of Cash Flows",
				"Balance Sheet",
				"Statement of Retained Earnings"
			],
			correctAnswer: 2,
			explanation: "Bảng cân đối kế toán (Balance Sheet) báo cáo tình hình tài chính (tài sản, nợ phải trả và vốn chủ sở hữu) tại một thời điểm nhất định, trong khi các báo cáo khác phản ánh hoạt động trong một khoảng thời gian."
		},
		{
			id: 2,
			question: "According to the accounting equation, Assets are equal to:",
			options: [
				"Liabilities - Equity",
				"Liabilities + Equity",
				"Equity - Liabilities",
				"Revenue - Expenses"
			],
			correctAnswer: 1,
			explanation: "Phương trình kế toán cơ bản là: Tài sản (Assets) = Nợ phải trả (Liabilities) + Vốn chủ sở hữu (Equity)."
		},
		{
			id: 3,
			question: "Which of the following is an example of an Intangible Asset?",
			options: [
				"Inventory",
				"Machinery",
				"Accounts Receivable",
				"Patent"
			],
			correctAnswer: 3,
			explanation: "Tài sản vô hình (Intangible Assets) là tài sản không có hình thái vật chất. Bằng sáng chế (Patent) là tài sản vô hình, trong khi hàng tồn kho hay máy móc là tài sản hữu hình."
		},
		{
			id: 4,
			question: "Under the accrual basis of accounting, revenue is recognized when:",
			options: [
				"Cash is received from the customer.",
				"It is earned, regardless of when cash is received.",
				"The invoice is sent to the customer.",
				"The fiscal year ends."
			],
			correctAnswer: 1,
			explanation: "Theo nguyên tắc kế toán dồn tích (Accrual basis), doanh thu được ghi nhận khi thực tế phát sinh (đã cung cấp hàng hóa/dịch vụ), không phụ thuộc vào việc đã thu được tiền hay chưa."
		},
		{
			id: 5,
			question: "What is the normal balance of an Expense account?",
			options: [
				"Debit",
				"Credit",
				"Zero",
				"Varies depending on the transaction"
			],
			correctAnswer: 0,
			explanation: "Các tài khoản chi phí (Expense) và tài sản (Asset) thường có số dư bên Nợ (Debit). Khi chi phí tăng lên, chúng ta ghi Nợ."
		},
		{
			id: 6,
			question: "Which of the following accounts is decreased by a Debit entry?",
			options: [
				"Cash",
				"Accounts Payable",
				"Rent Expense",
				"Equipment"
			],
			correctAnswer: 1,
			explanation: "Nợ phải trả (Liabilities) tăng bên Có (Credit) và giảm bên Nợ (Debit). Do đó, khoản phải trả người bán (Accounts Payable) sẽ giảm khi ghi Nợ."
		},
		{
			id: 7,
			question: "The process of transferring information from a journal to the ledger is called:",
			options: [
				"Journalizing",
				"Summarizing",
				"Posting",
				"Adjusting"
			],
			correctAnswer: 2,
			explanation: "Quá trình chuyển các nghiệp vụ đã ghi trong nhật ký (journal) sang sổ cái (ledger) được gọi là \"đưa vào sổ cái\" (Posting)."
		},
		{
			id: 8,
			question: "\"Inventory\" is classified as what type of account on the Balance Sheet?",
			options: [
				"Current Liability",
				"Long-term Asset",
				"Current Asset",
				"Revenue"
			],
			correctAnswer: 2,
			explanation: "Hàng tồn kho (Inventory) được coi là Tài sản ngắn hạn (Current Asset) vì nó dự kiến sẽ được bán hoặc sử dụng trong vòng một chu kỳ kinh doanh bình thường (thường là 1 năm)."
		},
		{
			id: 9,
			question: "What is the primary purpose of a Trial Balance?",
			options: [
				"To calculate net income.",
				"To ensure that total debits equal total credits.",
				"To provide a detailed list of all customers.",
				"To replace the Balance Sheet."
			],
			correctAnswer: 1,
			explanation: "Mục đích chính của Bảng cân đối thử (Trial Balance) là kiểm tra tính chính xác về mặt số học, đảm bảo tổng số dư bên Nợ bằng tổng số dư bên Có."
		},
		{
			id: 10,
			question: "Which principle requires that expenses be recorded in the same period as the revenues they helped to generate?",
			options: [
				"Going Concern Principle",
				"Matching Principle",
				"Cost Principle",
				"Conservatism Principle"
			],
			correctAnswer: 1,
			explanation: "Nguyên tắc phù hợp (Matching Principle) yêu cầu việc ghi nhận chi phí phải tương ứng với doanh thu mà nó tạo ra trong cùng một kỳ kế toán."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/ke-toan#ke-toan-basic-practice"><mark className="highlight-tertiary-padding-4-8">Kế toán</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Questions on Accounting</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental kế toán concepts</p>
				</header>
	
				{/* This is the content of Kế toán Quiz. */}
	
				<VnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 14, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};