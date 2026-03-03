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

export default function AssetsQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which of the following is the best definition of an \"Asset\"?",
			options: [
				"Obligations that a company owes to outside parties.",
				"Resources owned or controlled by a company that have future economic value.",
				"The residual interest in the assets of the entity after deducting all its liabilities.",
				"The total revenue earned by a company during a specific period."
			],
			correctAnswer: 1,
			explanation: "Assets are resources resulting from past events that are expected to provide future economic benefits to the business."
		},
		{
			id: 2,
			question: "Which of these is considered a \"Current Asset\"?",
			options: [
				"Land",
				"Manufacturing Equipment",
				"Accounts Receivable",
				"Trademarks"
			],
			correctAnswer: 2,
			explanation: "Current assets are expected to be converted into cash or used up within one year or one operating cycle. Accounts receivable typically meets this criteria."
		},
		{
			id: 3,
			question: "What is an \"Intangible Asset\"?",
			options: [
				"An asset that has physical substance, like a building.",
				"An asset that cannot be sold.",
				"An asset that lacks physical substance but provides long-term value.",
				"An asset that is always recorded at market value."
			],
			correctAnswer: 2,
			explanation: "Intangible assets (like patents, copyrights, and goodwill) do not have a physical form but represent legal rights or competitive advantages."
		},
		{
			id: 4,
			question: "Under the cost principle, how are assets initially recorded on the balance sheet?",
			options: [
				"At their current market value.",
				"At their historical acquisition cost.",
				"At their expected selling price.",
				"At the value adjusted for inflation."
			],
			correctAnswer: 1,
			explanation: "The historical cost principle requires companies to record assets at the original price paid to acquire them."
		},
		{
			id: 5,
			question: "\"Depreciation\" is the process of:",
			options: [
				"Increasing the value of an asset over time.",
				"Calculating the exact resale value of an asset.",
				"Allocating the cost of a tangible fixed asset over its useful life.",
				"Paying off the debt used to buy an asset."
			],
			correctAnswer: 2,
			explanation: "Depreciation is an accounting method of allocating the cost of a physical asset over its life to match expenses with revenues."
		},
		{
			id: 6,
			question: "Which of the following is NOT a fixed asset?",
			options: [
				"Machinery",
				"Office Furniture",
				"Inventory",
				"Delivery Trucks"
			],
			correctAnswer: 2,
			explanation: "Inventory is a current asset because it is intended to be sold to customers in the normal course of business, usually within a year."
		},
		{
			id: 7,
			question: "What does \"Book Value\" of an asset represent?",
			options: [
				"The price the asset could be sold for today.",
				"Original cost minus accumulated depreciation.",
				"The original cost plus maintenance expenses.",
				"The replacement cost of the asset."
			],
			correctAnswer: 1,
			explanation: "Book value (or carrying value) is the net amount of an asset shown on the balance sheet, calculated as Cost - Accumulated Depreciation."
		},
		{
			id: 8,
			question: "Prepaid Expenses are classified as:",
			options: [
				"Liabilities",
				"Equity",
				"Revenues",
				"Assets"
			],
			correctAnswer: 3,
			explanation: "Prepaid expenses (like insurance paid in advance) are assets because they represent future economic benefits (services to be received)."
		},
		{
			id: 9,
			question: "Which asset is never depreciated?",
			options: [
				"Buildings",
				"Land",
				"Computer Software",
				"Equipment"
			],
			correctAnswer: 1,
			explanation: "Land is considered to have an indefinite useful life and its value does not get \"worn out\" over time, so it is not depreciated."
		},
		{
			id: 10,
			question: "What is \"Goodwill\" in accounting?",
			options: [
				"The kindness of the CEO.",
				"An asset that arises when one company acquires another for more than the fair market value of its net identifiable assets.",
				"Cash kept in a reserve fund for charity.",
				"The value of all products currently in the warehouse."
			],
			correctAnswer: 1,
			explanation: "Goodwill is an intangible asset recorded during a business acquisition when the purchase price exceeds the net value of the assets acquired."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Assets in Accounting</h1>
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