import React from 'react'
import { MagnifyingGlass } from 'react-loader-spinner'
import { PropTypes } from 'prop-types'
import { Box } from '@mui/material'

const Loader = ({
  height, width, color, radius,
}) => (
  <Box  
  style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
    }}>
      <MagnifyingGlass
        height={height}
        width={width}
        radius={radius}
        color={color}
        ariaLabel="three-dots-loading"
        visible
      />
  </Box>
)

Loader.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  color: PropTypes.string,
  radius: PropTypes.string,
}

Loader.defaultProps = {
  height: '70',
  width: '70',
  color: '#000',
  radius: '6',
}
export default Loader
