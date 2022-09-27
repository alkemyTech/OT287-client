import * as React from 'react';
import { 
  Card, CardActions, CardContent, CardMedia, Button, Typography, Link
} from '@mui/material'
import PropTypes from 'prop-types';

const MediaCard = ({data}) => {


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image={`images/${data.image}`} 
        alt="unsplash image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>  
        <Typography variant="body2" color="text.secondary">
          {data.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href={`news/${data.id}`}> 
          <Button size="small">Learn More</Button>
        </Link>
      </CardActions>
    </Card>
  );
}

  MediaCard.propTypes = {
    data: PropTypes.shape({
      name: PropTypes.string,
      image: PropTypes.string,
      createdAt:PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  };

export default MediaCard

