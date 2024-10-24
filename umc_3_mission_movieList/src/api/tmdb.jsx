import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: import.meta.env.VITE_TMDB_API_KEY, // VITE_TMDB_API_KEY를 사용
    language: 'ko-KR',
  },
});

export const getNowPlayingMovies = () => api.get('/movie/now_playing');
export const getPopularMovies = () => api.get('/movie/popular');
export const getTopRatedMovies = () => api.get('/movie/top_rated');
export const getUpComingMovies = () => api.get('/movie/upcoming');
