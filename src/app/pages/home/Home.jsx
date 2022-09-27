import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Typography, Grid, Button,
} from '@mui/material'
import Slider from '../../../components/Slider/Slider'

const Home = ({ news, slider }) => (
  <Box>
    <h1 style={{ textAlign: 'left' }}>Bienvenido</h1>
    <Slider items={slider} />
    <h2>Ultimas novedades</h2>
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, auto)', padding: { xs: '15px' } }}>
      {news.length > 1 ? news.map((elem) => (
        <Grid key={elem.createdAt} container height="230px">
          <Grid sx={{ position: { lg: 'relative' }, left: { lg: '120px' } }} item xs={6} lg={4}>
            <Box sx={{ backgroundColor: '#448fdf', width: { lg: '650px', xs: '150px' } }} border={2} borderColor="#264f7c" borderRadius="20px">
              <Typography
                sx={{
                  textAlign: 'center', position: { lg: 'relative' }, left: { xs: '100px', lg: ' 210px' }, width: { xs: 'auto', lg: '400px' }, color: '#162f4a',
                }}
                component="h1"
                fontSize={{ xs: '9px', lg: '12px' }}
              >
                {elem.name}
                <p style={{ wordBreak: 'break-all' }}>{elem.content}</p>
                <Button sx={{ color: 'white', backgroundColor: '#264f7c' }}>ver novedad</Button>
              </Typography>
              <Box
                component="img"
                src={elem.image}
                alt="image not found"
                sx={{
                  position: 'relative', bottom: '135px', left: '30px', width: '130px', height: '120px', float: 'left', opacity: { xs: '0', lg: '1' },
                }}

              />
            </Box>
          </Grid>
        </Grid>
      )) : <p>no news to show</p>}
    </Box>
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
