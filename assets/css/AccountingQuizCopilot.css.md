/* AccountingQuizCopilot.css */

:root{
  --bg:#f7f9fc;
  --card:#ffffff;
  --accent:#0b6efd;
  --muted:#6b7280;
  --success:#0f9d58;
  --danger:#d93025;
  --border: #e6e9ef;
  --radius:8px;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
}

.quiz-container{
  max-width:900px;
  margin:28px auto;
  background:var(--bg);
  padding:20px;
}

.quiz-title{
  margin:0 0 6px 0;
  font-size:1.6rem;
  color:#0f1724;
}

.quiz-subtitle{
  margin:0 0 18px 0;
  color:var(--muted);
  font-size:0.95rem;
}

.question-list{
  list-style: none;
  padding:0;
  margin:0;
  display:flex;
  flex-direction:column;
  gap:14px;
}

.question-item{
  background:var(--card);
  border:1px solid var(--border);
  padding:14px;
  border-radius:var(--radius);
  box-shadow: 0 1px 2px rgba(15,23,42,0.03);
}

.prompt{
  margin-bottom:10px;
  color:#0b1220;
}

.options{
  display:flex;
  flex-wrap:wrap;
  gap:8px;
}

.option-btn{
  border:1px solid var(--border);
  background:transparent;
  padding:8px 12px;
  border-radius:6px;
  cursor:pointer;
  transition:all .12s ease;
  min-width:180px;
  text-align:left;
  display:inline-flex;
  gap:8px;
  align-items:center;
}

.option-btn:hover{
  transform:translateY(-2px);
  box-shadow:0 4px 10px rgba(11,110,253,0.06);
}

.option-btn.selected{
  border-color:var(--accent);
  background:linear-gradient(90deg, rgba(11,110,253,0.06), rgba(11,110,253,0.02));
}

.opt-id{
  font-weight:600;
  color:var(--accent);
  min-width:18px;
}

.explanation{
  margin-top:12px;
  padding:10px;
  border-radius:6px;
  border-left:4px solid var(--border);
  background:#fbfdff;
}

.explanation.correct{
  border-left-color:var(--success);
}

.explanation.incorrect{
  border-left-color:var(--danger);
}

.answer-line{
  font-weight:600;
  margin-bottom:6px;
}

.explain-text{
  color:var(--muted);
  font-size:0.95rem;
}
