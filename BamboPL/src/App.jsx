// App.jsx
import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/Navbar';
import RecentlyAdded from './components/RecentlyAdded';
import Promotion from './components/Promotion';
import Login from './Registration/Login';
import Home from './Home';

function App() {

  return (
    <Router>
  <div className="App">
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>


        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
  </div>
  </Router>
  );
}

export default App;
