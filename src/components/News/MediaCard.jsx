import * as React from 'react';
import {
  Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Link,
} from '@mui/material'
import PropTypes from 'prop-types';
import './newById.css'

const MediaCard = ({ data }) => (
  <Card sx={{
    width: '450px',
    padding: '5px',
    backgroundColor: '#bacffc',
    borderRadius: '20px',
    borde: 'solid 1px #0038FF',
    boxSizing: 'border-box',
    display: 'flex',
  }}
  >
    <Box width="200px">
      <CardMedia
        component="img"
        image={`${data.image}`}
        alt="new image"
        sx={{
          margin: '10px', borderRadius: '20px', width: '196px', height: '233px',
        }}
      />
    </Box>
    <Box display="flex" flexDirection="column">
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {data.name}
        </Typography>
        <Typography className="contentNewAbstract" color="#000000" sx={{ fontSize: '12px' }}>
          {data.content}
        </Typography>
      </CardContent>
      <CardActions sx={{
        height: '100%', justifyContent: 'flex-end', alignItems: 'flex-end',
      }}
      >
        <Link href={`novedades/${data.id}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" color="secondary" sx={{ fontSize: { xs: '.6rem', md: '.8rem', lg: '.8rem' }, border: '1px solid', borderColor: '#0038FF' }}>Ver Más</Button>
        </Link>
      </CardActions>
    </Box>
  </Card>
)

MediaCard.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
  })).isRequired,
};

export default MediaCard
