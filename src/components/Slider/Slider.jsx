import React from 'react'
import PropTypes from 'prop-types';
import Carousel from 'react-material-ui-carousel'
import Box from '@mui/material/Box';
import CircleIcon from '@mui/icons-material/Circle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Typography } from '@mui/material';
import NextIcon from './NextIcon'

const Slider = ({ items }) => (
  <Carousel
    animation="slide"
    interval={6000}
    NextIcon={<NextIcon direction="right" />}
    PrevIcon={<NextIcon direction="left" />}
    indicators={false}
    IndicatorIcon={<CircleIcon fontSize={useMediaQuery('(min-width:600px)') ? 'medium' : 'small'} />}
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
        opacity: 0,
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
          <Box component="img" src={item.imageUrl} alt={item.text} sx={{ width: '100%', height: { xs: '250px', md: '500px' }, objectFit: 'cover' }} />
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              backgroundColor: 'rgba(0,0,0,.3)',
            }}
          />
          {item.text ? (
            <Typography
              fontSize={{ xs: '.5rem', md: '.8rem', lg: '1.3rem' }}
              style={{
                position: 'absolute',
                color: 'white',
                bottom: 80,
                left: '47%',
                transform: 'translateX(-50%)',
                textAlign: 'left',
                width: '80%',
              }}
            >
              {' '}
              {item.text}

            </Typography>
          ) : null }
          {item.title ? (
            <Typography
              fontSize={{ xs: '.8rem', md: '1rem', lg: '2.5rem' }}
              style={{
                fontWeight: 700,
                position: 'absolute',
                color: 'white',
                bottom: 220,
                left: '47%',
                transform: 'translateX(-50%)',
                textAlign: 'left',
                width: '80%',
              }}
            >
              {' '}
              {item.title}

            </Typography>
          ) : null }

        </Box>
      ))
    }
  </Carousel>
)

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    imageUrl: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
}

export default Slider
