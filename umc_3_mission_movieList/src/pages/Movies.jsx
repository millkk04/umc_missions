import React from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
  return (
    <div>
      <h2>카테고리</h2>
      <Link to="/movies/now-playing">현재 상영중인</Link>
      <Link to="/movies/popular">인기있는</Link>
      <Link to="/movies/top-rated">높은 평가를 받은</Link>
      <Link to="/movies/upcoming">개봉 예정중인</Link>
    </div>
  );
};

export default Movies;
