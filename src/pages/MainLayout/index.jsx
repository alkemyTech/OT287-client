import React from 'react';
import { Outlet } from 'react-router-dom';
import FooterContainer from '../../components/footer/FooterContainer'
import HeaderContainer from '../../components/Header/HeaderContainer';

const MainLayout = () => (
  <>
    <HeaderContainer />
    <Outlet />
    <FooterContainer />
  </>
)

export default MainLayout;
