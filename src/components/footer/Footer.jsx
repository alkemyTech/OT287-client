import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'

function Footer({ logo, menu, contact }) {

  return (
    <Toolbar style={{
      backgroundColor: 'rgb(200,200,200)',
      position: 'absolute',
      bottom: 0,
      width: 'auto',
      height: '30%',
    }}
    >

      <div>
        <img src={logo} alt="" />
        {menu.map(elem => {

          return (
            <Link key={elem.id} style={{ color: 'inherit', textDecoration: 'none' }} to={elem.route}>
              <span>{elem.text}</span>
            </Link>
          )
        })}

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
