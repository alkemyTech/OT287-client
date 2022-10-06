import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Toolbar, Box, Stack, Typography, IconButton,
} from '@mui/material'

import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

function Footer({ logo, menu, socials }) {
  return (
    <Toolbar
      disableGutters
      sx={{
        width: '100%',
        backgroundColor: 'rgb(240,240,240)',
        padding: 0,
        height: '240px',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ width: '100%',  backgroundColor: 'rgb(240,240,240)', maxHeight: '100%' }}>
        <hr />
        <Box
          sx={{
            position: 'relative',
            left: {xs:'40%', sm:'45%', md:'47%'},
            bottom: '30px',
            height: '50px'
          }}
          component="img"
          src={logo}
          alt="ong image"
        />

        <Stack  
        sx={{
          flexDirection:{xs:'column', sm:'row'},
          alignItems:{xs:'center'},
          justifyContent:{sm:'space-around'},
          margin:{md:'0 10% 0 10%', lg:'0  20% 0 20%'}
        }}
        spacing={{xs:1}}
        >
          {menu.map((elem) => (
            <Typography key={elem.id}  marginTop={{xs:'8px'}}
            >
              <Link style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route}>
                <span  >{elem.text}</span>
              </Link>
            </Typography>
          ))}
        </Stack>

        <hr />
        <Stack justifyContent="center" direction="row" spacing={{ xs: 2, lg: 6 }}>
          <IconButton color="inherit">
            <a href={`mailto:${socials.email}`}>
              <AlternateEmailRoundedIcon sx={{ fill: 'unset' }} />
            </a>
          </IconButton>
          <IconButton color="inherit" sx={{ textDecoration: 'none' }}>
            <a href={socials.facebook} target="_blank" rel="noopener noreferrer">
              <FacebookIcon sx={{ fill: 'unset' }} />
            </a>
          </IconButton>
          <IconButton color="inherit">
            <a href={socials.instagram} target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ fill: 'unset' }} />
            </a>
          </IconButton>
          <IconButton color="inherit">
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fill: 'unset' }} />
            </a>
          </IconButton>
        </Stack>
        <p style={{ textAlign: 'center' }}>2022 by Alkemy. All Rights Reserved</p>
      </Box>
    </Toolbar>
  )
}

Footer.propTypes = {
  logo: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
  socials: PropTypes.shape({
    email: PropTypes.string,
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    linkedin: PropTypes.string,
  }).isRequired,
}

Footer.defaultProps = {
  logo: 'logo not found',
}

export default Footer