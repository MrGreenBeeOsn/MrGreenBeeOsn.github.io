
/* AccountingQuizClaude.css */

/* Container và Layout */
.quiz-container {
  min-height: 100vh;
  background: linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.quiz-wrapper {
  max-width: 48rem;
  width: 100%;
  margin: 0 auto;
}

/* Quiz Card */
.quiz-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  overflow: hidden;
}

/* Header */
.quiz-header {
  background: linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%);
  padding: 1.5rem;
}

.quiz-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 0.5rem;
}

.quiz-subtitle {
  color: #c7d2fe;
  text-align: center;
}

/* Body */
.quiz-body {
  padding: 1.5rem;
}

/* Info Section */
.quiz-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.question-counter {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4b5563;
}

.score-counter {
  font-size: 0.875rem;
  font-weight: 600;
  color: #4f46e5;
}

/* Progress Bar */
.progress-bar-container {
  height: 0.5rem;
  background-color: #e5e7eb;
  border-radius: 9999px;
  overflow: hidden;
  margin-bottom: 1rem;
}

.progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #6366f1 0%, #7c3aed 100%);
  transition: width 0.3s ease;
}

/* Question Section */
.question-section {
  margin-bottom: 2rem;
}

.question-text {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 1.5rem;
}

/* Options */
.options-container {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.option-button {
  width: 100%;
  text-align: left;
  padding: 1rem;
  border-radius: 0.5rem;
  border: 2px solid #d1d5db;
  background: white;
  transition: all 0.2s ease;
  cursor: pointer;
}

.option-button:hover:not(:disabled) {
  border-color: #818cf8;
  background-color: #eef2ff;
}

.option-selected {
  border-color: #4f46e5 !important;
  background-color: #eef2ff !important;
  color: #312e81 !important;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.option-correct {
  border-color: #10b981 !important;
  background-color: #ecfdf5 !important;
  color: #064e3b !important;
}

.option-incorrect {
  border-color: #ef4444 !important;
  background-color: #fef2f2 !important;
  color: #7f1d1d !important;
}

.option-disabled {
  border-color: #d1d5db !important;
  background-color: #f9fafb !important;
  color: #6b7280 !important;
}

.option-content {
  display: flex;
  align-items: center;
}

.option-letter {
  flex-shrink: 0;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  background-color: white;
  border: 2px solid currentColor;
  margin-right: 0.75rem;
  font-weight: 600;
}

.option-text {
  font-weight: 500;
  flex: 1;
}

.icon-check,
.icon-cross {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
}

.icon-check {
  color: #059669;
}

.icon-cross {
  color: #dc2626;
}

/* Explanation */
.explanation-box {
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: #eff6ff;
  border-left: 4px solid #3b82f6;
  border-radius: 0 0.5rem 0.5rem 0;
}

.explanation-title {
  font-weight: 600;
  color: #1e3a8a;
  margin-bottom: 0.5rem;
}

.explanation-text {
  color: #1e40af;
}

/* Buttons */
.button-container {
  display: flex;
  justify-content: flex-end;
  gap: 0.75rem;
}

.action-button {
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
  background-color: #4f46e5;
  color: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.action-button:hover:not(.button-disabled) {
  background-color: #4338ca;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}

.button-disabled {
  background-color: #d1d5db !important;
  color: #6b7280 !important;
  cursor: not-allowed !important;
  box-shadow: none !important;
}

/* Completion Screen */
.completion-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  max-width: 42rem;
  width: 100%;
}

.completion-content {
  text-align: center;
}

.completion-header {
  margin-bottom: 1.5rem;
}

.completion-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 6rem;
  height: 6rem;
  background-color: #e0e7ff;
  border-radius: 9999px;
  margin-bottom: 1rem;
}

.check-icon {
  width: 3rem;
  height: 3rem;
  color: #4f46e5;
}

.completion-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 0.5rem;
}

.completion-subtitle {
  color: #6b7280;
  margin-bottom: 1.5rem;
}

/* Score Display */
.score-display {
  background: linear-gradient(135deg, #6366f1 0%, #7c3aed 100%);
  border-radius: 0.75rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.score-content {
  color: white;
}

.score-label {
  font-size: 1.125rem;
  margin-bottom: 0.5rem;
}

.score-number {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.score-percentage {
  font-size: 1.125rem;
}

/* Feedback Messages */
.feedback-message {
  margin-bottom: 1.5rem;
}

.feedback {
  font-weight: 600;
  font-size: 1.125rem;
}

.feedback.perfect {
  color: #059669;
}

.feedback.great {
  color: #2563eb;
}

.feedback.good {
  color: #ca8a04;
}

.feedback.study {
  color: #ea580c;
}

/* Restart Button */
.restart-button {
  background-color: #4f46e5;
  color: white;
  font-weight: 600;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.restart-button:hover {
  background-color: #4338ca;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
}