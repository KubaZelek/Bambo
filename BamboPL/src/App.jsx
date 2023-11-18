// App.jsx
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecentlyAdded from './components/RecentlyAdded';
import Promotion from './components/Promotion';
import Login from './Registration/Login';
import Signup from './Registration/Signup';
import Home from './Home';
import CreateAuction from './Auctions/create-auction';

import ProfilePage from './components/ProfilePage';
function App() {

  return (
    
  <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' index element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/create_auction" element={<CreateAuction />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/profile" element={<ProfilePage/>}/>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
