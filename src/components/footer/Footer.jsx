import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

function Footer({ logo, menu, contact }) {
  return (
    <Toolbar
      disableGutters={'false'}
      sx={{
        width: '100%',
        backgroundColor: 'rgb(200,200,200)',
        position: 'absolute',
        margin: 0,
        padding: 0,
        bottom: 0,
        height: '30%',
        justifyContent: 'center',
      }}
    >
      <div style={{ width: '100%' }}>
        <hr />
        <Box
          sx={{
            position: 'relative',
            left: { lg: '47%', xs: '38%' },
            bottom: '30px',
            height: '50px',
            padding: '0',
          }}
          component="img"
          src={logo}
          alt="ong image"

        />

        <Stack justifyContent="center" direction="row" spacing={{ xs: 2, lg: 6 }}>
          {menu.map((elem) => {
            return (
              <Typography key={elem.id} fontSize={{ xs: '10px', lg: '1rem' }}>
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route}>
                  <span>{elem.text}</span>
                </Link>
              </Typography>
            )
          })}
        </Stack>

        <hr />
        <Stack justifyContent="center" direction="row" spacing={{ xs: 2, lg: 6 }}>
          {contact.map((data) => {
            return (
              <Typography key={data.id} fontSize={{ xs: '12px', lg: '1rem' }} sx={{ textAlign: 'center' }}>
                <span>{data.text}</span>
              </Typography>
            )
          })}
        </Stack>
        <p style={{ textAlign: 'center' }}>2022 by alkemy all rights reserved</p>
      </div>
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

// poder hacer un tag <hr> creo q era
