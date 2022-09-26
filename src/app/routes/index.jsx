import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/dummyHome/home'
import About from '../pages/dummyAbout/about'
import HomeFormContainer from '../../components/Form/HomeFormContainer'
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../../components/RegisterForm/RegisterFormContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/homeForm" element={<HomeFormContainer />} />
    <Route path="/register" element={<RegisterFormContainer />} />
    <Route path="/login" element={<LoginFormContainer />} />
  </Routes>
)

export default Router
