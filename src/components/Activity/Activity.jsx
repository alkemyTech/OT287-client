import React from 'react'
import PropTypes from 'prop-types';
import {
  Typography, Container, Box, Grid,
} from '@mui/material'

// eslint-disable-next-line no-unused-vars
const Activity = ({ data, loading, error }) => {
  if (loading) {
    return <h1>loading....</h1>
  }

  if (!data) {
    return <h1> no hay nada </h1>
  }

  return (
    <Container sx={{ my: { xs: 10, md: 14 } }}>
      <Grid container justifyContent="center">
        <Grid item md={5} sx={{ mr: { md: 5 } }}>
          <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, maxWidth: '37.5rem' }}>{ data.name }</Typography>
          <Typography variant="body2" component="p" sx={{ mt: 1, mb: 2, maxWidth: '37.5rem' }}>{ data.content }</Typography>
        </Grid>
        <Grid item md={4}>
          <Box
            component="img"
            src={data.image}
            alt={data.name}
            sx={{
              width: '100%', borderRadius: '1.25rem', maxWidth: { xs: '22rem', md: '18.75rem' }, transform: { md: 'rotate(5deg)' },
            }}
          />
        </Grid>
      </Grid>
    </Container>
  )
}

Activity.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }),
  loading: PropTypes.oneOf([true, false]).isRequired,
  error: PropTypes.string,
}

Activity.defaultProps = {
  data: null,
  error: null,
}

export default Activity
