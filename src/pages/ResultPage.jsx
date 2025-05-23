import React from 'react';
import { useLocation } from 'react-router-dom';

const ResultPage = () => {
  const location = useLocation();
  const { score, total } = location.state || {};

  return (
    <div className="result-page">
      <h2>Your Result</h2>
      <p>You scored {score} out of {total}</p>
    </div>
  );
};

export default ResultPage;
