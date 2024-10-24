// NowPlaying.jsx

import React, { useEffect, useState } from 'react';
import { getNowPlayingMovies } from '../api/tmdb';
import '../components/MovieList.css'; // 경로 수정: '../components/MovieList.css'
import MovieCard from '../components/MovieCard'; // 경로 수정: '../components/MovieCard'

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await getNowPlayingMovies();
        setMovies(response.data.results);
      } catch (error) {
        console.error("영화 로딩 중 오류 발생:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      {loading ? (
        <p>영화를 불러오는 중입니다...</p>
      ) : (
        <div className="movie-list">
          {movies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default NowPlaying;
