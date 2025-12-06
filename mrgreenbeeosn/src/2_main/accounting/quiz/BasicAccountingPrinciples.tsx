// AccountingQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import AccountingQuiz from '../../../components/quiz/AccountingPracticeQuiz';

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

export default function BasicAccountingPrinciples(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Fundamental Accounting Equation: Which of the following equations represents the fundamental accounting equation?",
			options: [
				"Assets + Liabilities = Owner's Equity",
				"Assets = Liabilities - Owner's Equity",
				"Assets = Liabilities + Owner's Equity",
				"Liabilities = Assets + Owner's Equity"
			],
			correctAnswer: 2,
			explanation: "This is the foundation of double-entry accounting. It shows that a company's assets are funded by either debt (Liabilities) or the owner's money (Equity)."
		},
		{
			id: 2,
			question: "Recording Asset Increase: To increase an Asset account, which action should you take?",
			options: [
				"Debit the account",
				"Credit the account",
				"Decrease the Liability",
				"Do nothing"
			],
			correctAnswer: 0,
			explanation: "Assets have a \"normal debit balance.\" Therefore, a Debit increases an asset account, while a Credit decreases it, following the rules of the T-account system."
		},
		{
			id: 3,
			question: "Reporting Financial Position: Which financial statement reports a company's financial position at a specific point in time?",
			options: [
				"Income Statement",
				"Balance Sheet",
				"Statement of Cash Flows",
				"Statement of Retained Earnings"
			],
			correctAnswer: 1,
			explanation: "The Balance Sheet provides a snapshot of the business's Assets, Liabilities, and Equity on a specific date, unlike the other statements which cover a period of time."
		},
		{
			id: 4,
			question: "Accrual Revenue Recognition: Under the accrual basis of accounting, when is revenue recorded?",
			options: [
				"When cash is received",
				"At the end of the year",
				"When the invoice is sent",
				"When it is earned"
			],
			correctAnswer: 3,
			explanation: "Accrual accounting follows the revenue recognition principle, stating that revenue must be recognized when the service is performed or goods are delivered (earned), regardless of when cash is collected."
		},
		{
			id: 5,
			question: "Current Liability: Which of the following accounts is considered a Current Liability?",
			options: [
				"Accounts Payable",
				"Accounts Receivable",
				"Mortgage Payable (due in 5 years)",
				"Inventory"
			],
			correctAnswer: 0,
			explanation: "Accounts Payable (money owed to suppliers) is a short-term debt due within one year, classifying it as a Current Liability. Accounts Receivable and Inventory are Assets."
		},
		{
			id: 6,
			question: "Net Income Calculation: Net Income is calculated using which formula?",
			options: [
				"Assets - Liabilities",
				"Revenues + Expenses",
				"Revenues - Expenses",
				"Sales - Cost of Goods Sold"
			],
			correctAnswer: 2,
			explanation: "Net Income (or profit) is determined by subtracting all operating expenses and other costs from the total revenues generated over a specific period."
		},
		{
			id: 7,
			question: "Purpose of Trial Balance: What is the primary purpose of a Trial Balance?",
			options: [
				"To calculate Net Income",
				"To ensure total debits equal total credits",
				"To report cash flows",
				"To list all company accounts"
			],
			correctAnswer: 1,
			explanation: "The Trial Balance is a list of all general ledger accounts and their balances used to verify the mathematical equality of total debits and total credits before preparing financial statements."
		},
		{
			id: 8,
			question: "Cost Allocation Method: The systematic allocation of the cost of a tangible long-term asset over its useful life is called:",
			options: [
				"Amortization",
				"Depletion",
				"Accrual",
				"Depreciation"
			],
			correctAnswer: 3,
			explanation: "Depreciation is the term used specifically for allocating the cost of tangible fixed assets (like equipment or buildings) over their useful lives."
		},
		{
			id: 9,
			question: "Intangible Asset Example: Which of the following is an example of an Intangible Asset?",
			options: [
				"Building",
				"Inventory",
				"Patent",
				"Cash"
			],
			correctAnswer: 2,
			explanation: "An Intangible Asset has value but no physical form. A Patent (a legal right) fits this definition, while Building and Inventory are tangible."
		},
		{
			id: 10,
			question: "COGS Acronym: In accounting, what does the acronym COGS stand for?",
			options: [
				"Cost of Goods Sold",
				"Cash on Goods Sold",
				"Cost of Great Service",
				"Cost of Gross Sales"
			],
			correctAnswer: 0,
			explanation: "COGS is the direct costs attributable to the production of the goods sold by a company, including material and direct labor costs."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Basic Accounting Principles</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental accounting concepts</p>
				</header>
	
				{/* This is the content of Accounting Quiz. */}
	
				<AccountingQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 05, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};