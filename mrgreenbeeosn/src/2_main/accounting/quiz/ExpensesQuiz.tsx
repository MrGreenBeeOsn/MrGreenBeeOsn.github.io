// EnPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnPracticeQuiz from '../../../components/quiz/EnPracticeQuiz';

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

export default function ExpensesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which principle dictates that expenses should be recognized in the same period as the revenues they helped generate?",
			options: [
				"Revenue Recognition Principle",
				"Matching Principle",
				"Cost Principle",
				"Conservatism Principle"
			],
			correctAnswer: 1,
			explanation: "The Matching Principle ensures that efforts (expenses) are matched with accomplishments (revenues) to accurately reflect profitability for a specific period."
		},
		{
			id: 2,
			question: "Which of the following is considered an \"Accrued Expense\"?",
			options: [
				"Cash paid for rent three months in advance.",
				"An invoice received and paid immediately for office supplies.",
				"Salaries earned by employees but not yet paid at the end of the month.",
				"The purchase of a new delivery truck."
			],
			correctAnswer: 2,
			explanation: "Accrued expenses are costs that have been incurred but not yet paid or recorded under the accrual basis of accounting."
		},
		{
			id: 3,
			question: "When a company pays for a 12-month insurance policy in advance, the initial payment is recorded as:",
			options: [
				"An expense",
				"A liability",
				"An asset",
				"Equity"
			],
			correctAnswer: 2,
			explanation: "Prepaid insurance is a \"Prepaid Expense,\" which is classified as a current asset because it provides a future economic benefit."
		},
		{
			id: 4,
			question: "Depreciation is the process of allocating the cost of a tangible asset over its useful life. This is an example of:",
			options: [
				"Cash basis accounting",
				"Asset valuation",
				"Expense recognition",
				"Revenue realization"
			],
			correctAnswer: 2,
			explanation: "Depreciation is a non-cash expense that systematically allocates the cost of a long-term asset to the periods in which it is used."
		},
		{
			id: 5,
			question: "Which of the following would NOT be classified as an Operating Expense (OPEX)?",
			options: [
				"Rent expense",
				"Interest expense",
				"Utilities expense",
				"Sales commissions"
			],
			correctAnswer: 1,
			explanation: "Interest expense is typically classified as a \"Non-operating Expense\" or \"Other Expense\" because it relates to financing activities rather than core business operations."
		},
		{
			id: 6,
			question: "Under the Accrual Basis of accounting, an expense is recorded when:",
			options: [
				"Cash is paid out.",
				"The bill is received in the mail.",
				"The obligation is incurred or the resource is consumed.",
				"The end of the fiscal year is reached."
			],
			correctAnswer: 2,
			explanation: "Accrual accounting recognizes expenses when they occur, regardless of when the cash transaction takes place."
		},
		{
			id: 7,
			question: "Cost of Goods Sold (COGS) is specifically associated with:",
			options: [
				"Administrative salaries.",
				"Marketing and advertising campaigns.",
				"Direct costs of producing or purchasing products sold by a company.",
				"Interest paid on business loans."
			],
			correctAnswer: 2,
			explanation: "COGS includes the direct costs attributable to the production of the goods sold by a company, such as raw materials and direct labor."
		},
		{
			id: 8,
			question: "If an entity uses the \"Cash Basis\" of accounting, when do they record an expense?",
			options: [
				"When the service is performed.",
				"When the invoice is generated.",
				"When the cash is actually paid.",
				"When the contract is signed."
			],
			correctAnswer: 2,
			explanation: "Cash basis accounting only recognizes transactions when cash changes hands, ignoring the timing of the actual economic event."
		},
		{
			id: 9,
			question: "What is the effect on the accounting equation when a company pays a utility bill for the current month?",
			options: [
				"Assets increase, Liabilities increase.",
				"Assets decrease, Equity decreases.",
				"Assets decrease, Liabilities increase.",
				"Liabilities decrease, Equity increases."
			],
			correctAnswer: 1,
			explanation: "Paying a bill decreases Cash (Asset). Since it is an expense, it reduces Net Income, which in turn reduces Retained Earnings (Equity)."
		},
		{
			id: 10,
			question: "Which financial statement primarily reports a company’s expenses over a specific period?",
			options: [
				"Balance Sheet",
				"Statement of Cash Flows",
				"Income Statement",
				"Statement of Retained Earnings"
			],
			correctAnswer: 2,
			explanation: "The Income Statement summarizes Revenues and Expenses to determine the Net Income or Net Loss for a period."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Accounting Expenses Quiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental accounting concepts</p>
				</header>
	
				{/* This is the content of Accounting Quiz. */}
	
				<EnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>March 03, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};