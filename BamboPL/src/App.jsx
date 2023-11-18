// App.jsx
import React, { useEffect, useState } from 'react';
import {BrowserRouter, Route, Routes, Navigate} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecentlyAdded from './components/RecentlyAdded';
import Footer from './components/Footer';
import Promotion from './components/Promotion';
import Login from './Registration/Login';
import Signup from './Registration/Signup';
import Home from './Home';
import CreateAuction from './Auctions/create-auction';
import Profile from './components/Profile';
import AccountSignup from './Registration/AccountSignup';

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
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/AccountSignup" element={<AccountSignup/>} />
        
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
