import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/dummyHome/home'
import About from '../pages/dummyAbout/about'
import MyProfileContainer from '../../components/MyProfile/MyProfileContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/myprofile" element={<MyProfileContainer />} />
  </Routes>
)

export default Router
