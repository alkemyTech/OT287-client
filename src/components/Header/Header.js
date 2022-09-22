import React from 'react'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BrandLogo from './BrandLogo';
import BurgerMenu from './Navbar/BurgerMenu';
import Navbar from './Navbar/Navbar';

function Header({
  logo, menu, handleOpenMenu, handleCloseMenu, anchorNav,
}) {
  return (
    <AppBar position="static" sx={{ backgroundColor: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <BrandLogo logo={logo} breakpointDisplay="md" breakpointHidden="xs" />
          <BurgerMenu
            menu={menu}
            handleCloseMenu={handleCloseMenu}
            handleOpenMenu={handleOpenMenu}
            anchorNav={anchorNav}
          />
          <BrandLogo logo={logo} breakpointDisplay="xs" breakpointHidden="md" />
          <Navbar
            menu={menu}
            handleCloseMenu={handleCloseMenu}
          />
          <Box>
            <Button
              variant="outlined"
              sx={{
                display: { xs: 'none', md: 'inline' }, mx: 1.3, color: 'black', borderColor: 'black', fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' },
              }}
            >
              Log in
            </Button>
            <Button variant="contained" color="primary" sx={{ fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' } }}>Registrate</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

Header.propTypes = {
  logo: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    ruote: PropTypes.string,
  })).isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  anchorNav: PropTypes.instanceOf(Element),
}

Header.defaultProps = {
  anchorNav: null,
}

export default Header
