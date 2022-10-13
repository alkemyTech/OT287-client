import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
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
import ActivityContainer from '../components/Activity/ActivityContainer'
import BackofficeTestimonials from '../components/BackOffice/Testimonials/TestimonialsContainer'
import Logout from '../components/Logout/Logout'
import EditUserProfileContainer from '../components/Forms/EditUserProfile/EditUserProfileContainer'
import EditUserContainer from '../components/Forms/UserEditFormBackOffice/EditUserContainer'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'
import BackOfficeActivities from '../components/BackOffice/Activities/ActivitiesContainer'
import MembersContainer from '../components/Members/MembersContainer'
import TestimonialFormContainer from '../components/Forms/TestimonialsForm/TestimonialFormContainer'
import ContactsContainer from '../components/BackOffice/Contacts/ContactsContainer'
import CategoriesFormContainer from '../components/Forms/CategoriesForm/CategoriesFormContainer'
import CategoriesContainer from '../components/BackOffice/Categories/CategoriesContainer'
import ScrollToTop from '../pages/ScrollToTop'
import BackofficeMembers from '../components/BackOffice/Members/MembersContainer'
import MembersFormContainer from '../components/Forms/MembersForm/MembersFormContainer'

const Router = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <TransitionGroup component={null}>
        <CSSTransition
          key={location.key}
          timeout={200}
          classNames="page"
          unmountOnExit
          appear
          exit={false}
        >
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route path="/" element={<HomeContainer />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/login" element={<LoginFormContainer />} />
              <Route path="/registrate" element={<RegisterFormContainer />} />
              <Route path="/mi-perfil" element={<MyProfileContainer />} />
              <Route path="/mi-perfil/editar" element={<EditUserProfileContainer />} />
              <Route path="/mi-perfil" element={<PrivateRoute><MyProfileContainer /></PrivateRoute>} />
              <Route path="/novedades" element={<NewsContainer />} />
              <Route path="/novedades/:id" element={<NewsByIdContainer />} />
              <Route path="/contacto" element={<ContactScreen />} />
              <Route path="/sobre-nosotros" element={<MembersContainer />} />
              <Route path="/actividades/:id" element={<ActivityContainer />} />
            </Route>
            {/* Back-Office Routes for Admin access only */}
            <Route path="/back-office" element={<PrivateRoute><BackOfficeContainer /></PrivateRoute>}>
              <Route path="organizations" element={<BackofficeNews />} />
              <Route path="organizations/:id/edit" element={<EditOrganizationContainer />} />
              <Route path="users" element={<BackofficeUsers />} />
              <Route path="users/:id/edit" element={<EditUserContainer />} />
              <Route path="news" element={<BackofficeNews />} />
              <Route path="testimonials" element={<BackofficeTestimonials />} />
              <Route path="testimonials/:id/edit" element={<TestimonialFormContainer />} />
              <Route path="testimonials/create" element={<TestimonialFormContainer />} />
              <Route path="news/:id" element={<BackofficeNews />} />
              <Route path="activities" element={<BackOfficeActivities />} />
              <Route path="activities/create" element={<ActivitiesFormContainer />} />
              <Route path="activities/:id/edit" element={<ActivitiesFormContainer />} />
              <Route path="news/create" element={<NewsFormContainer />} />
              <Route path="news/:id/edit" element={<NewsFormContainer />} />
              <Route path="contacts" element={<ContactsContainer />} />
              <Route path="members" element={<BackofficeMembers />} />
              <Route path="members/:id/edit" element={<MembersFormContainer />} />
              <Route path="members/create" element={<MembersFormContainer />} />
              <Route path="categories" element={<CategoriesContainer />} />
              <Route path="categories/create" element={<CategoriesFormContainer />} />
              <Route path="categories/:id/edit" element={<CategoriesFormContainer />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Router
