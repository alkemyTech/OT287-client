import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../components/Home/HomeContainer'
import About from '../pages/dummyAbout/about'
import BackOfficeContainer from '../components/BackOffice/BackOfficeContainer'
import HomeFormContainer from '../components/Forms/HomeForm/HomeFormContainer'
import LoginFormContainer from '../components/Forms/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer'
import ActivitiesFormContainer from '../components/Forms/ActivitiesForm/ActivitiesFormContainer'
import NewsContainer from '../components/News/NewsContainer'
import NewsByIdContainer from '../components/News/NewByIdContainer'
import BackOficceUsers from '../components/BackOffice/users/UsersContainer'
import BackOfficeActivities from '../components/BackOffice/Activities/ActivitiesContainer'
import MyProfileContainer from '../components/MyProfile/MyProfileContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<HomeContainer />} />
    <Route path="about" element={<About />} />
    <Route path="/backoffice" element={<BackOfficeContainer />} />
    <Route path="/backoffice/users" element={<BackOficceUsers />} />
    <Route path="/backoffice/activities" element={<BackOfficeActivities />} />
    <Route path="/homeForm" element={<HomeFormContainer />} />
    <Route path="/register" element={<RegisterFormContainer />} />
    <Route path="/login" element={<LoginFormContainer />} />
    <Route path="/activitiesForm" element={<ActivitiesFormContainer />} />
    <Route path="/news" element={<NewsContainer />} />
    <Route path="/news/:id" element={<NewsByIdContainer />} />
    <Route path="/myprofile" element={<MyProfileContainer />} />

  </Routes>
)

export default Router
