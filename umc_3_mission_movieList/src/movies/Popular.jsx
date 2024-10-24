import React, { useEffect, useState } from 'react';
import { getPopularMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';

const Popular = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await getPopularMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>인기있는 영화</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default Popular;
