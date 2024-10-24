import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Movies from './pages/Movies';
import NowPlaying from './movies/NowPlaying';
import Popular from './movies/Popular';
import TopRated from './movies/TopRated';
import UpComing from './movies/UpComing';
import Signup from './pages/Signup';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/now-playing" element={<NowPlaying />} />
          <Route path="/movies/popular" element={<Popular />} />
          <Route path="/movies/top-rated" element={<TopRated />} />
          <Route path="/movies/upcoming" element={<UpComing />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
