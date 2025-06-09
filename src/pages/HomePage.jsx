import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 
import quizData from "../data/quizData";

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes(
    quizData.map(({ id, title, description }) => ({
      id,
      title,
      description,
    }))
  );
  }, []);

  return (
    <div className="homepage-container">
      <h2 className="homepage-title">Available Quizzes</h2>
      <div className="quiz-list">
        {quizzes.map((quiz) => (
          <Link to={`/quiz/${quiz.id}`} className="quiz-card" key={quiz.id}>
            <h3>{quiz.title}</h3>
            <p>{quiz.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
