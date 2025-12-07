// FinancePracticeQuizDPDK.tsx

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

export default function FinancialQuestions(): React.JSX.Element {
	// Danh sách câu hỏi về Finance cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the term for the calculation of a loan payment schedule where each payment gradually reduces the principal amount over the life of the loan?",
			options: [
				"Discounting",
				"Compounding",
				"Amortization",
				"Refinancing"
			],
			correctAnswer: 2,
			explanation: "Amortization is the process of paying off a debt with a fixed repayment schedule in regular installments over a period of time. Each payment includes both interest and a portion of the principal."
		},
		{
			id: 2,
			question: "Which concept suggests that a higher potential return on an investment is typically accompanied by a greater chance of loss?",
			options: [
				"The Efficient Market Hypothesis (EMH)",
				"The Law of Diminishing Returns",
				"The Risk-Return Tradeoff",
				"The Principle of Diversification"
			],
			correctAnswer: 2,
			explanation: "The Risk-Return Tradeoff states that high potential returns are inherently linked to higher risk. Investors must accept greater volatility and uncertainty to pursue high reward opportunities."
		},
		{
			id: 3,
			question: "Which financial statement would you examine to find a company's total revenue and net expenses for the previous quarter?",
			options: [
				"Statement of Cash Flows",
				"Income Statement (Profit and Loss Statement)",
				"Balance Sheet",
				"Statement of Retained Earnings"
			],
			correctAnswer: 1,
			explanation: "The Income Statement (or P&L) reports a company's financial performance over a specific accounting period, summarizing revenue, costs, and resulting profit or loss."
		},
		{
			id: 4,
			question: "What is the fee paid to a lender for the use of borrowed money, usually expressed as a percentage of the principal?",
			options: [
				"Dividend",
				"Principal",
				"Coupon",
				"Interest"
			],
			correctAnswer: 3,
			explanation: "Interest is the cost of borrowing money, calculated as a rate applied to the principal amount. It compensates the lender for the use of their funds."
		},
		{
			id: 5,
			question: "Which ratio is used to measure a company's stock price relative to its earnings per share (EPS)?",
			options: [
				"Current Ratio",
				"Debt-to-Equity Ratio",
				"Return on Assets (ROA)",
				"Price-to-Earnings Ratio (P/E)"
			],
			correctAnswer: 3,
			explanation: "The P/E Ratio is a common valuation tool that shows how much investors are willing to pay for each dollar of a company's earnings."
		},
		{
			id: 6,
			question: "If the market interest rates rise, what is the expected impact on the price of existing bonds?",
			options: [
				"The price will rise, making them more valuable.",
				"The price will remain unchanged.",
				"The price will fall, making their yield competitive with new bonds.",
				"The price will adjust based on the bond's maturity date only."
			],
			correctAnswer: 2,
			explanation: "Bond prices and interest rates have an inverse relationship. When new bonds are issued at higher rates, the market value of older bonds with lower fixed coupon payments must drop to offer a competitive yield."
		},
		{
			id: 7,
			question: "What does an Initial Public Offering (IPO) primarily allow a private company to do?",
			options: [
				"Issue debt instruments like bonds.",
				"Declare a high dividend.",
				"Raise capital by selling shares of ownership to the general public.",
				"Buy back its own outstanding stock."
			],
			correctAnswer: 2,
			explanation: "An IPO is the first time a private company sells its stock to the public, transforming it into a publicly traded company and generating significant capital."
		},
		{
			id: 8,
			question: "What is the risk-reducing strategy of investing in a broad range of assets from different sectors and geographies?",
			options: [
				"Concentration",
				"Arbitrage",
				"Short Selling",
				"Diversification"
			],
			correctAnswer: 3,
			explanation: "Diversification is a core risk management technique designed to lower the overall risk of a portfolio by spreading investments across various uncorrelated assets."
		},
		{
			id: 9,
			question: "If you calculate interest on the principal only, and not on any previously earned interest, what type of interest are you calculating?",
			options: [
				"Compounding Interest",
				"Annual Percentage Yield (APY)",
				"Simple Interest",
				"Discount Rate"
			],
			correctAnswer: 2,
			explanation: "Simple Interest is calculated exclusively on the initial amount of money deposited or borrowed, based on the formula $I = P \times R \times T$."
		},
		{
			id: 10,
			question: "Which investment vehicle allows a small investor to pool money with many others to invest in a professionally managed portfolio of stocks and bonds?",
			options: [
				"A Treasury Bill",
				"A Hedge Fund",
				"An Individual Retirement Account (IRA)",
				"A Mutual Fund"
			],
			correctAnswer: 3,
			explanation: "A Mutual Fund collects money from many investors and invests it in various securities, providing diversification and professional management to investors who might not be able to afford it individually."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/finance#finance-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Financial Questions</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental financial concepts</p>
				</header>
	
				{/* This is the content of Finance Quiz. */}
	
				<EnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 07, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};