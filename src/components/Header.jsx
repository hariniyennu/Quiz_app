import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Header.css';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="site-header">
      <div className="logo">
        <Link to="/">QuizApp</Link>
      </div>
      <div className="auth-buttons">
        {user ? (
          <>
            <span className="welcome-message">Hello {user.email.split('@')[0]}!</span>
            <button onClick={logout} className="btn logout-btn">Logout</button>
          </>
        ) : (
          <>
            <span className="auth-prompt">Login/Register to track your score!</span>
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register" className="btn">Register</Link>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;