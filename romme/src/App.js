/* eslint-disable */
import React from 'react';
import './style/css/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import Research from './pages/Research';
import Youtube from './pages/Youtube';
import NavTopBar from './component/NavTopBar';
import NavBottomBar from './component/NavBottomBar';

function App(){
  return (
    <div className='WebContainer'>
      <NavTopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/research" element={<Research />} />
          <Route path="/youtube" element={<Youtube />} />
        </Routes>
      <NavBottomBar />
    </div>
  );
}

export default App;
