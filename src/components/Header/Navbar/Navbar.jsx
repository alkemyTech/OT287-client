import React from 'react'
import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';

const Navbar = ({
  menu, navigate, handleActiveButton, activeButton,
}) => (
  <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'right' }}>
    {menu.map((page) => (

      <Button
        key={page.id}
        onClick={() => {
          handleActiveButton(page.route)
          navigate(page.route)
        }}
        sx={{
          my: 2, mx: { md: 0.5, lg: 0.8 }, display: 'block', color: 'black', fontSize: { lg: '1rem' }, backgroundColor: activeButton === page.route ? '#ffcdd2' : null,
        }}
      >
        {page.text}
      </Button>

    ))}
  </Box>
)

Navbar.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
  navigate: PropTypes.func.isRequired,
  handleActiveButton: PropTypes.func.isRequired,
  activeButton: PropTypes.string.isRequired,
}

export default Navbar
