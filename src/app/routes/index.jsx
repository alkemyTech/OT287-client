import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/dummyHome/home'
import About from '../pages/dummyAbout/about'
import HomeForm from '../../components/Form/HomeForm'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/homeForm" element={<HomeForm />} />
  </Routes>
)

export default Router
