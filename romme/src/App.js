/* eslint-disable */
import React from 'react';
import './style/css/App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/Admin';
import Home from './pages/Home';
import Help from './pages/Help';
import Profile from './pages/Profile';
import Research from './pages/Research';
import Youtube from './pages/Youtube';
import OpenChat from './pages/OpenChat';

import NavTopBar from './component/NavTopBar';
import NavBottomBar from './component/NavBottomBar';

function App(){
  return (
    <div className='WebContainer'>
      <NavTopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/help" element={<Help />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/research" element={<Research />} />
          <Route path="/youtube" element={<Youtube />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/openchat" element={<OpenChat />} />
        </Routes>
      <NavBottomBar />
    </div>
  );
}

export default App;
