// AccountingQuizClaude.tsx

import React, { useState } from 'react';

const AccountingQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const questions = [
    {
      question: "What is the fundamental accounting equation?",
      options: [
        "Assets = Liabilities + Revenue",
        "Assets = Liabilities + Owner's Equity",
        "Assets = Revenue - Expenses",
        "Assets = Liabilities - Owner's Equity"
      ],
      correct: 1,
      explanation: "The fundamental accounting equation is Assets = Liabilities + Owner's Equity. This equation must always balance and forms the basis of double-entry bookkeeping."
    },
    {
      question: "Which of the following is a current asset?",
      options: [
        "Building",
        "Patent",
        "Accounts Receivable",
        "Equipment"
      ],
      correct: 2,
      explanation: "Accounts Receivable is a current asset because it is expected to be converted to cash within one year. Buildings, patents, and equipment are long-term assets."
    },
    {
      question: "What does the term 'credit' mean in double-entry bookkeeping?",
      options: [
        "An increase in assets",
        "A decrease in liabilities",
        "An entry on the right side of an account",
        "An entry on the left side of an account"
      ],
      correct: 2,
      explanation: "In double-entry bookkeeping, a credit is an entry on the right side of an account. It increases liabilities, equity, and revenue accounts, but decreases asset and expense accounts."
    },
    {
      question: "Which financial statement shows a company's financial position at a specific point in time?",
      options: [
        "Income Statement",
        "Cash Flow Statement",
        "Balance Sheet",
        "Statement of Retained Earnings"
      ],
      correct: 2,
      explanation: "The Balance Sheet shows a company's financial position at a specific point in time by listing assets, liabilities, and equity. Other statements cover periods of time."
    },
    {
      question: "What is depreciation?",
      options: [
        "The increase in value of an asset over time",
        "The systematic allocation of an asset's cost over its useful life",
        "The sale of an asset below market value",
        "The total cost of purchasing an asset"
      ],
      correct: 1,
      explanation: "Depreciation is the systematic allocation of a tangible asset's cost over its useful life. It represents the reduction in value due to wear, tear, and obsolescence."
    },
    {
      question: "What is the accounting principle that requires expenses to be recorded in the same period as the related revenue?",
      options: [
        "Cost Principle",
        "Revenue Recognition Principle",
        "Matching Principle",
        "Full Disclosure Principle"
      ],
      correct: 2,
      explanation: "The Matching Principle requires that expenses be recorded in the same accounting period as the revenues they helped generate, ensuring accurate profit measurement."
    },
    {
      question: "Which account is increased with a debit?",
      options: [
        "Revenue",
        "Liabilities",
        "Owner's Equity",
        "Expenses"
      ],
      correct: 3,
      explanation: "Expense accounts are increased with debits. Assets and expenses increase with debits, while liabilities, equity, and revenue increase with credits."
    },
    {
      question: "What is working capital?",
      options: [
        "Total assets minus total liabilities",
        "Current assets minus current liabilities",
        "Fixed assets minus long-term debt",
        "Revenue minus expenses"
      ],
      correct: 1,
      explanation: "Working capital is calculated as current assets minus current liabilities. It measures a company's short-term financial health and operational efficiency."
    },
    {
      question: "What does GAAP stand for?",
      options: [
        "General Accounting and Auditing Principles",
        "Generally Accepted Accounting Principles",
        "Global Accounting Assessment Procedures",
        "General Assets and Property"
      ],
      correct: 1,
      explanation: "GAAP stands for Generally Accepted Accounting Principles. These are the common set of accounting standards and procedures used in financial reporting."
    },
    {
      question: "Which of the following is an example of an accrued expense?",
      options: [
        "Prepaid rent",
        "Unearned revenue",
        "Wages payable",
        "Cash purchases"
      ],
      correct: 2,
      explanation: "Wages payable is an accrued expense - an expense that has been incurred but not yet paid. Accrued expenses represent obligations to pay in the future for services already received."
    }
  ];

  const handleAnswerSelect = (index) => {
    if (!showExplanation) {
      setSelectedAnswer(index);
    }
  };

  const handleSubmit = () => {
    if (selectedAnswer !== null) {
      setShowExplanation(true);
      if (selectedAnswer === questions[currentQuestion].correct) {
        setScore(score + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setQuizCompleted(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setQuizCompleted(false);
  };

  if (quizCompleted) {
    return (
      <div className="quiz-container">
        <div className="completion-card">
          <div className="completion-content">
            <div className="completion-header">
              <div className="completion-icon">
                <svg className="check-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="completion-title">Quiz Completed!</h2>
              <p className="completion-subtitle">Here's how you performed:</p>
            </div>
            
            <div className="score-display">
              <div className="score-content">
                <p className="score-label">Your Score</p>
                <p className="score-number">{score}/{questions.length}</p>
                <p className="score-percentage">{Math.round((score / questions.length) * 100)}%</p>
              </div>
            </div>

            <div className="feedback-message">
              {score === questions.length && (
                <p className="feedback perfect">Perfect score! Excellent work! 🎉</p>
              )}
              {score >= questions.length * 0.7 && score < questions.length && (
                <p className="feedback great">Great job! Keep it up! 👏</p>
              )}
              {score >= questions.length * 0.5 && score < questions.length * 0.7 && (
                <p className="feedback good">Good effort! Practice makes perfect! 💪</p>
              )}
              {score < questions.length * 0.5 && (
                <p className="feedback study">Keep studying! You'll improve! 📚</p>
              )}
            </div>

            <button onClick={handleRestart} className="restart-button">
              Try Again
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <div className="quiz-wrapper">
        <div className="quiz-card">
          <div className="quiz-header">
            <h1 className="quiz-title">Accounting Basic Practice</h1>
            <p className="quiz-subtitle">Test your accounting knowledge</p>
          </div>

          <div className="quiz-body">
            <div className="quiz-info">
              <span className="question-counter">
                Question {currentQuestion + 1} of {questions.length}
              </span>
              <span className="score-counter">
                Score: {score}/{currentQuestion + (showExplanation ? 1 : 0)}
              </span>
            </div>

            <div className="progress-bar-container">
              <div 
                className="progress-bar"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="question-section">
              <h2 className="question-text">
                {questions[currentQuestion].question}
              </h2>

              <div className="options-container">
                {questions[currentQuestion].options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === questions[currentQuestion].correct;
                  const showResult = showExplanation;

                  let buttonClass = "option-button";
                  
                  if (showResult) {
                    if (isCorrect) {
                      buttonClass += " option-correct";
                    } else if (isSelected && !isCorrect) {
                      buttonClass += " option-incorrect";
                    } else {
                      buttonClass += " option-disabled";
                    }
                  } else if (isSelected) {
                    buttonClass += " option-selected";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(index)}
                      disabled={showExplanation}
                      className={buttonClass}
                    >
                      <div className="option-content">
                        <span className="option-letter">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span className="option-text">{option}</span>
                        {showResult && isCorrect && (
                          <svg className="icon-check" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        )}
                        {showResult && isSelected && !isCorrect && (
                          <svg className="icon-cross" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {showExplanation && (
              <div className="explanation-box">
                <h3 className="explanation-title">Explanation:</h3>
                <p className="explanation-text">{questions[currentQuestion].explanation}</p>
              </div>
            )}

            <div className="button-container">
              {!showExplanation ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className={`action-button ${selectedAnswer === null ? 'button-disabled' : ''}`}
                >
                  Submit Answer
                </button>
              ) : (
                <button onClick={handleNext} className="action-button">
                  {currentQuestion < questions.length - 1 ? 'Next Question' : 'See Results'}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AccountingQuiz;