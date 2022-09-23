import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function NextIcon({ direction }) {
  return (
    <Box sx={{
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '100%',
      padding: '.5rem',
    }}
    >
      <NavigateNextIcon fontSize="large" sx={{ color: '#333333', transform: direction === 'left' ? 'rotate(180deg)' : '' }} />
    </Box>
  )
}

NextIcon.propTypes = {
  direction: PropTypes.oneOf(['right', 'left']),
}

NextIcon.defaultProps = {
  direction: 'right',
}

export default NextIcon
