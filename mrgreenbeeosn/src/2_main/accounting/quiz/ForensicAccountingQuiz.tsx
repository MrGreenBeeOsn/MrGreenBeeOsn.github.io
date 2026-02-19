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

export default function ForensicAccountingQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What is the primary objective of forensic accounting?",
			options: [
				"To prepare annual financial statements for shareholders.",
				"To provide evidence for legal proceedings and investigate financial anomalies.",
				"To help companies minimize their tax liabilities legally.",
				"To ensure that a company's internal controls are operating efficiently."
			],
			correctAnswer: 1,
			explanation: "Forensic accounting combines accounting, auditing, and investigative skills to conduct examinations into finances that are suitable for use in legal proceedings."
		},
		{
			id: 2,
			question: "Which of the following best describes \"The Fraud Triangle\"?",
			options: [
				"Opportunity, Pressure (Incentive), and Rationalization.",
				"Greed, Debt, and Poor Internal Controls.",
				"Theft, Concealment, and Conversion.",
				"Financial Statement Fraud, Asset Misappropriation, and Corruption."
			],
			correctAnswer: 0,
			explanation: "The Fraud Triangle is a framework designed to explain the reasoning behind an individual's decision to commit workplace fraud."
		},
		{
			id: 3,
			question: "What is \"skimming\" in the context of asset misappropriation?",
			options: [
				"Stealing cash after it has been recorded in the accounting system.",
				"Overstating business expenses to receive a higher reimbursement.",
				"Stealing cash from an organization before it is recorded on the books.",
				"Creating ghost employees to divert payroll funds."
			],
			correctAnswer: 2,
			explanation: "Skimming is an \"off-book\" fraud because the cash is stolen before a receipt is generated or the transaction is entered into the system."
		},
		{
			id: 4,
			question: "Which technique involves looking for patterns or anomalies in large data sets?",
			options: [
				"Bank reconciliation.",
				"Benford's Law analysis.",
				"Vouching.",
				"Physical inventory count."
			],
			correctAnswer: 1,
			explanation: "Benford's Law (the Law of First Digits) is a mathematical tool often used by forensic accountants to detect non-random patterns in financial data that may indicate fraud."
		},
		{
			id: 5,
			question: "In forensic accounting, \"Lapping\" is a method used to:",
			options: [
				"Hide a shortage of cash by delaying the recording of accounts receivable receipts.",
				"Inflate the value of inventory by double-counting items.",
				"Pay personal expenses using company credit cards.",
				"Understate liabilities on the balance sheet."
			],
			correctAnswer: 0,
			explanation: "Lapping involves taking a payment from Customer A and applying it to a previous deficit, then using Customer B's payment to cover Customer A's balance, and so on."
		},
		{
			id: 6,
			question: "What is the main difference between a standard auditor and a forensic accountant?",
			options: [
				"Auditors look for fraud, while forensic accountants look for errors.",
				"Auditors use sampling, while forensic accountants often examine every transaction in a specific area.",
				"Forensic accountants only work for the government.",
				"Auditors are not required to be CPAs, but forensic accountants must be."
			],
			correctAnswer: 1,
			explanation: "While statutory auditors use sampling to ensure \"reasonable assurance,\" forensic accountants perform a much more detailed, non-sampling investigation to find specific evidence."
		},
		{
			id: 7,
			question: "\"Cooking the books\" is a slang term most closely related to:",
			options: [
				"Asset misappropriation.",
				"Bribery and corruption.",
				"Financial statement fraud.",
				"Money laundering."
			],
			correctAnswer: 0,
			explanation: "\"Cooking the books\" refers to the deliberate manipulation of financial statements to make a company's financial performance look better (or worse) than it actually is."
		},
		{
			id: 8,
			question: "Which phase of a forensic accounting engagement involves interviewing suspects?",
			options: [
				"Planning.",
				"Data Collection.",
				"Investigative Phase.",
				"Reporting."
			],
			correctAnswer: 2,
			explanation: "The investigative phase includes specialized techniques such as surveillance, background checks, and formal interviews/interrogations."
		},
		{
			id: 9,
			question: "What does \"Money Laundering\" involve?",
			options: [
				"Improving the liquidity of a company.",
				"Making \"dirty\" money from illegal activities appear \"clean\" or legitimate.",
				"Recording fake sales to boost stock prices.",
				"Shrinkage of physical assets due to theft."
			],
			correctAnswer: 1,
			explanation: "Money laundering is the process of disguising the origins of illegally obtained money so that it appears to have come from a legitimate source."
		},
		{
			id: 10,
			question: "When a forensic accountant acts as an \"Expert Witness,\" their primary duty is to:",
			options: [
				"Win the case for the side that hired them.",
				"Provide an unbiased, professional opinion to help the court understand complex financial issues.",
				"Arrest the individuals suspected of fraud.",
				"Ensure the media receives accurate information about the trial."
			],
			correctAnswer: 1,
			explanation: "An expert witness has a duty to provide independent and objective assistance to the court by way of objective, unbiased opinion in relation to matters within their expertise."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Forensic Accounting Quiz</h1>
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