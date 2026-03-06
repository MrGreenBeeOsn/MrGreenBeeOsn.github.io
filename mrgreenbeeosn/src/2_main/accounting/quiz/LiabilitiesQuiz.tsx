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

export default function LiabilitiesQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which of the following is a characteristic of a liability?",
			options: [
				"It is a result of a future transaction.",
				"It represents a present obligation arising from past events.",
				"It is a resource controlled by the entity.",
				"It must always be paid in cash immediately."
			],
			correctAnswer: 1,
			explanation: "According to accounting frameworks (IFRS/GAAP), a liability is a present obligation of the entity to transfer an economic resource as a result of past events."
		},
		{
			id: 2,
			question: "How is \"Unearned Revenue\" classified on the Balance Sheet?",
			options: [
				"Current Asset",
				"Long-term Asset",
				"Current Liability",
				"Equity"
			],
			correctAnswer: 2,
			explanation: "Unearned revenue represents money received from a customer before the service is provided. It is a liability because the company has an obligation to deliver goods or services in the future."
		},
		{
			id: 3,
			question: "Which of the following is an example of an \"Accrued Liability\"?",
			options: [
				"Salaries payable to employees for work performed but not yet paid.",
				"A 5-year bank loan.",
				"Prepaid rent paid to a landlord.",
				"Common stock issued to investors."
			],
			correctAnswer: 0,
			explanation: "Accrued liabilities are expenses that have been incurred (the work was done) but have not yet been paid or recorded through a formal invoice at the end of the period."
		},
		{
			id: 4,
			question: "A \"Current Liability\" is an obligation that is expected to be settled within:",
			options: [
				"2 years.",
				"The normal operating cycle or one year, whichever is longer.",
				"The normal operating cycle or one year, whichever is shorter.",
				"5 years."
			],
			correctAnswer: 1,
			explanation: "Current liabilities are short-term obligations expected to be paid within the company's operating cycle or typically 12 months."
		},
		{
			id: 5,
			question: "If a company issues a bond at a \"Discount,\" it means:",
			options: [
				"The market interest rate is lower than the stated interest rate.",
				"The market interest rate is higher than the stated interest rate.",
				"The company is paying more interest than the market requires.",
				"The bond is sold at its face value."
			],
			correctAnswer: 1,
			explanation: "A discount occurs when the bond's stated (coupon) rate is lower than the prevailing market rate, making the bond less attractive unless it is sold for less than its face value."
		},
		{
			id: 6,
			question: "What is the journal entry to record the declaration of a cash dividend?",
			options: [
				"Debit Cash; Credit Dividends Payable.",
				"Debit Retained Earnings; Credit Cash.",
				"Debit Retained Earnings; Credit Dividends Payable.",
				"Debit Dividends Payable; Credit Cash."
			],
			correctAnswer: 2,
			explanation: "When a dividend is declared (but not yet paid), the company recognizes a liability (Dividends Payable) and reduces its Equity (Retained Earnings)."
		},
		{
			id: 7,
			question: "A \"Contingent Liability\" should be recorded in the financial statements if:",
			options: [
				"The loss is remote.",
				"The loss is possible but not probable.",
				"The loss is probable and the amount can be reasonably estimated.",
				"It is a potential gain for the company."
			],
			correctAnswer: 2,
			explanation: "Under accounting rules, a contingency is only recognized as a liability on the balance sheet if it is \"probable\" (likely to occur) and the amount can be \"reasonably estimated.\""
		},
		{
			id: 8,
			question: "Which of the following is NOT a current liability?",
			options: [
				"Accounts Payable.",
				"Sales Tax Payable.",
				"Current portion of long-term debt.",
				"Mortgage Payable due in 10 years."
			],
			correctAnswer: 3,
			explanation: "A mortgage payable due in 10 years is classified as a Long-term (Non-current) Liability because it is not due within the next 12 months."
		},
		{
			id: 9,
			question: "When a company borrows $10,000 from a bank by signing a 6-month note, which account is credited?",
			options: [
				"Notes Receivable.",
				"Cash.",
				"Notes Payable.",
				"Interest Expense."
			],
			correctAnswer: 2,
			explanation: "The company receives cash (Debit Cash) and creates a formal written promise to pay (Credit Notes Payable)."
		},
		{
			id: 10,
			question: "The entry to record the payment of an Accounts Payable includes:",
			options: [
				"A debit to Cash and a credit to Accounts Payable.",
				"A debit to Accounts Payable and a credit to Cash.",
				"A debit to Expense and a credit to Cash.",
				"A debit to Accounts Payable and a credit to Revenue."
			],
			correctAnswer: 1,
			explanation: "Paying a liability reduces the amount owed (Debit Accounts Payable) and reduces the company's assets (Credit Cash)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Questions on Accounting Liabilities</h1>
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