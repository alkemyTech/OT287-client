import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import {
  Toolbar, Box, Stack, Typography,
} from '@mui/material'

import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import AddAPhotoRoundedIcon from '@mui/icons-material/AddAPhotoRounded';

function Footer({ logo, menu, contact }) {
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
      <Box sx={{ width: '100%' }}>
        <hr />
        <Box
          padding={{ xs: '0 40px', lg: '0 80px' }}
          sx={{
            position: 'relative',
            left: { lg: '42%', xs: '27%' },
            bottom: '30px',
            height: '50px',
            backgroundColor: 'rgb(240,240,240)',
          }}
          component="img"
          src={logo}
          alt="ong image"

        />

        <Stack justifyContent="center" direction="row" spacing={{ xs: 2, lg: 6 }}>
          {menu.map((elem) => (
            <Typography key={elem.id} fontSize={{ xs: '10px', lg: '1rem' }}>
              <Link style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route}>
                <span>{elem.text}</span>
              </Link>
            </Typography>
          ))}
        </Stack>

        <hr />
        <Stack justifyContent="center" direction="row" spacing={{ xs: 2, lg: 6 }}>
          <AlternateEmailRoundedIcon />
          <FacebookRoundedIcon />
          <LocalPhoneRoundedIcon />
          <AddAPhotoRoundedIcon />
        </Stack>
        <p style={{ textAlign: 'center' }}>2022 by Alkemy. All Rights Reserved</p>
      </Box>
    </Toolbar>
  )
}

Footer.defaultProps = {
  logo: 'logo not found',
}

Footer.propTypes = {
  logo: PropTypes.string,
  menu: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    route: PropTypes.string,
  })).isRequired,
  contact: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
    url: PropTypes.string,
  })).isRequired,
}

export default Footer
