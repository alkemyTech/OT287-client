import * as React from 'react';
import {
  Card, CardContent, CardMedia, Typography,
} from '@mui/material'
import PropTypes from 'prop-types';

const MediaCard = ({ data }) => (
  <Card sx={{ maxWidth: 212 }}>
    <CardMedia
      component="img"
      height="234"
      image={`images/${data.image}`}
      alt="member image"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        {data.name}
      </Typography>
    </CardContent>
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
