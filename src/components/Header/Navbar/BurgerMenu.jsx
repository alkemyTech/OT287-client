import React from 'react'
import PropTypes from 'prop-types';
import {
  Box, Typography, IconButton,
} from '@mui/material';
import HamburgerIcon from '@mui/icons-material/Menu';

const BurgerMenu = (props) => {
  const {
    menu, handleOpenMenu, handleCloseMenu, menuIsOpen, MenuIcon = null,
  } = props
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'right', mr: 4 }}>
      { MenuIcon || (
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <HamburgerIcon sx={{ color: 'black' }} />
      </IconButton>
      )}
      { menuIsOpen && (
        <Box sx={{
          width: '100%',
          height: '100vh',
          position: 'fixed',
          top: 0,
          left: 0,
          backgroundColor: '#FFFFFF',
          zIndex: 2000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          gap: '1.3rem',
        }}
        >
          { menu.map((page) => (
            <Box
              key={page.id}
              onClick={() => handleCloseMenu(page.route)}
              sx={{
                '&:hover': {
                  transform: 'scale(1.1)',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'transform 300ms',
                },
              }}
            >
              <Typography textAlign="center" color="textPrimary" sx={{ fontSize: '1.2rem' }}>{page.text}</Typography>
            </Box>
          ))}
        </Box>
      )}

    </Box>
  )
}

BurgerMenu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
  handleOpenMenu: PropTypes.func.isRequired,
  handleCloseMenu: PropTypes.func.isRequired,
  menuIsOpen: PropTypes.bool.isRequired,
  MenuIcon: PropTypes.instanceOf(Element),
}

BurgerMenu.defaultProps = {
  MenuIcon: null,
}

export default BurgerMenu
