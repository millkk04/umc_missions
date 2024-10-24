import React, { useEffect, useState } from 'react';
import { getTopRatedMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await getTopRatedMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>높은 평가를 받은 영화</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default TopRated;
