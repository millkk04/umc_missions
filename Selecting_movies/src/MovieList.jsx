import React from 'react';
import { MOVIES } from './mocks/movies'; // movies.js에서 데이터 불러오기
import './App.css'; // 스타일 추가

const MovieList = () => {
  return (
    <div className="movie-list-container">
      {MOVIES.results.map(movie => (
        <div className="movie-item" key={movie.id}>
          <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
          <h2>{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
