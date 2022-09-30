import React from 'react'
import PropTypes from 'prop-types';
import { Typography, Container, Box } from '@mui/material'

// eslint-disable-next-line no-unused-vars
const Activity = ({ data, loading, error }) => {
  if (loading) {
    return <h1>loading....</h1>
  }

  if (!data) {
    return <h1> no hay nada </h1>
  }

  return (
    <Container sx={{ my: 10 }}>
      <Typography variant="h2" sx={{ fontSize: '1.5rem', fontWeight: 600 }}>{ data.name }</Typography>
      <Typography variant="body2" component="p" sx={{ mt: 1, mb: 2 }}>{ data.content }</Typography>
      <Box component="img" src={data.image} alt={data.name} sx={{ width: '100%', borderRadius: '1.25rem' }} />
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
