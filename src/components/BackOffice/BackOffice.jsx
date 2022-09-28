import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import HeaderContainer from '../Header/HeaderContainer'
import Items from './Items'
import DrawerMenu from './DrawerMenu';
import AddButton from './AddButton'

import { Outlet } from "react-router-dom"

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
      <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes}/>
    </Box>
    <AddButton handleAction={handleAction} />
    <Outlet />
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
}

export default BackOffice
