import React from 'react'
import PropTypes from 'prop-types';
import {
  Typography, Container, Box, Grid,
} from '@mui/material'
import Loader from '../Loader/Loader'

const Spinner = () => (
  <Container sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh',
  }}
  >
    <Loader />
  </Container>
)

const NotFound = () => (
  <Container sx={{
    display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh',
  }}
  >
    <Box>
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, maxWidth: '37.5rem' }}>404 - Not found</Typography>
      <Typography variant="body2" component="p" sx={{ mt: 1, mb: 2, maxWidth: '37.5rem' }}> No se encontró la actividad solicitada, por favor, prueba con otra dirección o inténtalo más tarde.</Typography>
    </Box>
  </Container>
)

const Activity = ({ data, loading, error }) => {
  if (loading) {
    return <Spinner />
  }

  if (!data || error) {
    return (
      <NotFound />
    )
  }

  return (
    <Container sx={{ my: { xs: 10, md: 14 } }}>
      <Grid container justifyContent="center">
        <Grid item md={5} sx={{ mr: { md: 5 } }}>
          <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600, maxWidth: '37.5rem' }}>{ data.name }</Typography>
          <Typography
            variant="body2"
            component="p"
            sx={{ mt: 1, mb: 2, maxWidth: '37.5rem' }}
            dangerouslySetInnerHTML={{ __html: data.content }}
          />
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
