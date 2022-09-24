import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/homeContainer'
import About from '../pages/dummyAbout/about'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
  </Routes>
)

export default Router
