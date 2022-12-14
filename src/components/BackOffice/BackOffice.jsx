import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import DrawerMenu from './DrawerMenu';
import AddButton from './AddButton'
import HeaderContainer from '../Header/HeaderContainer'
import FooterContainer from '../footer/FooterContainer'
import BackOfficeLanding from './BackOfficeLanding';

const BackOffice = ({
  options,
  mobileOpen,
  activeSection,
  handleFilterList,
  handleDrawerToggle,
  handleAction,
  location,
  relativeLocation,
  hiddenAddButton,
}) => {
  const MenuIcon = mobileOpen ? KeyboardDoubleArrowLeftIcon : KeyboardDoubleArrowRightIcon

  return (
    <>
      <Box height="100vh">
        <HeaderContainer
          MenuIcon={<MenuIcon sx={{ color: 'black', cursor: 'pointer' }} onClick={handleDrawerToggle} />}
        />
        <Box sx={{ margin: '120px 0 20px 0' }}>
          <Box sx={{ display: 'flex', minHeight: '100vh', top: '-120px' }} position="relative">
            <DrawerMenu
              options={options}
              mobileOpen={mobileOpen}
              activeSection={activeSection}
              handleFilterList={handleFilterList}
              handleDrawerToggle={handleDrawerToggle}
            />
            <Box sx={{ mt: 10, mx: { md: 4 }, width: '100%' }}>
              { location === '/back-office'
                ? <BackOfficeLanding />
                : (
                  <Outlet />
                )}
            </Box>
          </Box>
          {hiddenAddButton.includes(relativeLocation)
            ? null : (<AddButton handleAction={handleAction} />)}
        </Box>
        <FooterContainer />
      </Box>
    </>
  )
}

BackOffice.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
  })).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string,
  handleFilterList: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  hiddenAddButton: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleAction: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
  relativeLocation: PropTypes.string.isRequired,
}

BackOffice.defaultProps = {
  activeSection: null,
}

export default BackOffice
