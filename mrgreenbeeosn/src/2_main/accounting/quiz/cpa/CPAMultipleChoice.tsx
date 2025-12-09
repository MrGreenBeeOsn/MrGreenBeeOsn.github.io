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

export default function CPAMultipleChoice(): React.JSX.Element {
	// Danh sách câu hỏi về CPA cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "What does the acronym CPA stand for in the field of accounting?",
			options: [
				"Certified Private Auditor",
				"Chief Public Administrator",
				"Certified Professional Accountant",
				"Certified Public Accountant"
			],
			correctAnswer: 3,
			explanation: "CPA stands for Certified Public Accountant. It is the title of qualified public accountants in numerous countries, including the United States, and is a license to provide auditing, attest, and other public accounting services."
		},
		{
			id: 2,
			question: "Which of the following bodies in the United States sets the uniform standards for the CPA Examination?",
			options: [
				"Financial Accounting Standards Board (FASB)",
				"Public Company Accounting Oversight Board (PCAOB)",
				"American Institute of Certified Public Accountants (AICPA)",
				"Securities and Exchange Commission (SEC)"
			],
			correctAnswer: 2,
			explanation: "The AICPA develops and grades the Uniform CPA Examination, which all 55 U.S. jurisdictions use for licensing, ensuring a consistent standard across the country."
		},
		{
			id: 3,
			question: "How many primary core sections are currently included in the Uniform CPA Examination?",
			options: [
				"Three (3)",
				"Four (4)",
				"Five (5)",
				"Six (6)"
			],
			correctAnswer: 1,
			explanation: "The Uniform CPA Examination currently consists of four core sections: Auditing and Attestation (AUD), Business Environment and Concepts (BEC), Financial Accounting and Reporting (FAR), and Regulation (REG)."
		},
		{
			id: 4,
			question: "In the context of U.S. CPA licensure, what is the term for the requirement that CPAs must complete a certain number of hours of education after becoming licensed?",
			options: [
				"Continuing Financial Education (CFE)",
				"Continuing Professional Education (CPE)",
				"Continuous Audit Hours (CAH)",
				"Professional Development Units (PDU)"
			],
			correctAnswer: 1,
			explanation: "Continuing Professional Education (CPE) is the required mechanism for licensed CPAs to maintain their knowledge and professional competence throughout their careers."
		},
		{
			id: 5,
			question: "Which CPA Exam section primarily covers U.S. federal taxation (individual and entity) and professional ethics?",
			options: [
				"Auditing and Attestation (AUD)",
				"Financial Accounting and Reporting (FAR)",
				"Business Environment and Concepts (BEC)",
				"Regulation (REG)"
			],
			correctAnswer: 3,
			explanation: "The Regulation (REG) section focuses heavily on U.S. federal tax laws, professional and legal responsibilities, and the ethical conduct required of CPAs."
		},
		{
			id: 6,
			question: "The practice of providing an opinion on the fairness of a client's financial statements is mainly covered in which CPA Exam section?",
			options: [
				"Auditing and Attestation (AUD)",
				"Financial Accounting and Reporting (FAR)",
				"Regulation (REG)",
				"Information Technology (IT)"
			],
			correctAnswer: 0,
			explanation: "The Auditing and Attestation (AUD) section covers the standards and procedures related to performing audits, reviews, and other attest engagements to provide assurance."
		},
		{
			id: 7,
			question: "What is the necessary minimum score a candidate must achieve on each section of the Uniform CPA Examination to pass?",
			options: [
				"65",
				"70",
				"75",
				"80"
			],
			correctAnswer: 2,
			explanation: "A candidate must achieve a minimum score of 75 on a 99-point scale for each of the four sections to successfully pass the Uniform CPA Examination."
		},
		{
			id: 8,
			question: "In most U.S. jurisdictions, besides passing the exam, what is a crucial requirement for CPA licensure?",
			options: [
				"Completing a Master's degree in Finance.",
				"Passing a specialized ethics exam developed by the state board.",
				"A specified period of work experience, often supervised by a licensed CPA.",
				"Achieving a minimum GPA in all undergraduate accounting courses."
			],
			correctAnswer: 2,
			explanation: "Most state boards require candidates to gain practical work experience (typically 1-2 years), which must be verified by a licensed CPA, to bridge academic knowledge with real-world application."
		},
		{
			id: 9,
			question: "Which CPA Exam section has historically covered topics like corporate governance, economic concepts, and financial management ratios?",
			options: [
				"Regulation (REG)",
				"Auditing and Attestation (AUD)",
				"Business Environment and Concepts (BEC)",
				"Financial Accounting and Reporting (FAR)"
			],
			correctAnswer: 2,
			explanation: "The Business Environment and Concepts (BEC) section is designed to test a candidate's understanding of the broader financial and operational environment in which a business operates."
		},
		{
			id: 10,
			question: "Which organization is responsible for issuing Generally Accepted Accounting Principles (GAAP) in the United States?",
			options: [
				"Public Company Accounting Oversight Board (PCAOB)",
				"Governmental Accounting Standards Board (GASB)",
				"Securities and Exchange Commission (SEC)",
				"Financial Accounting Standards Board (FASB)"
			],
			correctAnswer: 3,
			explanation: "The Financial Accounting Standards Board (FASB) is the non-governmental organization recognized by the SEC as the authority for setting accounting standards for U.S. public and private companies (GAAP)."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/accounting#cpa-basic-practice"><mark className="highlight-tertiary-padding-4-8">CPA</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">CPA Basic Practice</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental CPA concepts</p>
				</header>
	
				{/* This is the content of CPA Quiz. */}
	
				<EnPracticeQuiz questions={questions} />
	
				<div className="viewcounter">
	
					<div className="post-date no-margin">
						<span>December 09, 2025 · by 💎Gem ·</span>
					</div>
	
				</div>
	
			</article>
	
		</main>
	);
};