import React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import DrawerOptions from './DrawerOptions'

const DrawerMenu = ({
  options, mobileOpen, activeSection, handleFilterList, handleDrawerToggle,
}) => (
  <>
    <CssBaseline />
    <Box
      component="nav"
      sx={{ width: { sm: 240 }, flexShrink: { sm: 0 }, paddingTop: '20rem' }}
    >
      {/* mobile drawer */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
      >
        <DrawerOptions
          options={options}
          filter={handleFilterList}
          activeSection={activeSection}
        />
      </Drawer>

      {/* desktop drawer */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
        }}
        open
      >
        <DrawerOptions
          options={options}
          filter={handleFilterList}
          activeSection={activeSection}
        />
      </Drawer>
    </Box>
  </>
)

DrawerMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    icon: PropTypes.element,
  })).isRequired,
  mobileOpen: PropTypes.bool.isRequired,
  activeSection: PropTypes.string.isRequired,
  handleFilterList: PropTypes.func.isRequired,
  handleDrawerToggle: PropTypes.func.isRequired,
};

export default DrawerMenu;
