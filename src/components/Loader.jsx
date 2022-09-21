import React from 'react'
import { ThreeDots } from 'react-loader-spinner'

function Loader() {
  return (
    <ThreeDots
      height="70"
      width="70"
      radius="6"
      color="#000"
      ariaLabel="three-dots-loading"
      visible
    />
  )
}

export default Loader
