import React, { useEffect, useState } from 'react';
import { getUpComingMovies } from '../api/tmdb';
import MovieList from '../components/MovieList';

const UpComing = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const { data } = await getUpComingMovies();
      setMovies(data.results);
    };
    fetchMovies();
  }, []);

  return (
    <div>
      <h2>개봉 예정 영화</h2>
      <MovieList movies={movies} />
    </div>
  );
};

export default UpComing;
