import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h3>찾기</h3>
      <Link to="/movies">영화</Link>
    </div>
  );
};

export default Sidebar;
