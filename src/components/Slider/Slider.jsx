import React from 'react'
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import useMediaQuery from '@mui/material/useMediaQuery';
import NextIcon from './NextIcon'

const Slider = ({ items }) => { 
  return (
    <Carousel
    navButtonsAlwaysInvisible
      stopAutoPlayOnHover
      animation="slide"
      interval={6000}
      NextIcon={<NextIcon direction="right" />}
      PrevIcon={<NextIcon direction="left" />}
      indicators={false}
      IndicatorIcon={<CircleIcon  fontSize={useMediaQuery('(min-width:600px)') ? 'medium' : 'small'} />}
      indicatorIconButtonProps={{
        style: {
          zIndex: 1,
          color: '#FFFFFF',
          padding: '.5rem',
          position: 'relative',
          bottom: '1rem',
        },
      }}
      activeIndicatorIconButtonProps={{
        style: {
          color: '#0038FF',
        },
      }}
      navButtonsProps={{
        style: {
          width: 50,
          height: 50,
        },
      }}
    >
      {
                items.map((item) => (
                  <Box key={item.id} sx={{ maxHeight: '31.25rem', marginTop: '2rem' }}>
                    <Box component="img" src={item.imageUrl} alt={item.text} sx={{width: '100%', height: {xs: '250px', md: '600px'}, objectFit: 'cover'}} />
                  </Box>
                ))
        }
    </Carousel>
  )
}

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default Slider
