import * as React from 'react';
import {
  Card, CardMedia, Typography,
} from '@mui/material'
import PropTypes from 'prop-types';

const MediaCard = ({ data }) => (
  <Card sx={{ maxWidth: 212, borderRadius: '20px', position: 'relative' }}>
    <CardMedia
      component="img"
      height="234"
      image={`images/${data.image}`}
      alt="member image"
    />
    <Typography style={{
      position: 'absolute',
      color: 'white',
      bottom: 30,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: 24,
      textAlign: 'center',
      width: '100%',
    }}
    >
      {' '}
      {data.name}

    </Typography>
    <Typography style={{
      position: 'absolute',
      color: 'white',
      bottom: 10,
      left: '50%',
      transform: 'translateX(-50%)',
      fontSize: 14,
      textAlign: 'center',
      width: '100%',
    }}
    >
      Ceo/CoFounder

    </Typography>
  </Card>
)

MediaCard.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
};

export default MediaCard
