const quizData = [
  {
    id: 1,
    title: "JavaScript Basics",
    questions: [
      {
        question: "What is the output of 2 + '2' in JavaScript?",
        options: ["4", "'4'", "22", "undefined"],
        answer: "22",
      },
      {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Netscape", "Google", "Oracle"],
        answer: "Netscape",
      },
    ],
  },
  {
    id: 2,
    title: "React Quiz",
    questions: [
      {
        question: "What hook is used to manage state?",
        options: ["useState", "useEffect", "useRef", "useContext"],
        answer: "useState",
      },
      {
        question: "What is JSX?",
        options: [
          "A JSON format",
          "JavaScript XML",
          "A CSS framework",
          "A JavaScript compiler",
        ],
        answer: "JavaScript XML",
      },
    ],
  },
  {
    id: 3,
    title: "HTML & CSS",
    questions: [
      {
        question: "Which tag is used to create a hyperlink in HTML?",
        options: ["<link>", "<a>", "<href>", "<hyperlink>"],
        answer: "<a>",
      },
      {
        question: "Which property controls text size in CSS?",
        options: ["font-weight", "text-size", "font-size", "text-style"],
        answer: "font-size",
      },
    ],
  },
  {
    id: 4,
    title: "Python Basics",
    questions: [
      {
        question: "What data type is the result of: 3 / 2?",
        options: ["int", "float", "str", "double"],
        answer: "float",
      },
      {
        question: "Which keyword is used to define a function?",
        options: ["func", "define", "def", "function"],
        answer: "def",
      },
    ],
  },
  {
    id: 5,
    title: "Git & GitHub",
    questions: [
      {
        question: "What command initializes a Git repository?",
        options: ["git start", "git init", "git begin", "git repo"],
        answer: "git init",
      },
      {
        question: "Where are your remote repositories hosted?",
        options: ["GitLab", "GitHub", "Bitbucket", "All of the above"],
        answer: "All of the above",
      },
    ],
  },
  {
    id: 6,
    title: "Data Structures",
    questions: [
      {
        question: "Which data structure uses FIFO (First In First Out)?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: "Queue",
      },
      {
        question: "Which data structure is used for recursion?",
        options: ["Queue", "Stack", "Graph", "Heap"],
        answer: "Stack",
      },
    ],
  },
];

export default quizData;
