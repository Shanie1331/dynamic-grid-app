import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';

const App = () => {

  return (
    <Router basename='/dynamic-grid-app'>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Add more routes... */}
      </Routes>
    </Router>
  );
};

export default App;
