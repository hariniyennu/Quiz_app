import { useParams } from "react-router-dom";
import { useState } from "react";
import quizData from "../data/quizData";
import "./QuizPage.css";

const correctSound = new Audio("/sounds/correct.mp3");
const incorrectSound = new Audio("/sounds/incorrect.mp3");

const QuizPage = () => {
  const { id } = useParams();
  const quiz = quizData.find((q) => q.id === parseInt(id));

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (option) => {
  if (!isAnswered) {
    setSelectedOption(option);
    setIsAnswered(true);

    const isCorrect = option === quiz.questions[currentQuestion].answer;
    if (isCorrect) {
      correctSound.play();
      setScore((prev) => prev + 1);
    } else {
      incorrectSound.play();
    }
  }
};


  const handleNext = () => {
    setSelectedOption(null);
    setIsAnswered(false);
    if (currentQuestion + 1 < quiz.questions.length) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnswered(false);
  };

  if (!quiz) return <div className="quiz-container">Quiz not found.</div>;

  const totalQuestions = quiz.questions.length;

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">{quiz.title}</h1>

      {/* Progress Bar */}
      {!showResult && (
        <>
          <div className="progress-text">
            Question {currentQuestion + 1} of {totalQuestions}
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestion + 1) / totalQuestions) * 100}%`,
              }}
            ></div>
          </div>
        </>
      )}

      {showResult ? (
        <div className="result">
          <p>Your score: {score} / {totalQuestions}</p>
          <button className="restart-btn" onClick={handleRestart}>
            Restart Quiz
          </button>
        </div>
      ) : (
        <>
          <div className="question-text">
            {quiz.questions[currentQuestion].question}
          </div>
          <ul className="options">
              {quiz.questions[currentQuestion].options.map((option, idx) => {
                let className = "option";
                if (isAnswered) {
                  if (option === quiz.questions[currentQuestion].answer) {
                    className += " correct";
                  } else if (option === selectedOption) {
                    className += " incorrect";
                  }
                } else if (selectedOption === option) {
                  className += " selected";
                }

                return (
                  <li
                    key={idx}
                    className={className}
                    onClick={() => handleOptionClick(option)}
                  >
                    {option}
                  </li>
                );
              })}
            </ul>
          <button className="next-btn" onClick={handleNext} disabled={!isAnswered}>
            {currentQuestion === totalQuestions - 1 ? "Finish" : "Next"}
          </button>
        </>
      )}
    </div>
  );
};

export default QuizPage;
