// EnPracticeQuizDPDK.tsx

import React, { useState, useEffect } from 'react';
import EnPracticeQuiz from '../../../../components/quiz/EnPracticeQuiz';

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

export default function FSMultipleChoice(): React.JSX.Element {
	// Danh sách câu hỏi về Financial Statements cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which financial statement reports a company's revenues and expenses over a specific period?",
			options: [
				"Balance Sheet",
				"Income Statement",
				"Statement of Cash Flows",
				"Statement of Retained Earnings"
			],
			correctAnswer: 1,
			explanation: "The Income Statement (also known as the Profit and Loss or P&L statement) shows a company's financial performance over a period of time by detailing its revenues and expenses, resulting in net income or net loss."
		},
		{
			id: 2,
			question: "The fundamental accounting equation is:",
			options: [
				"Assets = Liabilities - Equity",
				"Revenue - Expenses = Net Income",
				"Assets = Liabilities + Equity",
				"Cash + Receivables = Payables"
			],
			correctAnswer: 2,
			explanation: "The Balance Sheet is built on the foundation of the accounting equation, which states that everything a company owns (Assets) must equal what it owes to others (Liabilities) plus what it owes to its owners (Equity)."
		},
		{
			id: 3,
			question: "Which of the following is considered a current asset?",
			options: [
				"Long-term Debt",
				"Property, Plant, and Equipment (PP&E)",
				"Accounts Receivable",
				"Owners' Equity"
			],
			correctAnswer: 2,
			explanation: "Current assets are assets expected to be converted into cash, sold, or used up within one year or one operating cycle. Accounts Receivable represents money owed to the company by customers for sales made on credit, usually collected within a short period."
		},
		{
			id: 4,
			question: "The Statement of Cash Flows is divided into which three main activities?",
			options: [
				"Revenue, Expense, and Net Income",
				"Asset, Liability, and Equity",
				"Buying, Selling, and Holding",
				"Operating, Investing, and Financing"
			],
			correctAnswer: 3,
			explanation: "The Statement of Cash Flows tracks cash inflows and outflows by categorizing them into three sections: Operating (day-to-day business), Investing (buying/selling long-term assets), and Financing (debt, equity, and dividends)."
		},
		{
			id: 5,
			question: "What does the term 'Liquidity' primarily refer to in financial analysis?",
			options: [
				"The profitability of a company.",
				"A company's ability to meet its short-term obligations.",
				"The efficiency of asset utilization.",
				"The return generated on shareholders' investment."
			],
			correctAnswer: 1,
			explanation: "Liquidity is a measure of how quickly a company can convert its assets into cash to cover its current liabilities (short-term debts), indicating its ability to pay short-term bills."
		},
		{
			id: 6,
			question: "The amount a company earns after subtracting the Cost of Goods Sold (COGS) from its Net Sales is known as:",
			options: [
				"Net Income",
				"Operating Income",
				"Gross Profit",
				"Earnings Before Interest and Taxes (EBIT)"
			],
			correctAnswer: 2,
			explanation: "Gross Profit is calculated as Net Sales minus the Cost of Goods Sold (COGS). It represents the profit before considering operating expenses, interest, and taxes."
		},
		{
			id: 7,
			question: "Dividends paid to shareholders would appear under which section of the Statement of Cash Flows?",
			options: [
				"Operating Activities",
				"Investing Activities",
				"Financing Activities",
				"Non-Cash Activities"
			],
			correctAnswer: 2,
			explanation: "Financing activities involve transactions with owners and creditors, such as issuing or repurchasing stock, borrowing money, repaying debt principal, and paying dividends."
		},
		{
			id: 8,
			question: "Which of the following is a non-cash expense reported on the Income Statement?",
			options: [
				"Salaries Expense",
				"Interest Expense",
				"Depreciation Expense",
				"Cost of Goods Sold"
			],
			correctAnswer: 2,
			explanation: "Depreciation allocates the cost of a long-term asset (like equipment) over its useful life. It is recorded as an expense on the Income Statement, but it does not involve an actual outflow of cash in the current period, making it a non-cash expense."
		},
		{
			id: 9,
			question: "The Return on Equity (ROE) ratio measures:",
			options: [
				"How efficiently a company manages its total assets.",
				"How much profit a company generates for each dollar of shareholders' equity.",
				"A company's short-term solvency.",
				"The percentage of sales left after all expenses are paid."
			],
			correctAnswer: 1,
			explanation: "Return on Equity (ROE) is a profitability ratio calculated as Net Income divided by Shareholders' Equity. It indicates the return generated by the company for the investment made by its owners."
		},
		{
			id: 10,
			question: "The Balance Sheet presents a company's financial position at a single point in time.",
			options: [
				"True",
				"False",
				"Only if the company is public",
				"Only for current assets"
			],
			correctAnswer: 0,
			explanation: "Unlike the Income Statement and Statement of Cash Flows, which cover a period of time, the Balance Sheet is a snapshot of the company's Assets, Liabilities, and Equity on a specific date (e.g., December 31, 2025)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#financial-statements-basic-practice"><mark className="highlight-tertiary-padding-4-8">Financial Statements</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Financial Statements</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental Financial Statements concepts</p>
				</header>
	
				{/* This is the content of Accounting Quiz. */}
	
				<EnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 10, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};