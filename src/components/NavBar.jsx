import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./NavBar.css";

function Navbar() {
  const { user, logout } = useContext(AuthContext);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  return (
    <nav className="navbar">
      <h1 className="logo">QuizApp</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>

        {user && (
          <>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/history">My Quizzes</Link></li>
          </>
        )}

        <li>
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? "☀️" : "🌙"}
          </button>
        </li>

        {user ? (
          <>
            <li className="welcome-msg">Welcome, {user.name}</li>
            <li><button onClick={logout} className="logout-btn">Logout</button></li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
