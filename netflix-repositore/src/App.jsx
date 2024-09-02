import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="netflix-repositore/" element={<Login />} />
        <Route path="netflix-repositore/home" element={<Home />} />
        <Route path="netflix-repositore/movie/:id" element={<MovieDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
