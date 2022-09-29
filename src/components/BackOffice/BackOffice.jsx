import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import { Outlet } from 'react-router-dom'
import HeaderContainer from '../Header/HeaderContainer'
import Items from './Items'
import DrawerMenu from './DrawerMenu';
import AddButton from './AddButton'

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
}) => (
  <>
    <HeaderContainer />
    <Box sx={{ display: 'flex', minHeight: '100vh' }} position="relative">
      <DrawerMenu
        options={options}
        mobileOpen={mobileOpen}
        activeSection={activeSection}
        handleFilterList={handleFilterList}
        handleDrawerToggle={handleDrawerToggle}
      />
      { location === '/back-office'
        ? <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes} />
        : (
          <Box maxWidth="md" sx={{ mt: 10, ml: { md: 4 }, width: '100%' }}>
            <Outlet />
          </Box>
        )}
    </Box>
    <AddButton handleAction={handleAction} />
  </>
)

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
}

export default BackOffice
