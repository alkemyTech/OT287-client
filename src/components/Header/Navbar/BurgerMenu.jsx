import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import MenuItem from '@mui/material/MenuItem';

const BurgerMenu = ({
  menu, handleOpenMenu, handleCloseMenu, anchorNav,
}) => {
  return (
    <Box sx={{ display: { xs: 'flex', md: 'none' }, justifyContent: 'right', mr: 4 }}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenMenu}
        color="inherit"
      >
        <MenuIcon sx={{ color: 'black' }} />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorNav)}
        onClose={handleCloseMenu}
        sx={{
          display: { xs: 'block', md: 'none' },
        }}
      >
        {menu.map((page) => (
          <MenuItem key={page.id} onClick={handleCloseMenu}>
            <Typography textAlign="center">{page.text}</Typography>
          </MenuItem>
        ))}
      </Menu>
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
  anchorNav: PropTypes.instanceOf(Element),
}

BurgerMenu.defaultProps = {
  anchorNav: null,
}

export default BurgerMenu
