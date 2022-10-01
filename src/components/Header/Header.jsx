import React from 'react'
import PropTypes from 'prop-types';
import {
  Button, Box, Container, Toolbar, AppBar,
} from '@mui/material'
import BrandLogo from './BrandLogo';
import BurgerMenu from './Navbar/BurgerMenu';
import Navbar from './Navbar/Navbar';

const Header = (props) => {
  const {
    logo, menu, handleOpenMenu, handleCloseMenu, anchorNav, navigate, handleActiveButton,
    activeButton, buttonsAction,
  } = props
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'white', zIndex: 1300 }}>
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
            navigate={navigate}
            menu={menu}
            handleCloseMenu={handleCloseMenu}
            handleActiveButton={handleActiveButton}
            activeButton={activeButton}
            buttonsAction={buttonsAction}
          />
          <Box>
            <Button
              variant="outlined"
              sx={{
                display: { xs: 'none', md: 'inline' }, mx: 1.3, color: 'black', borderColor: 'black', fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' },
              }}
              onClick={() => {
                handleActiveButton(buttonsAction[0].route)
                navigate(buttonsAction[0].route)
              }}
            >
              {buttonsAction[0].text}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' } }}
              onClick={() => {
                handleActiveButton(buttonsAction[1].route)
                navigate(buttonsAction[1].route)
              }}
            >
              {buttonsAction[1].text}
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
Header.propTypes = {
  logo: PropTypes.string.isRequired,
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  anchorNav: PropTypes.instanceOf(Element),
  handleActiveButton: PropTypes.func.isRequired,
  activeButton: PropTypes.string.isRequired,
  buttonsAction: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
}

Header.defaultProps = {
  anchorNav: null,
}

export default Header
