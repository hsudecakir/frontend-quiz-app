const htmlQuestions = [
  {
    questionText: 'What does HTML stand for?',
    A: 'Hyper Trainer Marking Language',
    B: 'Hyper Text Markup Language',
    C: 'Hyperlinks and Text Markup Language',
    D: 'Home Tool Markup Language',
    correctAnswer: "B"
  },
  {
    questionText: 'Which HTML element is used to define the largest heading?',
    A: 'head',
    B: 'h6',
    C: 'h1',
    D: 'header',
    correctAnswer: "C"
  },
  {
    questionText: 'What is the correct HTML element for inserting a line break?',
    A: 'break',
    B: 'br',
    C: 'lb',
    D: 'newline',
    correctAnswer: "B"
  },
  {
    questionText: 'Which HTML attribute is used to define inline styles?',
    A: 'font',
    B: 'style',
    C: 'class',
    D: 'styles',
    correctAnswer: "B"
  },
  {
    questionText: 'Which attribute in HTML is used to provide alternative text for an image?',
    A: 'src',
    B: 'title',
    C: 'alt',
    D: 'description',
    correctAnswer: "C"
  },
  {
    questionText: 'How can you create an ordered list in HTML?',
    A: 'ul',
    B: 'ol',
    C: 'list',
    D: 'li',
    correctAnswer: "B"
  },
  {
    questionText: 'Which attribute in HTML is used to open a link in a new browser tab?',
    A: 'src',
    B: 'href',
    C: 'target',
    D: 'new',
    correctAnswer: "C"
  },
  {
    questionText: 'In HTML, which attribute is used to uniquely identify an element?',
    A: 'name',
    B: 'class',
    C: 'ref',
    D: 'id',
    correctAnswer: "D"
  },
  {
    questionText: 'Which element is used to specify a footer for a document or section?',
    A: 'foot',
    B: 'bottom',
    C: 'footer',
    D: 'section',
    correctAnswer: "C"
  },
  {
    questionText: 'Which tag is used to create a table in HTML?',
    A: 'table',
    B: 'tab',
    C: 'tbody',
    D: 'tbl',
    correctAnswer: "A"
  }
];

const cssQuestions = [
  {
    questionText: 'What does CSS stand for?',
    A: 'Computer Style Sheets',
    B: 'Cascading Style Sheets',
    C: 'Colorful Style Sheets',
    D: 'Creative Style Sheets',
    correctAnswer: "B"
  },
  {
    questionText: 'Which CSS property is used to change the background color?',
    A: 'color',
    B: 'background-color',
    C: 'bgcolor',
    D: 'background',
    correctAnswer: "B"
  },
  {
    questionText: 'What is the correct syntax for selecting an element with the id "header"?',
    A: '.header',
    B: '#header',
    C: '*header',
    D: 'header',
    correctAnswer: "B"
  },
  {
    questionText: 'Which CSS property is used to change the text color of an element?',
    A: 'font-color',
    B: 'text-color',
    C: 'color',
    D: 'foreground-color',
    correctAnswer: "C"
  },
  {
    questionText: 'Which property is used to set the font of an element?',
    A: 'font-style',
    B: 'font-weight',
    C: 'font-family',
    D: 'text-font',
    correctAnswer: "C"
  },
  {
    questionText: 'How do you make each word in a text start with a capital letter?',
    A: 'text-transform: uppercase;',
    B: 'text-transform: capitalize;',
    C: 'text-style: capitalize;',
    D: 'text-style: uppercase;',
    correctAnswer: "B"
  },
  {
    questionText: 'Which CSS property controls the space between lines of text?',
    A: 'line-spacing',
    B: 'line-height',
    C: 'spacing',
    D: 'text-spacing',
    correctAnswer: "B"
  },
  {
    questionText: 'What does the z-index property do?',
    A: 'Specifies the horizontal stacking order of elements',
    B: 'Changes the transparency of an element',
    C: 'Specifies the vertical stacking order of elements',
    D: 'Sets the display order of elements based on position',
    correctAnswer: "C"
  },
  {
    questionText: 'Which property would you use to make a font bold?',
    A: 'font-weight: bold;',
    B: 'font-style: bold;',
    C: 'font-bold: true;',
    D: 'text-weight: bold;',
    correctAnswer: "A"
  },
  {
    questionText: 'Which CSS property is used to add space inside an element’s border?',
    A: 'margin',
    B: 'padding',
    C: 'border-spacing',
    D: 'spacing',
    correctAnswer: "B"
  }
];

const jsQuestions = [
  {
    questionText: 'What does "DOM" stand for in JavaScript?',
    A: 'Document Object Model',
    B: 'Data Object Management',
    C: 'Digital Object Model',
    D: 'Document Operation Mode',
    correctAnswer: "A"
  },
  {
    questionText: 'Which symbol is used for single-line comments in JavaScript?',
    A: '//',
    B: '/*',
    C: '#',
    D: '!--',
    correctAnswer: "A"
  },
  {
    questionText: 'What keyword is used to declare a variable in JavaScript?',
    A: 'var',
    B: 'let',
    C: 'const',
    D: 'All of the above',
    correctAnswer: "D"
  },
  {
    questionText: 'What method can be used to select an element by its ID in JavaScript?',
    A: 'getElementByClass',
    B: 'getElementById',
    C: 'querySelectorAll',
    D: 'getElementByTagName',
    correctAnswer: "B"
  },
  {
    questionText: 'Which operator is used to compare both value and type in JavaScript?',
    A: '==',
    B: '!=',
    C: '===',
    D: '=',
    correctAnswer: "C"
  },
  {
    questionText: 'What is the output of `typeof null` in JavaScript?',
    A: 'null',
    B: 'undefined',
    C: 'object',
    D: 'boolean',
    correctAnswer: "C"
  },
  {
    questionText: 'Which array method is used to add elements to the end of an array?',
    A: 'push',
    B: 'pop',
    C: 'shift',
    D: 'unshift',
    correctAnswer: "A"
  },
  {
    questionText: 'What does the `this` keyword refer to in JavaScript?',
    A: 'The current function',
    B: 'The global object',
    C: 'The current object',
    D: 'The previous object',
    correctAnswer: "C"
  },
  {
    questionText: 'Which JavaScript method can be used to convert a JSON string into a JavaScript object?',
    A: 'JSON.parse()',
    B: 'JSON.stringify()',
    C: 'JSON.convert()',
    D: 'JSON.object()',
    correctAnswer: "A"
  },
  {
    questionText: 'What is the purpose of `setTimeout()` in JavaScript?',
    A: 'To create an interval',
    B: 'To execute code after a delay',
    C: 'To stop code execution',
    D: 'To execute code immediately',
    correctAnswer: "B"
  }
];

const accessibilityQuestions = [
  {
    questionText: 'What does WCAG stand for?',
    A: 'Web Content Accessibility Guidelines',
    B: 'World Content Accessibility Guide',
    C: 'Website Color Accessibility Guide',
    D: 'Web Coding Accessibility Guidelines',
    correctAnswer: "A"
  },
  {
    questionText: 'Which HTML attribute provides a text alternative for screen readers on an image?',
    A: 'src',
    B: 'title',
    C: 'alt',
    D: 'aria-label',
    correctAnswer: "C"
  },
  {
    questionText: 'What role does the `aria-label` attribute play in accessibility?',
    A: 'Defines the label for a form input',
    B: 'Provides a description for images',
    C: 'Provides an accessible label for elements',
    D: 'Identifies required form fields',
    correctAnswer: "C"
  },
  {
    questionText: 'Which HTML element should be used for main content on a page to improve accessibility?',
    A: 'section',
    B: 'header',
    C: 'main',
    D: 'article',
    correctAnswer: "C"
  },
  {
    questionText: 'What is the recommended minimum color contrast ratio for normal text to be accessible?',
    A: '2:1',
    B: '3:1',
    C: '4.5:1',
    D: '7:1',
    correctAnswer: "C"
  },
  {
    questionText: 'Which ARIA attribute should be used to notify users of a dynamic change on the page?',
    A: 'aria-role',
    B: 'aria-live',
    C: 'aria-hidden',
    D: 'aria-checked',
    correctAnswer: "B"
  },
  {
    questionText: 'Which element is commonly used to create keyboard-accessible dropdown menus?',
    A: 'div',
    B: 'button',
    C: 'span',
    D: 'p',
    correctAnswer: "B"
  },
  {
    questionText: 'Which landmark role should be used to identify the primary navigation of a webpage?',
    A: 'main',
    B: 'footer',
    C: 'banner',
    D: 'navigation',
    correctAnswer: "D"
  },
  {
    questionText: 'What does the `tabindex="0"` attribute do?',
    A: 'Removes an element from the tab order',
    B: 'Makes an element tabbable in the natural order',
    C: 'Focuses the element when the page loads',
    D: 'Hides the element from screen readers',
    correctAnswer: "B"
  },
  {
    questionText: 'Which element is preferred for structuring headings to create a logical hierarchy?',
    A: 'h1 to h6 tags',
    B: 'div',
    C: 'p',
    D: 'span',
    correctAnswer: "A"
  }
];

function changeMode(){
  document.body.classList.toggle('light-mode');
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

function writeQuestions(){
  const quizTitle = document.querySelector('.quiz-title');
  const quizContent = quizTitle.innerText;
  questionCounter.innerText = i + 1;
  questionCounterInput.value = i;
  if(quizContent === 'HTML'){
    questionContent.innerText = htmlQuestions[i].questionText;
    choiceA.innerHTML = `<span class="choice">A</span>
            <p class="answer">${htmlQuestions[i].A}</p>`;
    choiceB.innerHTML = `<span class="choice">B</span>
            <p class="answer">${htmlQuestions[i].B}</p>`;
    choiceC.innerHTML = `<span class="choice">C</span>
            <p class="answer">${htmlQuestions[i].C}</p>`;
    choiceD.innerHTML = `<span class="choice">D</span>
            <p class="answer">${htmlQuestions[i].D}</p>`;
  } else if(quizContent === 'CSS'){
    questionContent.innerText = cssQuestions[i].questionText;
    choiceA.innerHTML = `<span class="choice">A</span>
            <p class="answer">${cssQuestions[i].A}</p>`;
    choiceB.innerHTML = `<span class="choice">B</span>
            <p class="answer">${cssQuestions[i].B}</p>`;
    choiceC.innerHTML = `<span class="choice">C</span>
            <p class="answer">${cssQuestions[i].C}</p>`;
    choiceD.innerHTML = `<span class="choice">D</span>
            <p class="answer">${cssQuestions[i].D}</p>`;
  } else if(quizContent === 'Javascript'){
    questionContent.innerText = jsQuestions[i].questionText;
    choiceA.innerHTML = `<span class="choice">A</span>
            <p class="answer">${jsQuestions[i].A}</p>`;
    choiceB.innerHTML = `<span class="choice">B</span>
            <p class="answer">${jsQuestions[i].B}</p>`;
    choiceC.innerHTML = `<span class="choice">C</span>
            <p class="answer">${jsQuestions[i].C}</p>`;
    choiceD.innerHTML = `<span class="choice">D</span>
            <p class="answer">${jsQuestions[i].D}</p>`;
  } else if(quizContent === 'Accessibility'){
    questionContent.innerText = accessibilityQuestions[i].questionText;
    choiceA.innerHTML = `<span class="choice">A</span>
            <p class="answer">${accessibilityQuestions[i].A}</p>`;
    choiceB.innerHTML = `<span class="choice">B</span>
            <p class="answer">${accessibilityQuestions[i].B}</p>`;
    choiceC.innerHTML = `<span class="choice">C</span>
            <p class="answer">${accessibilityQuestions[i].C}</p>`;
    choiceD.innerHTML = `<span class="choice">D</span>
            <p class="answer">${accessibilityQuestions[i].D}</p>`;
  } 
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
    const quizContent = quizTitle.innerText;
    if(quizContent === 'HTML'){
      if(htmlQuestions[i].correctAnswer == selectedAnswer.dataset.answer){
        selectedAnswer.classList.add('correctAnswerBtn', 'correct-answer');
        correctAnwers++;
      } else{
        selectedAnswer.classList.add('wrongAnswerBtn');
        for (const answer of answers) {
          if(answer.dataset.answer == htmlQuestions[i].correctAnswer){
            answer.classList.add('correct-answer');
          }
        }
      }
    } else if(quizContent === 'CSS'){
      if(cssQuestions[i].correctAnswer == selectedAnswer.dataset.answer){
        selectedAnswer.classList.add('correctAnswerBtn', 'correct-answer');
        correctAnwers++;
      } else{
        selectedAnswer.classList.add('wrongAnswerBtn');
        for (const answer of answers) {
          if(answer.dataset.answer == cssQuestions[i].correctAnswer){
            answer.classList.add('correct-answer');
          }
        }
      }
    } else if(quizContent === 'Javascript'){
      if(jsQuestions[i].correctAnswer == selectedAnswer.dataset.answer){
        selectedAnswer.classList.add('correctAnswerBtn', 'correct-answer');
        correctAnwers++;
      } else{
        selectedAnswer.classList.add('wrongAnswerBtn');
        for (const answer of answers) {
          if(answer.dataset.answer == jsQuestions[i].correctAnswer){
            answer.classList.add('correct-answer');
          }
        }
      }
    } else if(quizContent === 'Accessibility'){
      if(accessibilityQuestions[i].correctAnswer == selectedAnswer.dataset.answer){
        selectedAnswer.classList.add('correctAnswerBtn', 'correct-answer');
        correctAnwers++;
      } else{
        selectedAnswer.classList.add('wrongAnswerBtn');
        for (const answer of answers) {
          if(answer.dataset.answer == accessibilityQuestions[i].correctAnswer){
            answer.classList.add('correct-answer');
          }
        }
      }
    } 
    
    if(i === 9){
      btn.innerText = 'Complete Quiz';
    } else{
      btn.innerText = 'Next Question';
    }
  }
  console.log(correctAnwers);
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
