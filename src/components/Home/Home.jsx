import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Typography, Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider'
import NewsCards from '../News/NewsCards'
import MembersCards from '../Members/MembersCards'

const Home = ({
  news, members, slider, error, errorMessage, location,
}) => (
  <Box sx={{ maxWidth: { sm: '1600px' }, margin: '0 auto', alignContent: 'center' }}>
    <Slider items={slider} />
    <Box sx={{ mr: { xs: '15px', lg: '100px' }, ml: { xs: '15px', lg: '100px' }, mt: '40px' }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contacto">
          <Button variant="contained" sx={{ mx: 'auto', my: '15px', display: 'block' }}>Contáctanos</Button>
          {' '}
        </Link>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
        <Typography
          fontWeight={600}
          color="#000000"
          sx={{
            fontSize: { xs: 20, md: 32 }, textAlign: { xs: 'center', lg: 'left' },
          }}
        >
          Nuestro Staff
        </Typography>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/sobre-nosotros">
          <Button variant="outlined" sx={{ mx: 'auto', my: '15px', display: 'block' }}>
            {' '}
            Ver todos
            {' >'}

          </Button>

        </Link>
      </Box>
      <MembersCards
        data={members}
        error={error}
        errorMessage={errorMessage}
        location={location}
      />
      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
        <Typography
          fontWeight={600}
          fontSize={32}
          color="#000000"
          sx={{ marginBottom: { xs: '30px' }, fontSize: { xs: 20, md: 32 }, textAlign: { xs: 'center', lg: 'left' } }}
        >
          Testimonios
        </Typography>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/testimonios">
          <Button variant="outlined" sx={{ mx: 'auto', my: '15px', display: 'block' }}>
            Ver todos
            {' >'}

          </Button>
        </Link>
      </Box>

      <Box display="flex" justifyContent="space-between" alignItems="center" mt={5}>
        <Typography
          fontWeight={600}
          fontSize={32}
          color="#000000"
          sx={{ marginBottom: { xs: '30px' }, fontSize: { xs: 20, md: 32 }, textAlign: { xs: 'center', lg: 'left' } }}
        >
          Últimas novedades
        </Typography>

        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/novedades">
          <Button variant="outlined" sx={{ mx: 'auto', my: '15px', display: 'block' }}>
            Ver todos
            {' >'}

          </Button>
        </Link>
      </Box>
      <Box display="flex" justifyContent="center">
        <NewsCards
          data={news}
          error={error}
          errorMessage={errorMessage}
        />
      </Box>
    </Box>
  </Box>
)
Home.propTypes = {
  news: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  slider: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  })).isRequired,
  members: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    imageUrl: PropTypes.string,
  })),
  error: PropTypes.number,
  errorMessage: PropTypes.string,
  location: PropTypes.string,
}

Home.defaultProps = {
  location: null,
  members: null,
  error: null,
  errorMessage: null,
}
export default Home
