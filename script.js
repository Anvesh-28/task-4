const questions = [
  {
    question: "What is the capital of India?",
    options: [
      "Delhi",
      "Mumbai",
      "Pune",
      "Ranchi"
    ],
    answer: 2
  },
  {
    question: "Who wrote the play 'Romeo and Juliet'?",
    options: [
      "William Shakespeare",
      "Charles Dickens",
      "Jane Austen",
      "Mark Twain"
    ],
    answer: 0
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: [
      "Earth",
      "Mars",
      "Jupiter",
      "Venus"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function showQuestion() {
  const quizDiv = document.getElementById('quiz');
  const q = questions[currentQuestion];
  let html = `<div class="question">${q.question}</div>
    <div class="options">`;
  q.options.forEach((opt, idx) => {
    html += `
      <label>
        <input type="radio" name="option" value="${idx}">
        ${opt}
      </label>
    `;
  });
  html += `</div>
    <button class="next-btn" onclick="nextQuestion()">Next</button>
    <div class="error" id="error"></div>
  `;
  quizDiv.innerHTML = html;
}

function nextQuestion() {
  const options = document.getElementsByName('option');
  let selected = -1;
  for (let i = 0; i < options.length; i++) {
    if (options[i].checked) {
      selected = parseInt(options[i].value);
      break;
    }
  }
  const errorDiv = document.getElementById('error');
  if (selected === -1) {
    errorDiv.textContent = "Please select an answer before proceeding.";
    return;
  }
  if (selected === questions[currentQuestion].answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = `
    <div class="score">Quiz Completed!<br>Your Score: ${score} / ${questions.length}</div>
  `;
}

window.onload = showQuestion;
