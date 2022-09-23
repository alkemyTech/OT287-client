import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Navbar({ menu }) {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'right' }}>
      {menu.map((page) => (
        <Button
          key={page.id}
          sx={{
            my: 2, mx: { md: 0.5, lg: 0.8 }, display: 'block', color: 'black', fontSize: { lg: '1rem' },
          }}
        >
          {page.text}
        </Button>
      ))}
    </Box>
  )
}

Navbar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
}

export default Navbar
