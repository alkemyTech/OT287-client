import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
// import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Header from './Header'

const HeaderContainer = ({ MenuIcon }) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [activeButton, setActiveButton] = useState('/')
  // const userData = useSelector((state) => state.auth.userData);
  const isLogged = Boolean(localStorage.getItem('user'))
  const isAdmin = isLogged && JSON.parse(localStorage.getItem('user')).roleId === 1

  const data = {
    logo: 'https://i.imgur.com/nIclrvm.png',
    menu: [
      {
        id: 1,
        route: '/',
        text: 'Inicio',
      },
      {
        id: 2,
        route: '/sobre-nosotros',
        text: 'Nosotros',
      },
      {
        id: 3,
        route: '/novedades',
        text: 'Novedades',
      },
      {
        id: 4,
        route: '/testimonios',
        text: 'Testimonios',
      },
      {
        id: 5,
        route: '/contacto',
        text: 'Contacto',
      },
    ],
    buttonsAction: [
      {
        id: 7,
        route: (isLogged ? '/logout' : '/login'),
        icon: (isLogged ? (
          <ExitToAppIcon
            sx={{
              color: '#DB5752',
              width: 'auto',
              height: { sx: '35px', sm: '30px', md: '40px' },
              margin: '10px',
            }}
          />
        ) : (
          <LoginIcon
            sx={{
              color: '#DB5752',
              width: 'auto',
              height: { sx: '35px', sm: '30px', md: '40px' },
              margin: '10px',
            }}
          />
        )),
        text: (isLogged ? 'Log out' : 'Log in'),
      },
      {
        id: 8,
        // eslint-disable-next-line no-nested-ternary
        route: (isLogged ? isAdmin ? '/back-office' : '/mi-perfil' : '/registrate'),
        // eslint-disable-next-line no-nested-ternary
        text: (isLogged ? isAdmin ? 'Back Office' : 'Mi Perfil' : 'Registrate'),
      },
    ],
  }

  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    if (location.pathname !== activeButton) {
      setActiveButton(location.pathname)
    }
  }, [activeButton, location])

  const handleActiveButton = (buttonName) => {
    setActiveButton(buttonName)
  }

  const handleOpenMenu = () => {
    setMenuIsOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuIsOpen(false);
  };

  return (
    <Header
      logo={data.logo}
      menu={data.menu}
      MenuIcon={MenuIcon}
      buttonsAction={data.buttonsAction}
      menuIsOpen={menuIsOpen}
      handleOpenMenu={handleOpenMenu}
      handleCloseMenu={handleCloseMenu}
      navigate={navigate}
      handleActiveButton={handleActiveButton}
      activeButton={activeButton}
      isLogged={isLogged}
    />
  )
}

HeaderContainer.propTypes = {
  MenuIcon: PropTypes.instanceOf(Element),
}

HeaderContainer.defaultProps = {
  MenuIcon: null,
}

export default HeaderContainer
