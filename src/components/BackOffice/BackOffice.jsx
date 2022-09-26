import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
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
      <Items array={data} cardFields={cardFields} />
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
}

export default BackOffice
