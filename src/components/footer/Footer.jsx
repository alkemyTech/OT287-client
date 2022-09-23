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
      style={{
        backgroundColor: 'rgb(200,200,200)',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '30%',
        margin: 0,
        padding: 0,
        justifyContent: 'center',
      }}
    >

      <div>
        <img src={logo} alt="ong logo" />

        <Stack direction="row" spacing={{ xs: 2, lg: 6 }}>
          {menu.map((elem) => {
            return (
              <Typography key={elem.id} justifyContent="center" alignItems="center" fontSize={{ xs: '12px', lg: '1rem' }}>
                <Link style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route}>
                  <span>{elem.text}</span>
                </Link>
              </Typography>
            )
          })}
          {/* {contact.map((data) => {
            return (
              <span key={data.id}>{data.text}</span>
            )
          })} */}
        </Stack>
        <hr />
        {/* <h2>2022 by alkemy all rights reserved</h2> */}
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
