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

export default function InternationalAccountingQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which organization is responsible for issuing International Financial Reporting Standards (IFRS)?",
			options: [
				"FASB",
				"IASB",
				"SEC",
				"GAAP"
			],
			correctAnswer: 1,
			explanation: "The International Accounting Standards Board (IASB) is the independent body that develops and approves IFRS. FASB is the US-based counterpart."
		},
		{
			id: 2,
			question: "What is the main goal of \"Convergence\" in international accounting?",
			options: [
				"To eliminate the need for any accounting standards.",
				"To ensure all countries use the US GAAP.",
				"To reduce differences between various accounting standards (like GAAP and IFRS) into a single set of high-quality standards.",
				"To increase the tax burden on multinational corporations."
			],
			correctAnswer: 2,
			explanation: "Convergence aims to harmonize different accounting frameworks to make financial statements comparable globally."
		},
		{
			id: 3,
			question: "Under IFRS, which of the following is NOT a required component of a complete set of financial statements?",
			options: [
				"Statement of financial position",
				"Statement of changes in equity",
				"Management discussion and analysis (MD&A)",
				"Notes, comprising a summary of significant accounting policies"
			],
			correctAnswer: 2,
			explanation: "While MD&A is often included in annual reports, IFRS (specifically IAS 1) defines the formal components as the balance sheet, P&L, cash flows, equity changes, and notes."
		},
		{
			id: 4,
			question: "Which principle assumes that a business will continue to operate for the foreseeable future?",
			options: [
				"Accrual basis",
				"Materiality",
				"Going concern",
				"Historical cost"
			],
			correctAnswer: 2,
			explanation: "The \"Going Concern\" assumption implies the entity has neither the intention nor the need to liquidate or curtail materially the scale of its operations."
		},
		{
			id: 5,
			question: "How does IFRS generally treat the reversal of inventory write-downs?",
			options: [
				"Reversals are strictly prohibited.",
				"Reversals are allowed if there is clear evidence of an increase in net realizable value.",
				"Reversals are only allowed for the first 12 months.",
				"Reversals are recognized in Other Comprehensive Income (OCI)."
			],
			correctAnswer: 1,
			explanation: "Under IAS 2, if the circumstances that caused the write-down no longer exist, the write-down is reversed through the profit or loss statement."
		},
		{
			id: 6,
			question: "Which method of inventory valuation is prohibited under IFRS?",
			options: [
				"FIFO (First-In, First-Out)",
				"LIFO (Last-In, First-Out)",
				"Weighted Average Cost",
				"Specific Identification"
			],
			correctAnswer: 1,
			explanation: "IAS 2 prohibits the use of LIFO because it often results in inventory values that do not reflect recent cost levels on the balance sheet."
		},
		{
			id: 7,
			question: "Under IAS 16, the \"Revaluation Model\" allows an entity to carry property, plant, and equipment at:",
			options: [
				"Historical cost less accumulated depreciation.",
				"Fair value at the date of revaluation less subsequent depreciation.",
				"Replacement cost only.",
				"The price adjusted for general inflation."
			],
			correctAnswer: 1,
			explanation: "The revaluation model permits assets to be carried at a revalued amount, which is their fair value at the date of revaluation."
		},
		{
			id: 8,
			question: "What is \"Functional Currency\" as defined by IAS 21?",
			options: [
				"The currency of the country where the parent company is located.",
				"The currency of the primary economic environment in which the entity operates.",
				"The currency used for tax filings only.",
				"The US Dollar, by default."
			],
			correctAnswer: 1,
			explanation: "Functional currency is the currency of the primary economic environment in which the entity generates and expends cash."
		},
		{
			id: 9,
			question: "In IFRS, \"Research\" costs are generally:",
			options: [
				"Capitalized as intangible assets.",
				"Expensed in the period they are incurred.",
				"Amortized over 5 years.",
				"Ignored until the project is finished."
			],
			correctAnswer: 1,
			explanation: "Under IAS 38, research costs are expensed because the entity cannot yet demonstrate that an intangible asset exists that will generate future economic benefits. Development costs, however, may be capitalized if specific criteria are met."
		},
		{
			id: 10,
			question: "What is the primary focus of the \"Fair Value Hierarchy\" in IFRS 13?",
			options: [
				"To rank the quality of management.",
				"To prioritize the inputs used in valuation techniques.",
				"To determine the age of an asset.",
				"To calculate the dividend payout ratio."
			],
			correctAnswer: 1,
			explanation: "IFRS 13 establishes a three-level hierarchy (Level 1, 2, and 3) to increase consistency and comparability in fair value measurements based on how observable the inputs are."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">International AccountingQuiz</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental accounting concepts</p>
				</header>
	
				{/* This is the content of Accounting Quiz. */}
	
				<EnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>February 19, 2026 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};