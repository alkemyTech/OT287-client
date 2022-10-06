import React from 'react';
import {
  Box, Grid, Paper, Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import './newById.css'

const NewById = ({ data }) => (

  <Grid item xs={12} height="100vh" width="100%">
    <Paper
      sx={{
        height: '60%',
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
            position: 'relative',
            p: { xs: 1, md: 2 },
            pr: { md: 0 },
          }}
        >
          <Typography className="newByIdTitle" variant="h3" color="inherit" gutterBottom>
            {data.name}
          </Typography>
          <Typography className="newByIdParagraph" variant="h6" color="inherit" paragraph>
            {data.content}
          </Typography>

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
