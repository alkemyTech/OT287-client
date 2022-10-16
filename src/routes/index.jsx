import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ScrollToTop from '../pages/ScrollToTop'
import PrivateRoute from '../components/PrivateRoute/PrivateRoute'

// MainLayout routes screens & forms
import MainLayout from '../pages/MainLayout'
import HomeContainer from '../components/Home/HomeContainer'
import MembersContainer from '../components/Members/MembersContainer'
import NewsContainer from '../components/News/NewsContainer'
import NewsByIdContainer from '../components/News/NewByIdContainer'
import TestimonialsContainer from '../components/Testimonials/TestimonialsContainer'
import ContactScreen from '../components/Contact/ContactScreen'
import RegisterFormContainer from '../components/Forms/RegisterForm/RegisterFormContainer'
import LoginFormContainer from '../components/Forms/LoginForm/LoginFormContainer'
import MyProfileContainer from '../components/MyProfile/MyProfileContainer'
import EditUserProfileContainer from '../components/Forms/EditUserProfile/EditUserProfileContainer'
import Logout from '../components/Logout/Logout'
import ActivityContainer from '../components/Activity/ActivityContainer'

// BackOffice Tables
// Aca debería importarse el MainLayout de BackOffice para evitar recar toda la pagina en cada clic del sideBar
import BackOfficeContainer from '../components/BackOffice/BackOfficeContainer'
import BackOfficeNews from '../components/BackOffice/News/NewsContainer'
import BackOfficeActivities from '../components/BackOffice/Activities/ActivitiesContainer'
import BackOfficeCategories from '../components/BackOffice/Categories/CategoriesContainer'
import BackOfficeTestimonials from '../components/BackOffice/Testimonials/TestimonialsContainer'
import BackOfficeOrganizations from '../components/BackOffice/Organizations/OrganizationsContainer'
import BackOfficeSlides from '../components/BackOffice/Slides/SlidesContainer'
import BackOfficeUsers from '../components/BackOffice/Users/UsersContainer'
import BackOfficeContacts from '../components/BackOffice/Contacts/ContactsContainer'
import BackofficeMembers from '../components/BackOffice/Members/MembersContainer'

// BackOffice Forms
import NewsFormContainer from '../components/Forms/NewsForm/NewsFormContainer'
import ActivitiesFormContainer from '../components/Forms/ActivitiesForm/ActivitiesFormContainer'
import CategoriesFormContainer from '../components/Forms/CategoriesForm/CategoriesFormContainer'
import TestimonialsFormContainer from '../components/Forms/TestimonialsForm/TestimonialFormContainer'
import OrganizationsFormContainer from '../components/Forms/OrganizationForm/OrganizationsFormContainer'
import SlidesFormContainer from '../components/Forms/SlidesForm/SlidesFormContainer'
import UsersFormContainer from '../components/Forms/UsersForm/UsersFormContainer'
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
              <Route path="/sobre-nosotros" element={<MembersContainer />} />
              <Route path="/novedades" element={<NewsContainer />} />
              <Route path="/novedades/:id" element={<NewsByIdContainer />} />
              <Route path="/testimonios" element={<TestimonialsContainer />} />
              <Route path="/contacto" element={<ContactScreen />} />
              <Route path="/registrate" element={<RegisterFormContainer />} />
              <Route path="/login" element={<LoginFormContainer />} />
              <Route path="/mi-perfil" element={<PrivateRoute><MyProfileContainer /></PrivateRoute>} />
              <Route path="/mi-perfil/editar" element={<EditUserProfileContainer />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/actividades/:id" element={<ActivityContainer />} />
            </Route>
            {/* Back-Office Routes for Admin access only */}
            <Route path="/back-office" element={<PrivateRoute><BackOfficeContainer /></PrivateRoute>}>
              <Route path="news" element={<BackOfficeNews />} />
              <Route path="activities" element={<BackOfficeActivities />} />
              <Route path="categories" element={<BackOfficeCategories />} />
              <Route path="testimonials" element={<BackOfficeTestimonials />} />
              <Route path="organizations" element={<BackOfficeOrganizations />} />
              <Route path="users" element={<BackOfficeUsers />} />
              <Route path="slides" element={<BackOfficeSlides />} />
              <Route path="contacts" element={<BackOfficeContacts />} />
              <Route path="members" element={<BackofficeMembers />} />
              <Route path="news/create" element={<NewsFormContainer />} />
              <Route path="news/:id/edit" element={<NewsFormContainer />} />
              <Route path="activities/create" element={<ActivitiesFormContainer />} />
              <Route path="activities/:id/edit" element={<ActivitiesFormContainer />} />
              <Route path="categories/create" element={<CategoriesFormContainer />} />
              <Route path="categories/:id/edit" element={<CategoriesFormContainer />} />
              <Route path="testimonials/create" element={<TestimonialsFormContainer />} />
              <Route path="testimonials/:id/edit" element={<TestimonialsFormContainer />} />
              <Route path="organizations/create" element={<OrganizationsFormContainer />} />
              <Route path="organizations/:id/edit" element={<OrganizationsFormContainer />} />
              <Route path="slides/create" element={<SlidesFormContainer />} />
              <Route path="slides/:id/edit" element={<SlidesFormContainer />} />
              <Route path="users/create" element={<UsersFormContainer />} />
              <Route path="users/:id/edit" element={<UsersFormContainer />} />
              <Route path="members/create" element={<MembersFormContainer />} />
              <Route path="members/:id/edit" element={<MembersFormContainer />} />
            </Route>
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </>
  )
}

export default Router
