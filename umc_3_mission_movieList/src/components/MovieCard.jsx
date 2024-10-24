import React from 'react';
import './MovieCard.css';  // 필요한 CSS 파일을 추가

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;
