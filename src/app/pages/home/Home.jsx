import React from 'react'
import PropTypes from 'prop-types'
import {
  Toolbar, Box, Stack, Typography,
} from '@mui/material'
import Slider from '../../../components/Slider/Slider'

const Home = ({ news, slider }) => {
  console.log(news)
  return (
    <div>
      <h1>Bienvenido</h1>
      <Slider items={slider} />
      {news.length > 1 ? news.map((elem) => (
        <Box
          key={elem.createdAt}
        >
          <h1>{elem.name}</h1>
          <p>{elem.content}</p>
          <img src={elem.image} alt="" />

        </Box>
      )) : <p>no news to show</p>}
    </div>
  )
}

Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  slider: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  })).isRequired,
}

export default Home
