import React from 'react';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import './newById.css'

const NewById = ({ data }) => (

  <Grid item xs={12} height="100%" width="100%" maxWidth="1600px">
    <Paper
      sx={{
        height: '30vw',
        minHeight: '240px',
        minWidth: '250px',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${data.image})`,
      }}
    >
      <img style={{ display: 'none' }} src={data.image} alt={data.name} />
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
    </Paper>
    <Grid container>
      <Grid item md={12}>
        <Box
          sx={{
            margin: '30px 0 10px 0',
            minWidth: '250px',
          }}
        >
          <Typography
            className="newByIdTitle"
            color="inherit"
            sx={{ typography: { lg: 'h4', xs: 'h5' }, margin: '10px 0' }}
          >
            {data.name}
          </Typography>
          <Typography
            className="newByIdParagraph"
            sx={{ typography: { lg: 'h6', xs: 'p' } }}
            color="inherit"
            paragraph
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
        </Box>
      </Grid>
    </Grid>
  </Grid>
);

NewById.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    categoryId: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

export default NewById;
