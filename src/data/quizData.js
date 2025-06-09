const quizData = [
  {
    id: 1,
    title: "JavaScript Basics",
    description: "Test your knowledge of JavaScript fundamentals, syntax, and behavior.",
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
      {
        question: "How do you write a comment in JavaScript?",
        options: ["<!-- comment -->", "// comment", "/* comment /", "* comment **"],
        answer: "// comment",
      },
      {
        question: "Which keyword is used to declare a block-scoped variable?",
        options: ["var", "let", "const", "static"],
        answer: "let",
      },
      {
        question: "What is the result of typeof null?",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        answer: "'object'",
      },
    ],
  },
  {
    id: 2,
    title: "Python Basics",
    description: "Evaluate your understanding of Python syntax, data types, and functions.",
    questions: [
      {
        question: "Which keyword is used to define a function in Python?",
        options: ["func", "define", "def", "function"],
        answer: "def",
      },
      {
        question: "Which of the following is a tuple?",
        options: ["[1, 2, 3]", "{1, 2, 3}", "(1, 2, 3)", "set(1, 2, 3)"],
        answer: "(1, 2, 3)",
      },
      {
        question: "What is the output of 3 // 2 in Python?",
        options: ["1.5", "1", "2", "0"],
        answer: "1",
      },
      {
        question: "What will len('Python') return?",
        options: ["5", "6", "7", "Error"],
        answer: "6",
      },
      {
        question: "Which keyword is used for error handling?",
        options: ["try", "catch", "error", "except"],
        answer: "try",
      },
    ],
  },
  {
    id: 3,
    title: "React Quiz",
    description: "Check your understanding of React concepts like hooks, JSX, and components.",
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
      {
        question: "Which function is used to render components in React?",
        options: ["renderComponent()", "ReactDOM.render()", "createElement()", "load()"],
        answer: "ReactDOM.render()",
      },
      {
        question: "What file typically holds the root component?",
        options: ["index.html", "App.js", "Main.js", "Component.jsx"],
        answer: "App.js",
      },
      {
        question: "Which command is used to create a new React app?",
        options: [
          "npm create react-app",
          "react init",
          "npx create-react-app",
          "react-create-app",
        ],
        answer: "npx create-react-app",
      },
    ],
  },
  {
    id: 4,
    title: "Git & GitHub",
    description: "Review key Git commands and GitHub collaboration concepts.",
    questions: [
      {
        question: "What command initializes a Git repository?",
        options: ["git start", "git init", "git begin", "git repo"],
        answer: "git init",
      },
      {
        question: "Which command stages files for commit?",
        options: ["git add", "git stage", "git push", "git pull"],
        answer: "git add",
      },
      {
        question: "How do you push code to a remote repository?",
        options: ["git send", "git commit", "git push", "git upload"],
        answer: "git push",
      },
      {
        question: "What file is used to ignore files from Git tracking?",
        options: ["ignore.txt", "no-git.txt", ".gitignore", "blocklist.txt"],
        answer: ".gitignore",
      },
      {
        question: "Which GitHub action merges branches?",
        options: ["git add", "git merge", "git commit", "git pull"],
        answer: "git merge",
      },
    ],
  },
  {
    id: 5,
    title: "HTML & CSS",
    description: "Explore the basics of web structure and styling using HTML and CSS.",
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
      {
        question: "What tag is used for inserting images?",
        options: ["<image>", "<src>", "<img>", "<pic>"],
        answer: "<img>",
      },
      {
        question: "How do you write a comment in HTML?",
        options: ["// comment", "# comment", "<!-- comment -->", "/* comment */"],
        answer: "<!-- comment -->",
      },
      {
        question: "How do you center text in CSS?",
        options: [
          "text-align: center;",
          "align: center;",
          "margin: auto;",
          "center-text: true;",
        ],
        answer: "text-align: center;",
      },
    ],
  },
  {
    id: 6,
    title: "Data Structures",
    description: "Test your basics on key data structures like stack, queue, and trees.",
    questions: [
      {
        question: "Which data structure uses FIFO?",
        options: ["Stack", "Queue", "Array", "Tree"],
        answer: "Queue",
      },
      {
        question: "Which data structure uses LIFO?",
        options: ["Queue", "Array", "Stack", "Heap"],
        answer: "Stack",
      },
      {
        question: "Which is best for fast lookup?",
        options: ["Linked List", "Hash Table", "Queue", "Stack"],
        answer: "Hash Table",
      },
      {
        question: "Which data structure is used in recursion?",
        options: ["Queue", "Tree", "Graph", "Stack"],
        answer: "Stack",
      },
      {
        question: "Which traversal visits root, left, right?",
        options: [
          "Inorder",
          "Postorder",
          "Preorder",
          "Breadth-first",
        ],
        answer: "Preorder",
      },
    ],
  },
];

export default quizData;