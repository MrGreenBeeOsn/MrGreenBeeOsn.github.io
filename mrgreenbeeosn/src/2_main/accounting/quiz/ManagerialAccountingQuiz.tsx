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

export default function ManagerialAccountingQuiz(): React.JSX.Element {
	// Danh sách câu hỏi về Accounting cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which of the following is a characteristic of managerial accounting?",
			options: [
				"It is primarily used by external decision makers.",
				"It must follow Generally Accepted Accounting Principles (GAAP).",
				"It focuses on providing information for internal decision-making.",
				"It is concerned with historical data only."
			],
			correctAnswer: 2,
			explanation: "Managerial accounting is designed to provide information to internal users (managers) to help them plan, direct, and control operations."
		},
		{
			id: 2,
			question: "Direct materials and direct labor are examples of:",
			options: [
				"Period costs.",
				"Manufacturing overhead.",
				"Prime costs.",
				"Indirect costs."
			],
			correctAnswer: 2,
			explanation: "Prime costs consist of direct materials and direct labor, which are directly traceable to the production of a product."
		},
		{
			id: 3,
			question: "Which of the following costs is NOT a product cost?",
			options: [
				"Depreciation on factory equipment.",
				"Sales commissions.",
				"Indirect labor.",
				"Raw materials used in production."
			],
			correctAnswer: 1,
			explanation: "Sales commissions are selling expenses and are classified as period costs, not product costs."
		},
		{
			id: 4,
			question: "Under a job-order costing system, costs are accumulated by:",
			options: [
				"Specific departments.",
				"Time periods (e.g., months).",
				"Individual jobs or batches.",
				"Production processes."
			],
			correctAnswer: 2,
			explanation: "Job-order costing is used when products are manufactured in distinct batches or jobs, and costs are tracked for each specific job."
		},
		{
			id: 5,
			question: "The break-even point is the level of sales where:",
			options: [
				"Total revenue equals total variable costs.",
				"Total contribution margin equals total fixed costs.",
				"Net income is maximized.",
				"Variable costs equal fixed costs."
			],
			correctAnswer: 1,
			explanation: "At the break-even point, the contribution margin covers all fixed costs, resulting in a net operating income of zero."
		},
		{
			id: 6,
			question: "If sales increase and all other factors remain constant, the margin of safety will:",
			options: [
				"Increase.",
				"Decrease.",
				"Remain unchanged.",
				"Drop to zero."
			],
			correctAnswer: 0,
			explanation: "The margin of safety is the difference between actual (or budgeted) sales and break-even sales; therefore, higher sales increase this buffer."
		},
		{
			id: 7,
			question: "In a Make-or-Buy decision, which of the following is usually a relevant cost?",
			options: [
				"Sunk costs.",
				"Avoidable fixed costs.",
				"Allocated general overhead.",
				"Depreciation on existing machinery."
			],
			correctAnswer: 1,
			explanation: "Relevant costs are future costs that differ between alternatives. Avoidable fixed costs can be eliminated if the product is bought instead of made."
		},
		{
			id: 8,
			question: "Which budget is the starting point for the entire master budget process?",
			options: [
				"Production budget.",
				"Cash budget.",
				"Sales budget.",
				"Capital budget."
			],
			correctAnswer: 2,
			explanation: "The sales budget is prepared first because all other budgets (production, purchases, expenses) depend on the expected volume of sales."
		},
		{
			id: 9,
			question: "A favorable labor efficiency variance indicates that:",
			options: [
				"The actual labor rate was less than the standard rate.",
				"Actual hours worked were less than the standard hours allowed for the output.",
				"More units were produced than originally planned.",
				"The total labor cost was under budget."
			],
			correctAnswer: 1,
			explanation: "Efficiency variances measure the use of inputs. A favorable variance means the production team used fewer hours than the standard allowed."
		},
		{
			id: 10,
			question: "What is the formula for calculating the Contribution Margin Ratio?",
			options: [
				"(Sales - Variable Expenses) / Sales.",
				"(Sales - Fixed Expenses) / Sales.",
				"Net Income / Sales.",
				"Total Contribution Margin / Net Income."
			],
			correctAnswer: 0,
			explanation: "The contribution margin ratio represents the percentage of each sales dollar available to cover fixed expenses and contribute to profit."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#accounting-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Managerial Accounting Quiz</h1>
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