import React from 'react'
import PropTypes from 'prop-types';
import {
  Button, Box, Container, Toolbar, AppBar,
  Typography,
} from '@mui/material'
import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';
import BurgerMenu from './Navbar/BurgerMenu';
import Navbar from './Navbar/Navbar';

const Header = (props) => {
  const {
    logo, menu, handleOpenMenu, handleCloseMenu, anchorNav, navigate, handleActiveButton,
    activeButton, buttonsAction, MenuIcon,
  } = props
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: 'rgb(240,240,240)', zIndex: 1300,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex' }}>
          <Link to="/">
            <BrandLogo logo={logo} breakpointDisplay="md" breakpointHidden="xs" />
          </Link>
          <BurgerMenu
            menu={menu}
            handleCloseMenu={handleCloseMenu}
            handleOpenMenu={handleOpenMenu}
            anchorNav={anchorNav}
            MenuIcon={MenuIcon}
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
          {/* <Box sx={{ flexGrow: '1' }} /> */}
          <Box
            sx={{ display: { xs: 'contents' } }}
          >
            <Button
              variant="outlined"
              sx={{
                display: { xs: 'none', sm: 'inline' },
                mx: 1.3,
                color: 'black',
                borderColor: 'black',
                fontSize: { xs: '.1rem', md: '.8rem', lg: '1rem' },
                border: 'solid 0px',
                padding: '0px',
                height: '40px',
              }}
              onClick={() => {
                handleActiveButton(buttonsAction[0].route)
                navigate(buttonsAction[0].route)
              }}
            >
              <Typography
                fontSize={{ xs: '.5rem', md: '.8rem', lg: '1rem' }}
              >
                {buttonsAction[0].text}

              </Typography>
            </Button>
            <Button
              variant="outlined"
              sx={{
                display: { xs: 'contents', sm: 'none' },
                mx: 1.3,
                color: 'black',
                borderColor: 'black',
                fontSize: { xs: '.1rem', md: '.8rem', lg: '1rem' },
                border: 'solid 0px',
                padding: '0px',
                height: '40px',
              }}
              onClick={() => {
                handleActiveButton(buttonsAction[0].route)
                navigate(buttonsAction[0].route)
              }}
            >
              {buttonsAction[0].icon}
            </Button>
            <Button
              variant="contained"
              color="primary"
              sx={{ fontSize: { xs: '.5rem', md: '.8rem', lg: '1rem' } }}
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
  MenuIcon: PropTypes.instanceOf(Element),
}

Header.defaultProps = {
  anchorNav: null,
  MenuIcon: null,
}

export default Header
