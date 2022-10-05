import * as React from 'react';
import {
 Box, Card, CardActions, CardContent, CardMedia, Button, Typography, Link,
} from '@mui/material'
import PropTypes from 'prop-types';

const MediaCard = ({ data }) => (
  <Card sx={{ maxWidth:1200, backgroundColor: '#bacffc', borderRadius: '20px', borde: 'solid 1px #0038FF', boxSizing:'border-box', display: 'flex'}}>
     <Box sx={{width:'100%', m:2}}>
        <CardMedia
          component="img"
          height="233"
          image={`images/${data.image}`}
          alt="new image"
          sx={{borderRadius:'20px'}}
        />
     </Box>
     <Box>
       <CardContent>
           <Typography gutterBottom variant="h5" component="div">
             {data.name}
           </Typography>
           <Typography variant="body2" color="#000000">
             {data.content}
           </Typography>
       </CardContent>
       <CardActions sx={{justifyContent:'center'}}>
            <Link href={`novedades/${data.id}`} style={{textDecoration:'none'}}>
              <Button variant="contained" color="secondary" sx={{ width:'190px', border: '1px solid', borderColor: '#0038FF' }}>Ver Novedad</Button>
            </Link>
       </CardActions>
     </Box>
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
