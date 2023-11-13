// App.jsx
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecentlyAdded from './components/RecentlyAdded';
import Promotion from './components/Promotion';
import Login from './Registration/Login';
import Home from './Home';
import CreateAuction from './Auctions/create-auction';

function App() {

  return (
    
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/create_auction" element={<CreateAuction />} />
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
