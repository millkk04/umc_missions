import React from 'react';
import MovieCard from './MovieCard';
import './MovieList.css';  // 필요한 CSS 파일을 추가

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
