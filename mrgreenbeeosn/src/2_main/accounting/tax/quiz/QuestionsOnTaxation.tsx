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

export default function QuestionsOnTaxation(): React.JSX.Element {
	// Danh sách câu hỏi về Tax cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What type of tax requires individuals with higher incomes to pay a larger percentage of their income in tax?",
			options: [
				"Regressive tax",
				"Proportional tax",
				"Progressive tax",
				"Flat tax"
			],
			correctAnswer: 2,
			explanation: "A Progressive tax system is one where the tax rate increases as the taxable amount increases. This means higher-income individuals pay a larger percentage of their income in tax."
		},
		{
			id: 2,
			question: "Which of the following is typically classified as an indirect tax?",
			options: [
				"Personal Income Tax",
				"Corporate Income Tax",
				"Excise Tax",
				"Property Tax"
			],
			correctAnswer: 2,
			explanation: "An Excise Tax is levied on a specific good or service, collected by the producer/seller, but ultimately passed on to the consumer, making it an indirect tax."
		},
		{
			id: 3,
			question: "What is the illegal practice of deliberately misrepresenting one's financial affairs to reduce or eliminate tax liability?",
			options: [
				"Tax planning",
				"Tax deferral",
				"Tax avoidance",
				"Tax evasion"
			],
			correctAnswer: 3,
			explanation: "Tax evasion involves fraudulent activities like hiding income or falsifying records to bypass legal tax obligations, which is a criminal offense."
		},
		{
			id: 4,
			question: "Final tax bill, dollar-for-dollar.",
			options: [
				"Final tax bill, dollar-for-dollar.",
				"Taxable income.",
				"Marginal tax rate.",
				"Gross income."
			],
			correctAnswer: 1,
			explanation: "A Tax deduction is an amount that is subtracted from gross income to determine the taxable income, thereby reducing the amount of income subject to tax."
		},
		{
			id: 5,
			question: "A tax levied on the difference between a firm's sales revenue and its purchase of inputs from other firms is known as:",
			options: [
				"Sales Tax",
				"Value Added Tax (VAT)",
				"Turnover Tax",
				"Wealth Tax"
			],
			correctAnswer: 1,
			explanation: "Value Added Tax (VAT) is a consumption tax placed on a product whenever value is added at each stage of the supply chain."
		},
		{
			id: 6,
			question: "The term for the ultimate economic burden of a tax, regardless of who legally pays the tax, is:",
			options: [
				"Tax base",
				"Tax rate",
				"Tax compliance",
				"Tax incidence"
			],
			correctAnswer: 3,
			explanation: "Tax incidence refers to the distribution of the tax burden between buyers and sellers, or consumers and producers."
		},
		{
			id: 7,
			question: "Capital Gains Tax is a tax on the profit realized from the sale of a:",
			options: [
				"Personal labor service.",
				"Current asset like inventory.",
				"Non-inventory asset held for investment (e.g., stock or real estate).",
				"Consumable good."
			],
			correctAnswer: 2,
			explanation: "A Capital Gain is the profit from the sale of an asset that has increased in value, such as shares or bonds."
		},
		{
			id: 8,
			question: "Unlike a tax deduction, a tax credit directly reduces a taxpayer's:",
			options: [
				"Gross income.",
				"Taxable income.",
				"Total tax liability.",
				"Average tax rate."
			],
			correctAnswer: 2,
			explanation: "A Tax credit is a dollar-for-dollar reduction in the actual amount of tax owed (the tax liability)."
		},
		{
			id: 9,
			question: "Which of the following taxes is generally considered regressive because it consumes a larger proportion of low-income earnings?",
			options: [
				"Inheritance Tax",
				"Corporate Income Tax",
				"Sales Tax",
				"Progressive Income Tax"
			],
			correctAnswer: 2,
			explanation: "A Sales Tax is considered regressive because everyone pays the same rate, but the amount paid represents a much higher percentage of a low-income person's total income."
		},
		{
			id: 10,
			question: "In a progressive income tax system, a tax bracket refers to:",
			options: [
				"The fixed, singular rate applied to all income.",
				"The range of income that is taxed at a specific marginal rate.",
				"The total amount of tax paid.",
				"The portion of income that is tax-exempt."
			],
			correctAnswer: 1,
			explanation: "A Tax bracket defines the specific range of income subject to a particular marginal tax rate before moving to the next, higher rate."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/tax#tax-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Questions On Taxation</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental tax concepts</p>
				</header>
	
				{/* This is the content of Tax Quiz. */}
	
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