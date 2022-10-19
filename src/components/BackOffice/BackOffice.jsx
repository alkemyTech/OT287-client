import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import Items from './Items'
import DrawerMenu from './DrawerMenu';
import AddButton from './AddButton'
import HeaderContainer from '../Header/HeaderContainer'
import FooterContainer from '../footer/FooterContainer'

const BackOffice = ({
  data,
  options,
  mobileOpen,
  activeSection,
  handleFilterList,
  handleDrawerToggle,
  cardFields,
  handleAction,
  nestedRoutes,
  location,
  relativeLocation,
  hiddenAddButton,
}) => {
  const MenuIcon = mobileOpen ? KeyboardDoubleArrowLeftIcon : KeyboardDoubleArrowRightIcon
  // eslint-disable-next-line no-console

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
                ? <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes} />
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
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string.isRequired,
  handleFilterList: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
  hiddenAddButton: PropTypes.arrayOf(PropTypes.string).isRequired,
  cardFields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  handleAction: PropTypes.func.isRequired,
  nestedRoutes: PropTypes.shape({
    edit: PropTypes.string,
    delete: PropTypes.string,
  }).isRequired,
  location: PropTypes.string.isRequired,
  relativeLocation: PropTypes.string.isRequired,
}

export default BackOffice
