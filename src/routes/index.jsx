import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../components/Home/HomeContainer'
import About from '../pages/dummyAbout/about'
import BackOfficeContainer from '../components/BackOffice/BackOfficeContainer'
import HomeFormContainer from '../components/Forms/HomeForm/HomeFormContainer'
import LoginFormContainer from '../components/Forms/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer'
import NewsContainer from '../components/News/NewsContainer'
import NewsByIdContainer from '../components/News/NewByIdContainer'
import BackOfficeUsers from '../components/BackOffice/users/UsersContainer'
import MyProfileContainer from '../components/MyProfile/MyProfileContainer'
import NewsFormContainer from '../components/Forms/NewsForm/NewsFormContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="about" element={<About />} />
    <Route path="/backoffice" element={<BackOfficeContainer />} />
    <Route path="/backoffice/users" element={<BackOfficeUsers />} />
    <Route path="/backoffice/news" element={<NewsFormContainer />} />
    <Route path="/backoffice/news/:id" element={<NewsFormContainer />} />
    <Route path="/homeForm" element={<HomeFormContainer />} />
    <Route path="/register" element={<RegisterFormContainer />} />
    <Route path="/login" element={<LoginFormContainer />} />
    <Route path="/news" element={<NewsContainer />} />
    <Route path="/news/:id" element={<NewsByIdContainer />} />
    <Route path="/myprofile" element={<MyProfileContainer />} />

  </Routes>
)

export default Router
