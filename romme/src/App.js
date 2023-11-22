/* eslint-disable */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Admin from './pages/admin/Admin';


function App(){
  return (
    <div className='WebContainer'>
      <Routes>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
