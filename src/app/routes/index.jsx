import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/dummyHome/home'
import About from '../pages/dummyAbout/about'
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/login" element={<LoginFormContainer />} />
  </Routes>
)

export default Router
