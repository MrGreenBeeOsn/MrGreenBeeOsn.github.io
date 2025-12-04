// AccountingQuizGEM.tsx

import React, { useState, useMemo } from 'react';

// Giả định rằng bạn import dữ liệu từ tệp JSON
import QuizData from './QuizData.json';

// Định nghĩa các Interface (Loại dữ liệu)
interface AnswerOption {
  text: string;
  rationale: string;
  isCorrect: boolean;
}

interface Question {
  questionNumber: number;
  question: string;
  imageUrl: string | null;
  answerOptions: AnswerOption[];
  hint: string;
}

interface UserAnswer {
  questionNumber: number;
  selectedText: string;
  isCorrect: boolean | null;
  showRationale: boolean;
}

const AccountingBasicPractice: React.FC = () => {
  const questions: Question[] = useMemo(() => QuizData as Question[], []);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswer[]>([]);
  const [quizFinished, setQuizFinished] = useState(false);

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerClick = (option: AnswerOption) => {
    // Ngăn người dùng chọn lại nếu câu hỏi đã được trả lời
    if (userAnswers.some(a => a.questionNumber === currentQuestion.questionNumber && a.showRationale)) {
      return;
    }

    const isCorrect = option.isCorrect;
    const newAnswer: UserAnswer = {
      questionNumber: currentQuestion.questionNumber,
      selectedText: option.text,
      isCorrect: isCorrect,
      showRationale: true, // Hiển thị giải thích ngay sau khi trả lời
    };

    // Cập nhật câu trả lời của người dùng
    setUserAnswers(prevAnswers => {
      const existingAnswerIndex = prevAnswers.findIndex(a => a.questionNumber === newAnswer.questionNumber);
      if (existingAnswerIndex !== -1) {
        // Cập nhật câu trả lời đã có
        return prevAnswers.map((item, index) => index === existingAnswerIndex ? newAnswer : item);
      }
      // Thêm câu trả lời mới
      return [...prevAnswers, newAnswer];
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizFinished(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const renderQuizResult = () => {
    const correctCount = userAnswers.filter(a => a.isCorrect).length;
    const scorePercentage = (correctCount / totalQuestions) * 100;

    return (
      <div className="quiz-result">
        <h2>Quiz Complete! 🎉</h2>
        <p>You answered **{correctCount}** out of **{totalQuestions}** questions correctly.</p>
        <p>Your Score: **{scorePercentage.toFixed(0)}%**</p>
        <button onClick={() => window.location.reload()} className="quiz-button restart-button">
          Review or Retake Quiz
        </button>
      </div>
    );
  };

  if (quizFinished) {
    return renderQuizResult();
  }

  const userAnswer = userAnswers.find(a => a.questionNumber === currentQuestion.questionNumber);
  const isAnswered = userAnswer && userAnswer.showRationale;

  return (
    <div className="accounting-quiz-container">
      <h1 className="quiz-title">Accounting Basic Practice (English)</h1>
      
      <div className="quiz-progress">
        Question **{currentQuestionIndex + 1}** / **{totalQuestions}**
      </div>

      <div className="quiz-card">
        <p className="question-text">
          {currentQuestion.question}
        </p>

        <div className="answer-options-grid">
          {currentQuestion.answerOptions.map((option, index) => {
            // Xác định class cho từng tùy chọn
            let optionClass = 'answer-option';
            if (isAnswered) {
              if (option.isCorrect) {
                optionClass += ' correct-answer';
              } else if (userAnswer.selectedText === option.text && !option.isCorrect) {
                optionClass += ' incorrect-answer';
              }
            }
            
            // Chuyển đổi chỉ số thành chữ cái (A, B, C, D)
            const optionLetter = String.fromCharCode(65 + index); // 65 là mã ASCII của 'A'

            return (
              <button 
                key={index}
                className={optionClass}
                onClick={() => handleAnswerClick(option)}
                disabled={isAnswered}
              >
                <span className="option-letter">{optionLetter}.</span>
                <span className="option-text">{option.text}</span>
              </button>
            );
          })}
        </div>

        {isAnswered && (
          <div className="rationale-section">
            <h4 className={`rationale-title ${userAnswer.isCorrect ? 'correct' : 'incorrect'}`}>
              {userAnswer.isCorrect ? '✅ Correct Answer' : '❌ Incorrect Answer'}
            </h4>
            
            <p className="rationale-text">
              {currentQuestion.answerOptions.find(o => o.isCorrect)?.rationale}
            </p>
          </div>
        )}

        <div className="navigation-controls">
          <button 
            onClick={goToPreviousQuestion} 
            disabled={currentQuestionIndex === 0} 
            className="quiz-button"
          >
            &laquo; Previous
          </button>
          
          <button 
            onClick={goToNextQuestion} 
            disabled={!isAnswered && currentQuestionIndex < totalQuestions - 1} 
            className="quiz-button next-button"
          >
            {currentQuestionIndex === totalQuestions - 1 ? 'Finish Quiz' : 'Next Question &raquo;'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountingBasicPractice;