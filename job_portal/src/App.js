import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/Home';
import Navbar from './components/Navbar';
import CandidateRegistration from './components/CandidateRegistration';
import CandidateList from './components/CandidateList';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/candidate-registration' element={<CandidateRegistration />} />
        <Route path='/candidate-list' element={<CandidateList />} />
      </Routes>
    </Router>
  );
}

export default App;
