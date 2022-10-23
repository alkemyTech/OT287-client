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
    {items
      && items.map((item) => (
        <Box key={item.id} sx={{ maxHeight: '31.25rem', marginTop: '2rem' }}>
          <Box
            component="img"
            src={item.imageUrl}
            alt={item.text}
            sx={{ width: '100%', height: { xs: '250px', md: '500px' }, objectFit: 'cover' }}
          />
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
              fontSize={{ xs: '.75rem', lg: '1.2rem' }}
              style={{
                position: 'absolute',
                color: 'white',
                top: '40%',
                left: '50%',
                transform: 'translate(-50%,-40%)',
                textAlign: 'left',
                width: '80%',
              }}
            >
              {' '}
              {item.text}

            </Typography>
          ) : null }
        </Box>
      ))}
  </Carousel>
)

Slider.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    order: PropTypes.number,
    imageUrl: PropTypes.string,
  })),
}
Slider.defaultProps = {
  items: null,
}

export default Slider
