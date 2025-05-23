import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; 

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);

  useEffect(() => {
    setQuizzes([
      { id: '1', title: 'JavaScript Basics', description: 'Test your JS fundamentals!' },
      { id: '2', title: 'React Quiz', description: 'Check your React knowledge!' },
      { id: '3', title: 'HTML & CSS', description: 'Explore the front-end basics.' }
    ]);
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
