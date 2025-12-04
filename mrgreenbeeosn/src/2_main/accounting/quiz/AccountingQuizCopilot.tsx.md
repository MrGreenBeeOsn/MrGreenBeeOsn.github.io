// AccountingQuizCopilot.tsx

import React, { JSX, useState } from "react";

type Option = { id: string; text: string };
type Question = {
  id: number;
  prompt: string;
  options: Option[];
  correctId: string;
  explanation: string;
};

const QUESTIONS: Question[] = [
  {
    id: 1,
    prompt: "Which financial statement shows a company's financial position at a specific point in time?",
    options: [
      { id: "a", text: "Income Statement" },
      { id: "b", text: "Statement of Cash Flows" },
      { id: "c", text: "Balance Sheet" },
      { id: "d", text: "Statement of Retained Earnings" }
    ],
    correctId: "c",
    explanation: "The **Balance Sheet** reports assets, liabilities, and equity at a specific date, showing financial position."
  },
  {
    id: 2,
    prompt: "What is the basic accounting equation?",
    options: [
      { id: "a", text: "Assets = Liabilities + Equity" },
      { id: "b", text: "Revenue - Expenses = Net Income" },
      { id: "c", text: "Assets + Liabilities = Equity" },
      { id: "d", text: "Cash = Assets - Liabilities" }
    ],
    correctId: "a",
    explanation: "The fundamental equation is **Assets = Liabilities + Equity**, which underpins double-entry accounting."
  },
  {
    id: 3,
    prompt: "Under accrual accounting, when is revenue recognized?",
    options: [
      { id: "a", text: "When cash is received" },
      { id: "b", text: "When the invoice is paid by the customer" },
      { id: "c", text: "When earned, regardless of cash receipt" },
      { id: "d", text: "At the end of the fiscal year only" }
    ],
    correctId: "c",
    explanation: "Accrual accounting recognizes revenue **when it is earned**, not necessarily when cash is received."
  },
  {
    id: 4,
    prompt: "Which account type normally has a credit balance?",
    options: [
      { id: "a", text: "Assets" },
      { id: "b", text: "Expenses" },
      { id: "c", text: "Liabilities" },
      { id: "d", text: "Dividends" }
    ],
    correctId: "c",
    explanation: "**Liabilities** normally carry credit balances; assets and expenses normally carry debit balances."
  },
  {
    id: 5,
    prompt: "Which inventory costing method assumes the earliest goods purchased are sold first?",
    options: [
      { id: "a", text: "LIFO" },
      { id: "b", text: "FIFO" },
      { id: "c", text: "Weighted Average" },
      { id: "d", text: "Specific Identification" }
    ],
    correctId: "b",
    explanation: "**FIFO (First-In, First-Out)** assumes oldest inventory is sold first, affecting cost of goods sold and ending inventory."
  },
  {
    id: 6,
    prompt: "Depreciation expense for a fixed asset allocates cost over:",
    options: [
      { id: "a", text: "The asset's useful life" },
      { id: "b", text: "One accounting period only" },
      { id: "c", text: "The asset's salvage value only" },
      { id: "d", text: "The asset's purchase price plus taxes" }
    ],
    correctId: "a",
    explanation: "Depreciation spreads an asset's cost over its **useful life**, reflecting consumption of economic benefits."
  },
  {
    id: 7,
    prompt: "Which document lists all ledger account balances to check that debits equal credits?",
    options: [
      { id: "a", text: "Trial Balance" },
      { id: "b", text: "General Journal" },
      { id: "c", text: "Cash Flow Statement" },
      { id: "d", text: "Purchase Order" }
    ],
    correctId: "a",
    explanation: "A **Trial Balance** compiles ending balances of all accounts to verify total debits equal total credits."
  },
  {
    id: 8,
    prompt: "A contra asset account is used to:",
    options: [
      { id: "a", text: "Increase an asset's book value" },
      { id: "b", text: "Record liabilities separately" },
      { id: "c", text: "Offset an asset's balance" },
      { id: "d", text: "Record owner's withdrawals" }
    ],
    correctId: "c",
    explanation: "A **contra asset** (e.g., Accumulated Depreciation) offsets the related asset's carrying amount on the balance sheet."
  },
  {
    id: 9,
    prompt: "Which ratio measures short-term liquidity by comparing current assets to current liabilities?",
    options: [
      { id: "a", text: "Debt to Equity Ratio" },
      { id: "b", text: "Current Ratio" },
      { id: "c", text: "Gross Margin Ratio" },
      { id: "d", text: "Return on Assets" }
    ],
    correctId: "b",
    explanation: "The **Current Ratio** = Current Assets / Current Liabilities; it assesses the company's ability to meet short-term obligations."
  },
  {
    id: 10,
    prompt: "Which entry records the payment of a previously recorded accounts payable?",
    options: [
      { id: "a", text: "Debit Accounts Payable; Credit Cash" },
      { id: "b", text: "Debit Cash; Credit Accounts Payable" },
      { id: "c", text: "Debit Expense; Credit Revenue" },
      { id: "d", text: "Debit Accounts Receivable; Credit Cash" }
    ],
    correctId: "a",
    explanation: "Paying a payable reduces the liability: **Debit Accounts Payable** and reduce cash with **Credit Cash**."
  }
];

export default function AccountingBasicPracticeEnglish(): JSX.Element {
  const [answers, setAnswers] = useState<Record<number, string | null>>({});
  const [showExplanationFor, setShowExplanationFor] = useState<number | null>(null);

  const handleSelect = (qId: number, optionId: string) => {
    setAnswers(prev => ({ ...prev, [qId]: optionId }));
    setShowExplanationFor(qId);
  };

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Accounting Basic Practice (English)</h1>
      <p className="quiz-subtitle">Interactive quiz: choose an answer to reveal the correct choice and explanation.</p>

      <ol className="question-list">
        {QUESTIONS.map(q => {
          const selected = answers[q.id] ?? null;
          const isCorrect = selected === q.correctId;
          return (
            <li key={q.id} className="question-item">
              <div className="prompt"><strong>Q{q.id}.</strong> {q.prompt}</div>
              <div className="options">
                {q.options.map(opt => (
                  <button
                    key={opt.id}
                    className={`option-btn ${selected === opt.id ? "selected" : ""}`}
                    onClick={() => handleSelect(q.id, opt.id)}
                    aria-pressed={selected === opt.id}
                  >
                    <span className="opt-id">{opt.id}.</span> {opt.text}
                  </button>
                ))}
              </div>

              {showExplanationFor === q.id && (
                <div className={`explanation ${isCorrect ? "correct" : "incorrect"}`}>
                  <div className="answer-line">
                    <strong>Correct answer:</strong> {q.correctId}. {q.options.find(o => o.id === q.correctId)?.text}
                  </div>
                  <div className="explain-text">{q.explanation}</div>
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
