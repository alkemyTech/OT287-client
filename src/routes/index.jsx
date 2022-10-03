import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeContainer from '../components/Home/HomeContainer'
import BackOfficeContainer from '../components/BackOffice/BackOfficeContainer'
import LoginFormContainer from '../components/Forms/LoginForm/LoginFormContainer'
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer'
import ActivitiesFormContainer from '../components/Forms/ActivitiesForm/ActivitiesFormContainer'
import NewsContainer from '../components/News/NewsContainer'
import NewsByIdContainer from '../components/News/NewByIdContainer'
import MyProfileContainer from '../components/MyProfile/MyProfileContainer'
import MainLayout from '../pages/MainLayout'
import ContactScreen from '../components/Contact/ContactScreen'
import EditOrganizationContainer from '../components/Forms/OrganizationForm/EditOrganizationContainer'
import NewsFormContainer from '../components/Forms/NewsForm/NewsFormContainer'
import BackofficeUsers from '../components/BackOffice/users/UsersContainer'
import BackofficeNews from '../components/BackOffice/news/NewsContainer'
import Logout from '../components/Logout/Logout'
import PrivateRoute  from '../components/PrivateRoute/PrivateRoute'
import BackOfficeActivities from '../components/BackOffice/Activities/ActivitiesContainer'

const Router = () => (
  <Routes>
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<HomeContainer />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/login" element={<LoginFormContainer />} />
      <Route path="/registrate" element={<RegisterFormContainer />} />
      <Route path="/mi-perfil" element={<PrivateRoute><MyProfileContainer/></PrivateRoute>} />
      <Route path="/novedades" element={<NewsContainer />} />
      <Route path="/novedades/:id" element={<NewsByIdContainer />} />
      <Route path="/contacto" element={<ContactScreen />} />
      {/* Back-Office Routes for Admin access only */}
      <Route path="/back-office" element={<PrivateRoute><BackOfficeContainer/></PrivateRoute>}>
        <Route path="organizations" element={<BackofficeNews />} />
        <Route path="organizations/:id/edit" element={<EditOrganizationContainer />} />
        <Route path="users" element={<BackofficeUsers />} />
        <Route path="news" element={<BackofficeNews />} />
        <Route path="news/:id" element={<BackofficeNews />} />
        <Route path="actividades" element={<BackOfficeActivities />} />
        <Route path="actividades/crear" element={<ActivitiesFormContainer />} />
        <Route path="actividades/:id/editar" element={<ActivitiesFormContainer />} />
        <Route path="news/create" element={<NewsFormContainer />} />
        <Route path="news/:id/edit" element={<NewsFormContainer />} />
      </Route>
    </Route>
  </Routes>
)

export default Router
