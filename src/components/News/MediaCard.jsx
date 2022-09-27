import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import Link from '@mui/material/Link';

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

