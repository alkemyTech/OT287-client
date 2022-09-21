import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { PropTypes } from 'prop-types'

const Loader = ({
  height, width, color, radius,
}) => (
  <ThreeDots
    height={height}
    width={width}
    radius={radius}
    color={color}
    ariaLabel="three-dots-loading"
    visible
  />
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
