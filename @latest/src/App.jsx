import React from 'react'
import './App.css'
import Home from './components/Home'
const Profile = React.lazy(() => import('./components/Profile'))

import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom"

function App() {

  return (
    <BrowserRouter>
      <Topbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

function Topbar() {
  const navigate = useNavigate();


  return (
    <div>
      <button onClick={() => navigate("/home")}>
        Home
      </button>
      <button onClick={() => navigate("/profile")}>
        Profile
      </button>
    </div>
  )
}

export default App
