import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material'
import FooterContainer from '../../components/footer/FooterContainer'
import HeaderContainer from '../../components/Header/HeaderContainer';

const MainLayout = () => (
  <Box height="100vh">
    <HeaderContainer />
    <Box sx={{ margin: '120px 0 20px 0' }}>
      <Outlet />
    </Box>
    <FooterContainer />
  </Box>
)

export default MainLayout;
