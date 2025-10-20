const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    answer: 2
  },
  {
    question: "Which language runs in a browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: 3
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Text Markup Language", "Home Tool Markup Language", "High Text Machine Language", "None of these"],
    answer: 0
  },
  {
    question: "What year was JavaScript launched?",
    options: ["1996", "1995", "1994", "None of these"],
    answer: 1
  },
  {
    question: "What does CSS stand for?",
    options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style System", "Colorful Style Sheets"],
    answer: 0
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((btn, index) => {
    btn.innerText = q.options[index];
    btn.disabled = false;
    btn.style.backgroundColor = "#eee";
  });

  document.getElementById("progressText").innerText = `Question ${currentQuestion + 1}/${questions.length}`;
  document.getElementById("progressFill").style.width = `${((currentQuestion)/questions.length)*100}%`;
}

function selectAnswer(selectedIndex) {
  const correctIndex = questions[currentQuestion].answer;
  const optionButtons = document.querySelectorAll(".option");

  if(selectedIndex === correctIndex){
    score++;
    optionButtons[selectedIndex].style.backgroundColor = "#4caf50";
  } else {
    optionButtons[selectedIndex].style.backgroundColor = "#f44336";
    optionButtons[correctIndex].style.backgroundColor = "#4caf50";
  }

  optionButtons.forEach(btn => btn.disabled = true);
}

function nextQuestion() {
  currentQuestion++;
  if(currentQuestion < questions.length){
    loadQuestion();
  } else {
    showResults();
  }
}

function showResults() {
  document.querySelector(".quiz-container").innerHTML = `
    <h2>Quiz Completed!</h2>
    <p>Your Score: ${score}/${questions.length}</p>
    <button onclick="location.reload()">Try Again</button>
  `;
}

window.onload = loadQuestion;
