import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">QuizApp</Link>
      </div>
      <div className="auth-buttons">
        <Link to="/login" className="btn">Login</Link>
        <Link to="/register" className="btn">Register</Link>
      </div>
    </header>
  );
};

export default Header;
