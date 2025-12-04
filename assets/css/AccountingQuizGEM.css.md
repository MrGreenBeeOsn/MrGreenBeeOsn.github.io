/* AccountingQuizGEM.css */

/* -- Variables for theming (Optional but good practice) -- */
:root {
  --primary-color: #007bff; /* Blue */
  --correct-color: #28a745; /* Green */
  --incorrect-color: #dc3545; /* Red */
  --text-color: #333;
  --bg-color: #f8f9fa;
  --card-bg: #fff;
  --border-radius: 8px;
  --shadow-light: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* --- Container and General Styles --- */
.accounting-quiz-container {
  max-width: 700px;
  margin: 40px auto;
  padding: 20px;
  background-color: var(--bg-color);
  font-family: Arial, sans-serif;
  color: var(--text-color);
}

.quiz-title {
  text-align: center;
  color: var(--primary-color);
  margin-bottom: 30px;
  border-bottom: 3px solid var(--primary-color);
  padding-bottom: 10px;
}

/* --- Progress Bar --- */
.quiz-progress {
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #e9ecef;
  border-radius: var(--border-radius);
}

/* --- Quiz Card --- */
.quiz-card {
  background-color: var(--card-bg);
  padding: 30px;
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.question-text {
  font-size: 1.15em;
  font-weight: 600;
  margin-bottom: 25px;
  line-height: 1.5;
}

/* --- Answer Options --- */
.answer-options-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  margin-bottom: 20px;
}

.answer-option {
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 15px;
  text-align: left;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s, border-color 0.2s, transform 0.1s;
  font-size: 1em;
  color: var(--text-color);
}

.answer-option:hover:not(:disabled) {
  background-color: #e2e6ea;
  border-color: #b8c1ca;
}

.answer-option:disabled {
  cursor: default;
}

/* Option lettering */
.option-letter {
    font-weight: bold;
    margin-right: 10px;
    min-width: 20px; /* Ensure alignment */
}

/* State colors for selected answers */
.correct-answer {
  background-color: var(--correct-color);
  color: white;
  border-color: var(--correct-color);
  font-weight: bold;
}

.incorrect-answer {
  background-color: var(--incorrect-color);
  color: white;
  border-color: var(--incorrect-color);
}

/* Highlight correct answer even when another is chosen */
.incorrect-answer + .correct-answer,
.answer-options-grid .correct-answer:not(.incorrect-answer) {
  /* Ensure correct answer stands out if selected or not */
  background-color: var(--correct-color); 
  color: white;
  border-color: var(--correct-color);
}

/* --- Rationale Section --- */
.rationale-section {
  margin-top: 25px;
  padding: 15px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background-color: #f7f7f7;
}

.rationale-title {
  margin-top: 0;
  padding-bottom: 5px;
  border-bottom: 2px solid;
  font-size: 1.1em;
  font-weight: bold;
}

.rationale-title.correct {
  color: var(--correct-color);
  border-color: var(--correct-color);
}

.rationale-title.incorrect {
  color: var(--incorrect-color);
  border-color: var(--incorrect-color);
}

.rationale-text {
  margin-top: 10px;
  font-size: 0.95em;
  line-height: 1.4;
}

/* --- Navigation --- */
.navigation-controls {
  display: flex;
  justify-content: space-between;
  margin-top: 30px;
}

.quiz-button {
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1em;
  transition: background-color 0.2s;
  background-color: var(--primary-color);
  color: white;
}

.quiz-button:hover:not(:disabled) {
  background-color: #0056b3;
}

.quiz-button:disabled {
  background-color: #adb5bd;
  cursor: not-allowed;
}

.next-button {
  margin-left: auto; /* Push to the right */
}

/* --- Result Screen --- */
.quiz-result {
  text-align: center;
  padding: 40px;
  background-color: var(--card-bg);
  border-radius: var(--border-radius);
  box-shadow: var(--shadow-light);
}

.quiz-result h2 {
  color: var(--correct-color);
  margin-bottom: 20px;
}

.restart-button {
  margin-top: 20px;
  padding: 12px 25px;
  font-size: 1.1em;
  background-color: var(--correct-color);
}

.restart-button:hover {
    background-color: #1e7e34;
}