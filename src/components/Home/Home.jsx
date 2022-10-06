import React from 'react'
import PropTypes from 'prop-types'
import {
  Box, Typography
} from '@mui/material'
import { Link } from 'react-router-dom'
import Slider from '../Slider/Slider'
import NewsCards from '../News/NewsCards'
import MembersCards from '../Members/MembersCards'


const Home = ({ news, members, slider, error, errorMessage }) => (
  <Box>
    <Slider items={slider} />
    <Box sx={{mr:'100px', ml:'100px', mt:'50px'}} >
       <Typography
       fontWeight={600} 
       fontSize={48} 
       color={'#000000'}>
        Hola! Bienvenidx</Typography>
       <Typography 
       fontWeight={600} 
       fontSize={32} 
       color={'#000000'}> 
       Nuestro Staff</Typography>
      <Box sx={{textAlign: 'right'}}   >
        <Link style={{textDecoration:'none'}} to={'/sobre-nosotros'}> Ver todos {`>`} </Link>
       </Box>
      <MembersCards
      data={members}
      error={error}
      errorMessage={errorMessage}
      />
      <Typography 
      fontWeight={600} 
      fontSize={32} 
      color={'#000000'}> Ultimas novedades</Typography>
      <Box sx={{textAlign: 'right'}}>
          <Link style={{textDecoration:'none'}} to={'/novedades'} > Ver todos {`>`} </Link>
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
