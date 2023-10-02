import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import RedirectPage from './routes/RedirectPage';

const App = () => {

  return (
    <Router basename='/dynamic-grid-app'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/redirectedPath" element={<RedirectPage/>} />
        {/* Add more routes... */}
      </Routes>
    </Router>
  );
};

export default App;
