import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material'
import FooterContainer from '../../components/Footer/FooterContainer'
import HeaderContainer from '../../components/Header/HeaderContainer';

const MainLayout = () => (
  <Box>
    <HeaderContainer />
    <Box sx={{ minHeight: 'calc(100vh - 380px)', margin: '120px 0 20px 0' }}>
      <Outlet />
    </Box>
    <FooterContainer />
  </Box>
)

export default MainLayout;
