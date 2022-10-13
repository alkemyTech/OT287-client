import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Button, Grid, Typography,
} from '@mui/material'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TestimonialCard from './TestimonialCard'

const Testimonials = ({ testimonials, error, errorMessage }) => {
  const user = useSelector((state) => state.auth.userData)

  return (
    <Grid
      container
      flexDirection="column"
      padding={{ xs: '0 1.5rem 1.5rem', md: '0 2.5rem 2.5.rem' }}
    >
      {error && (
      <Box component="span" color="red">{error === 409 ? 'Error server conexion' : errorMessage}</Box>
      )}
      <Grid item container justifyContent="center">
        <Typography mb="3rem" variant="h4" fontWeight="bold">Testimonios</Typography>
      </Grid>
      <Grid item container spacing={3} justifyContent="center">
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </Grid>
        ))}
      </Grid>
      <Grid item container justifyContent="center" flexDirection="column" mt="1.5rem">
        <Grid item container width="100%" justifyContent={{ xs: 'center', md: 'start' }}>
          <Link style={{ textDecoration: 'none', color: 'inherit' }} to={user === null ? '/login' : '/testimonios/crear-testimonio'}>
            <Button variant="contained" sx={{ mx: 'auto', my: '15px' }}> Agregrar testimonio</Button>
          </Link>
        </Grid>
        <Grid item container width="100%" justifyContent={{ xs: 'center', md: 'start' }}>
          <Link style={{ textDecoration: 'none' }} to="/">
            <Button variant="outlined" sx={{ mx: 'auto', my: '15px' }}> Ir a inicio</Button>
          </Link>
        </Grid>
      </Grid>
    </Grid>
  )
}

Testimonials.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
  })),
  error: PropTypes.string,
  errorMessage: PropTypes.string,
}

Testimonials.defaultProps = {
  testimonials: null,
  error: null,
  errorMessage: null,
}

export default Testimonials
