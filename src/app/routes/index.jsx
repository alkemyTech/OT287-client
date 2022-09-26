import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/dummyHome/home'
import About from '../pages/dummyAbout/about'
import RegisterFormContainer from '../../components/RegisterForm/RegisterFormContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/register" element={<RegisterFormContainer />} />
  </Routes>
)

export default Router
