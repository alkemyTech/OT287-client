import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../components/Home/HomeContainer'
import BackOfficeContainer from '../components/BackOffice/BackOfficeContainer'
import LoginFormContainer from '../components/Forms/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer'
import NewsContainer from '../components/News/NewsContainer'
import NewsByIdContainer from '../components/News/NewByIdContainer'
import MyProfileContainer from '../components/MyProfile/MyProfileContainer'
import MainLayout from '../pages/MainLayout'
import ContactScreen from '../components/Contact/ContactScreen'
import EditOrganizationContainer from '../components/Forms/OrganizationForm/EditOrganizationContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/login" element={<LoginFormContainer />} />
      <Route path="/registrate" element={<RegisterFormContainer />} />
      <Route path="/mi-perfil" element={<MyProfileContainer />} />
      <Route path="/back-office" element={<BackOfficeContainer />} />
      <Route path="/back-office" element={<BackOfficeContainer />}>
        <Route path="organization-edit" element={<EditOrganizationContainer />} />
      </Route>
      <Route path="/novedades" element={<NewsContainer />} />
      <Route path="/novedades/:id" element={<NewsByIdContainer />} />
      <Route path="/contacto" element={<ContactScreen />} />
    </Route>
  </Routes>
)

export default Router
