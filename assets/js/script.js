// async function fetchHTMLQuestions() {
//   const response = await fetch('assets/json/html.json');
//   const data = await response.json();
//   return data;
// }


function checkLocalStorageTheme(){
  const theme = localStorage.getItem('theme');
  if(theme){
    if(theme === 'darkMode'){
      document.body.classList = '';
      modeSwitchBtn.setAttribute('checked', 'sude');
    }
  } else{
    if(window.matchMedia(('(prefers-color-scheme : dark)')).matches){
      document.body.classList = '';
      modeSwitchBtn.setAttribute('checked', 'sude');
    }
  }
}

checkLocalStorageTheme();

function changeMode(){
  document.body.classList.toggle('light-mode');
  if(document.body.classList.contains('light-mode')){
    localStorage.setItem('theme', 'lightMode');
  } else{
    localStorage.setItem('theme', 'darkMode');
  }
  handleInput();
}


let selectionButtons = document.querySelectorAll('.selection-button');
const choices = document.querySelectorAll('.choice');


function selectSelectionBtn(){
  for (const selectionButton of selectionButtons) {
    selectionButton.addEventListener('click', selectQuizTitle);
  }
}

function selectQuizTitle(){
  document.body.classList.add('questions');
  const quizTitle = document.querySelector('.quiz-title');
  quizTitle.innerHTML = this.innerHTML;
  writeQuestions();
}

let i = 0;
let correctAnwers = 0;
let selectedNumbers = [];
let randomNumber = Math.floor(Math.random() * 10);
function pickRandomNumber(){
  let randomNumber = Math.floor(Math.random() * 10);
  selectedNumbers.push(randomNumber);
}

pickRandomNumber();


function writeQuestions(){
  // const data = await fetchHTMLQuestions();
  const quizTitle = document.querySelector('.quiz-title');
  let quizContent = quizTitle.innerText;
  questionCounter.innerText = i + 1;
  questionCounterInput.value = i;
  if(quizContent === 'HTML'){
    quizContent = htmlQuestions;
  } else if(quizContent === 'CSS'){
    quizContent = cssQuestions;
  } else if(quizContent === 'Javascript'){
    quizContent = jsQuestions;
  } else if(quizContent === 'Accessibility'){
    quizContent = accessibilityQuestions;
  }
  // if(selectedNumbers.includes(randomNumber)){
  //   pickRandomNumber();
  // } 
  questionContent.innerText = quizContent[i].questionText;
  choiceA.innerHTML = `<span class="choice">A</span><p class="answer">${quizContent[i].A}</p>`;
  choiceB.innerHTML = `<span class="choice">B</span><p class="answer">${quizContent[i].B}</p>`;
  choiceC.innerHTML = `<span class="choice">C</span><p class="answer">${quizContent[i].C}</p>`;
  choiceD.innerHTML = `<span class="choice">D</span><p class="answer">${quizContent[i].D}</p>`;


  handleInput();
}

function handleInput(){
  if(document.body.classList.contains('light-mode')){
    questionCounterInput.style.background = `linear-gradient(to right, var(--purple) ${i}0%, var(--white) ${i}0%)`
  } else{
    questionCounterInput.style.background = `linear-gradient(to right, var(--purple) ${i}0%, var(--bg-box) ${i}0%)`
  }
}

const answers = document.querySelectorAll('.answer-box');

function clickAnswer(){
  for (const answer of answers) {
    answer.classList = 'answer-box';
    answer.addEventListener('click', selectAnswer);
  }
}

let selectedAnswers = [];

function selectAnswer(){
  for (const answer of answers) {
    if(answer.classList.contains('selectedAnswerBtn')){
      answer.classList.remove('selectedAnswerBtn');
      selectedAnswers = [];
    }
  }
  selectedAnswers.push(this);
  this.classList.add('selectedAnswerBtn');
  answerAlert.style.display = 'none';
}

function showCorrectAnswer(){
  if(selectedAnswers.length === 0){
    answerAlert.style.display = 'flex';
  } else {
    for (const answer of answers) {
      answer.classList.add('not-selected-button');
    }
    const selectedAnswer = document.querySelector('.selectedAnswerBtn');
    const quizTitle = document.querySelector('.quiz-title');
    let quizContent = quizTitle.innerText;
    if(quizContent === 'HTML'){
      quizContent = htmlQuestions;
    } else if(quizContent === 'CSS'){
      quizContent = cssQuestions;
    } else if(quizContent === 'Javascript'){
      quizContent = jsQuestions;
    } else if(quizContent === 'Accessibility'){
      quizContent = accessibilityQuestions;
    }
    if(quizContent[i].correctAnswer == selectedAnswer.dataset.answer){
      selectedAnswer.classList.add('correctAnswerBtn', 'correct-answer');
      correctAnwers++;
    } else{
      selectedAnswer.classList.add('wrongAnswerBtn');
      for (const answer of answers) {
        if(answer.dataset.answer == quizContent[i].correctAnswer){
          answer.classList.add('correct-answer');
        }
      }
    }
    if(i === 9){
      btn.innerText = 'Complete Quiz';
    } else{
      btn.innerText = 'Next Question';
    }
  }
}

function showNextQuestion(){
  i++;
  writeQuestions();
  selectedAnswers = [];

  btn.innerText = 'Submit Answer';
  for (const answer of answers) {
    answer.classList = 'answer-box';
  }
}

function showResults(){
  document.body.classList.remove('questions');
  document.body.classList.add('quiz-completed');
  score.innerText = correctAnwers;
  playAgainBtn.addEventListener('click', playAgain);
  const quizContent = document.querySelector('.quiz-content');
  const quizTitle = document.querySelector('.quiz-title');
  quizContent.innerHTML = quizTitle.innerHTML;
}

function playAgain(){
  document.body.classList.remove('quiz-completed');
  selectedAnswers = [];
  i = 0;
  correctAnwers = 0;
  btn.innerText = 'Submit Answer';
  for (const answer of answers) {
    answer.classList = 'answer-box';
  }
}

selectSelectionBtn();
clickAnswer();
modeSwitchBtn.addEventListener('input', changeMode);
btn.addEventListener('click', () => {
  if(btn.innerText === 'Submit Answer'){
    showCorrectAnswer();
  } else if(btn.innerText === 'Next Question'){
    showNextQuestion();
  } else if(btn.innerText === 'Complete Quiz'){
    showResults();
  }
})
