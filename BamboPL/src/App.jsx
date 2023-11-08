import './App.css'
import CreateAuction from './Auctions/create-auction'
//import Login from './Registration/Login'
//import Signup from './Registration/Signup'
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Text from './components/Text'
import RecentlyAdded from './components/recentlyAdded'
import Promotion from './components/Promotion'

function App() {
  

  return (
    <>
    <Navbar/>
    <Promotion/>
    <RecentlyAdded/>
    </>
  )
}

export default App
