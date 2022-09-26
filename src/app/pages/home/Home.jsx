import React from 'react'
import PropTypes from 'prop-types'
import {
  Toolbar, Box, Stack, Typography, Grid, Button
} from '@mui/material'
import Slider from '../../../components/Slider/Slider'

const Home = ({ news, slider }) => (
  <Box>
    <h1 style={{ textAlign: 'left' }}>Bienvenido</h1>
    <Slider items={slider} />
    {news.length > 1 ? news.map((elem) => (

      <Grid sx={{ gridTemplateColumns: '10px 10px' }} key={elem.createdAt} container>
        <Grid item xs={7} lg={6}>
          <Box sx={{ backgroundColor: '#4c9ff8' }} border={3} borderColor="#9ac9fb" borderRadius={1}>
            <Typography sx={{ textAlign: 'center', position: { lg: 'relative' },  left: { xs: '100px', lg: ' 400px' }, width: { xs: 'auto', lg: '400px' } }} component="h1">
              {elem.name}
              <p style={{ wordBreak: 'break-all' }}>{elem.content}</p>
              <Button sx={{ color: 'white' }}>ver novedad</Button>
            </Typography>
            <img style={{ width: '40px', height: '40px', float: 'left' }} src={elem.image} alt="" />
          </Box>
        </Grid>
        <Grid>we</Grid>
      </Grid>

    )) : <p>no news to show</p>}
  </Box>
)

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
