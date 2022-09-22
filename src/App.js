import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './app/components/home/home'
import About from './app/components/about/about'

import './App.css'

const App = () => (
  <>
    <h1>Welcome to learn React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  </>
)

export default App
