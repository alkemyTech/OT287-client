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
  news, members, slider, error, errorMessage,
}) => (
  <Box sx={{ maxWidth: '1600px', margin: '0 auto', alignContent: 'center' }}>
    <Slider items={slider} />
    <Box sx={{ mr: '100px', ml: '100px', mt: '50px' }}>

      <Typography
        fontWeight={600}
        color="#000000"
        whiteSpace="initial"
        sx={{ fontSize: { xs: 32, md: 48 } }}
      >
        <Typography
          fontWeight={600}
          color="#000000"
          maxWidth="400px"
          sx={{
            position: 'relative', top: { lg: '8rem' }, margin: '0 auto', textAlign: 'center', left: { lg: '1rem' }, fontSize: { xs: 12, sm: 18 },
          }}
        >
          Somos Mas es una ong  que desde 1997 trabajamos con los chicos y chicas,
          mamás y papás, abuelos y vecinos del barrio La Cava generando
          procesos de crecimiento y de inserción social

          <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/contacto">
            <Button variant="contained" sx={{ top: { xs: '2px', lg: '30px' } }}>Contactanos</Button>
            {' '}
          </Link>
        </Typography>
        Bienvenidx!
      </Typography>
      <Typography
        fontWeight={600}
        fontSize={32}
        color="#000000"
      >
        Nuestro Staff
        {' '}
      </Typography>
      <Box sx={{ textAlign: 'right', bottom: { xs: '12px', position: 'relative' } }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/sobre-nosotros">
          Ver staf
          {'>'}
        </Link>
      </Box>
      <MembersCards
        data={members}
        error={error}
        errorMessage={errorMessage}
      />
      <Typography
        fontWeight={600}
        fontSize={32}
        color="#000000"
      >
        Ultimas novedades
      </Typography>
      <Box sx={{ textAlign: 'right' }}>
        <Link style={{ textDecoration: 'none', color: 'inherit' }} to="/novedades">
          Ver todos
          {'>'}
        </Link>
      </Box>
      <NewsCards
        data={news}
        error={error}
        errorMessage={errorMessage}
      />

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
}

export default Home
