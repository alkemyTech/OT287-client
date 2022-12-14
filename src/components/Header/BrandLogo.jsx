import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';

const BrandLogo = ({ logo, breakpointDisplay, breakpointHidden }) => (
  <Box sx={{ maxWidth: '7rem', display: { [breakpointDisplay]: 'flex', [breakpointHidden]: 'none' } }}>
    <img src={logo} alt="somos-mas-logo" style={{ width: '100%' }} />
  </Box>
)

BrandLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  breakpointDisplay: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
  breakpointHidden: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired,
}

export default BrandLogo
