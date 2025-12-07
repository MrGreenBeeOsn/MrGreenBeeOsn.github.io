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

export default function LegalMultipleChoice(): React.JSX.Element {
	// Danh sách câu hỏi về Law cơ bản
	const questions: Question[] = [
		{
			id: 1,
			question: "Which doctrine allows a federal law to preempt, or take precedence over, a conflicting state law?",
			options: [
				"Stare Decisis",
				"Judicial Review",
				"Supremacy Clause",
				"Full Faith and Credit"
			],
			correctAnswer: 2,
			explanation: "The Supremacy Clause of the US Constitution (Article VI, Clause 2) establishes that the Constitution and federal laws made pursuant to it are the supreme law of the land, overriding state laws that conflict with federal law."
		},
		{
			id: 2,
			question: "What is the legal term for a statement made out of court that is offered in court as evidence to prove the truth of the matter asserted?",
			options: [
				"Affidavit",
				"Subpoena",
				"Hearsay",
				"Contempt"
			],
			correctAnswer: 2,
			explanation: "Hearsay is generally inadmissible in court because the person who originally made the statement is not present to be cross-examined, which raises concerns about the reliability of the evidence."
		},
		{
			id: 3,
			question: "To prove negligence in a tort case, which of the following elements must a plaintiff generally establish?",
			options: [
				"Breach of contract",
				"Reckless endangerment",
				"Absolute certainty of harm",
				"Duty, Breach, Causation, and Damages"
			],
			correctAnswer: 3,
			explanation: "The four standard elements required to prove negligence are: the defendant owed the plaintiff a Duty of care, the defendant Breached that duty, the breach was the Causation (or proximate cause) of the injury, and the plaintiff suffered actual Damages (or harm)."
		},
		{
			id: 4,
			question: "What type of business structure shields the owners' personal assets from the company's debts and liabilities?",
			options: [
				"Partnership",
				"Sole Proprietorship",
				"Limited Liability Company (LLC)",
				"General Corporation"
			],
			correctAnswer: 2,
			explanation: "An LLC or Corporation provides limited liability, meaning the personal assets of the owners (members or shareholders) are generally protected from the business's legal claims and debts."
		},
		{
			id: 5,
			question: "In the context of a criminal trial, what is the term for the process of questioning prospective jurors to determine their suitability to serve on the jury?",
			options: [
				"Discovery",
				"Cross-examination",
				"Voir Dire",
				"Grand Jury proceeding"
			],
			correctAnswer: 2,
			explanation: "Voir Dire (French for \"to speak the truth\") is the process where the judge and the attorneys question potential jurors to determine if they are biased or have any conflicts of interest that would prevent them from being fair and impartial."
		},
		{
			id: 6,
			question: "Which of the following is required for a person to be held criminally responsible for a serious crime (a felony)?",
			options: [
				"Mens Rea only",
				"Causation only",
				"Actus Reus and Mens Rea",
				"Mens Rea or Actus Reus"
			],
			correctAnswer: 2,
			explanation: "Most serious crimes require both the Actus Reus (the guilty act, or the commission of a prohibited act) and the Mens Rea (the guilty mind, or the required criminal intent) to establish criminal liability."
		},
		{
			id: 7,
			question: "A court's ruling that is based on prior decisions in similar cases is applying the principle of:",
			options: [
				"Habeas Corpus",
				"Certiorari",
				"Stare Decisis",
				"Judicial restraint"
			],
			correctAnswer: 2,
			explanation: "Stare Decisis (Latin for \"to stand by things decided\") is the doctrine that courts will adhere to precedent, meaning they will follow principles laid down in earlier judicial decisions when deciding subsequent cases involving similar facts and legal issues."
		},
		{
			id: 8,
			question: "Which legal remedy requires a party to a contract to perform the exact act they promised, instead of paying money damages?",
			options: [
				"Rescission",
				"Declaratory Judgment",
				"Specific Performance",
				"Punitive Damages"
			],
			correctAnswer: 2,
			explanation: "Specific Performance is an equitable remedy available in contract law, typically ordered when monetary damages are inadequate (such as in contracts for the sale of unique land or art), compelling the breaching party to fulfill the terms of the agreement."
		},
		{
			id: 9,
			question: "What is the term for a legal right to use another person's property for a specific purpose (e.g., walking across their land to get to a public road)?",
			options: [
				"Adverse Possession",
				"Covenant",
				"Easement",
				"Lien"
			],
			correctAnswer: 2,
			explanation: "An Easement is a non-possessory right to use and/or enter onto the real property of another without possessing it. The owner of the property must allow the holder of the easement to use the property as agreed upon."
		},
		{
			id: 10,
			question: "What is the primary purpose of the Discovery phase in a civil lawsuit?",
			options: [
				"To present evidence and closing arguments to the jury",
				"To determine the court's jurisdiction over the parties",
				"To exchange relevant information and evidence between the parties",
				"To negotiate a final settlement agreement"
			],
			correctAnswer: 2,
			explanation: "Discovery is the pre-trial phase where opposing parties can obtain evidence from each other, ensuring that all parties are fully informed of the facts of the case before the trial begins, thereby promoting fair settlements or trials."
		}
	];

	return (

		<main className="image image2">
		
			<article>
				
				<h4><HashLink smooth to="/law#law-basic-practice"><mark className="highlight-tertiary-padding-4-8">Quiz</mark></HashLink></h4>
	
				<header className="quiz-header">
					<h1 className="margin-y-50 text-center">Law Basic Practice</h1>
					<p className="subtitle text-center">Test your knowledge of fundamental law concepts</p>
				</header>
	
				{/* This is the content of Law Quiz. */}
	
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