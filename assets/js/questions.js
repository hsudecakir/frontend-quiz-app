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
