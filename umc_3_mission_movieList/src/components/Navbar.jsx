// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">YONGCHA</Link>
      </div>
      <div className="auth-links">
        <Link to="/login">로그인</Link>
        <Link to="/signup">회원가입</Link>
      </div>
    </nav>
  );
};

export default Navbar;
