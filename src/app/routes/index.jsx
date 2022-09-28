import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home/homeContainer'
import About from '../pages/dummyAbout/about'
import BackOfficeContainer from '../../components/BackOffice/BackOfficeContainer'
import HomeFormContainer from '../../components/Form/HomeFormContainer'
import LoginFormContainer from '../../components/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../../components/RegisterForm/RegisterFormContainer'
import NewsContainer from '../../components/News/NewsContainer'
import NewsByIdContainer from '../../components/News/NewByIdContainer'
import BackOficceUsers from '../../components/BackOffice/users/UsersContainer'
import MyProfileContainer from '../../components/MyProfile/MyProfileContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="/backoffice" element={<BackOfficeContainer />} />
    <Route path="/backoffice/users" element={<BackOficceUsers />} />
    <Route path="/homeForm" element={<HomeFormContainer />} />
    <Route path="/register" element={<RegisterFormContainer />} />
    <Route path="/login" element={<LoginFormContainer />} />
    <Route path="/news" element={<NewsContainer />} />
    <Route path="/news/:id" element={<NewsByIdContainer />} />
    <Route path="/myprofile" element={<MyProfileContainer />} />

  </Routes>
)

export default Router
