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

export default function RevenueQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the fundamental principle for recognizing revenue under the accrual basis of accounting?",
			options: [
				"When cash is received from the customer",
				"When the performance obligation is satisfied by transferring a promised good or service",
				"When the contract is signed by both parties",
				"When the company pays its suppliers for raw materials"
			],
			correctAnswer: 1,
			explanation: "Under the revenue recognition principle (IFRS 15/ASC 606), revenue is recognized when a company satisfies a performance obligation by transferring control of a good or service to a customer."
		},
		{
			id: 2,
			question: "Under IFRS 15, how many steps are there in the model for revenue recognition?",
			options: [
				"Three steps",
				"Four steps",
				"Five steps",
				"Six steps"
			],
			correctAnswer: 2,
			explanation: "The standard outlines a five-step model: 1. Identify the contract, 2. Identify performance obligations, 3. Determine transaction price, 4. Allocate price, 5. Recognize revenue."
		},
		{
			id: 3,
			question: "What is \"Unearned Revenue\" classified as on the Balance Sheet?",
			options: [
				"An Asset",
				"An Equity account",
				"A Revenue account",
				"A Liability"
			],
			correctAnswer: 3,
			explanation: "Unearned revenue represents an obligation to provide goods or services in the future for which payment has already been received, therefore it is a liability."
		},
		{
			id: 4,
			question: "Which of the following would NOT be considered part of the \"Transaction Price\"?",
			options: [
				"Fixed cash consideration",
				"Variable consideration (e.g., discounts, rebates)",
				"Amounts collected on behalf of third parties (e.g., sales taxes)",
				"Non-cash consideration at fair value"
			],
			correctAnswer: 2,
			explanation: "Transaction price is the amount an entity expects to be entitled to; sales taxes are collected for the government and do not represent revenue for the company."
		},
		{
			id: 5,
			question: "When a company sells a product with a right of return, revenue should be recognized for:",
			options: [
				"The full invoice amount immediately",
				"Only the amount of consideration to which the entity expects to be entitled",
				"Zero, until the return period expires",
				"The cost of the goods sold only"
			],
			correctAnswer: 1,
			explanation: "Revenue is recognized only for those items that are not expected to be returned, based on historical data and estimation."
		},
		{
			id: 6,
			question: "If a contract contains multiple performance obligations, how is the transaction price allocated?",
			options: [
				"Equally to all obligations",
				"Based on the historical cost of each item",
				"Based on the relative stand-alone selling prices of each obligation",
				"To the most expensive item first"
			],
			correctAnswer: 2,
			explanation: "The total transaction price must be allocated to each distinct performance obligation in proportion to their individual stand-alone selling prices."
		},
		{
			id: 7,
			question: "A \"Bill-and-Hold\" arrangement allows revenue recognition when:",
			options: [
				"The seller ships the goods to its own warehouse",
				"The customer has obtained control of the product even though it is physically held by the seller",
				"The seller receives the cash deposit",
				"The invoice is printed"
			],
			correctAnswer: 1,
			explanation: "Revenue can be recognized if the customer has control, the product is identified separately as the customer's, and it is ready for physical transfer."
		},
		{
			id: 8,
			question: "\"Sales Returns and Allowances\" is what type of account?",
			options: [
				"Contra-asset account",
				"Expense account",
				"Contra-revenue account",
				"Liability account"
			],
			correctAnswer: 2,
			explanation: "It is a contra-revenue account that is deducted from Gross Sales to arrive at Net Sales on the Income Statement."
		},
		{
			id: 9,
			question: "Revenue recognized over time (rather than at a point in time) is common in which industry?",
			options: [
				"Retail grocery stores",
				"Long-term construction projects",
				"Fast food restaurants",
				"Used car dealerships"
			],
			correctAnswer: 1,
			explanation: "Long-term construction usually meets the criteria for recognition over time because the customer controls the asset as it is being created or the seller has an enforceable right to payment for performance completed."
		},
		{
			id: 10,
			question: "What happens to the \"Accounts Receivable\" account when a credit sale is recorded?",
			options: [
				"It decreases",
				"It remains unchanged",
				"It increases",
				"It is closed to Retained Earnings"
			],
			correctAnswer: 2,
			explanation: "A credit sale involves a debit to Accounts Receivable (increasing the asset) and a credit to Sales Revenue (increasing equity/revenue)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Revenue in Accounting</h1>
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