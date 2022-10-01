import React, { useEffect, useState } from 'react'
// import { useSelector } from 'react-redux'
import { useNavigate, useLocation } from 'react-router-dom';
import Header from './Header'

const HeaderContainer = () => {
  const [anchorNav, setAnchorNav] = React.useState(null);
  const [activeButton, setActiveButton] = useState('/')
  // const userData = useSelector((state) => state.auth.userData);
  const isLogged = Boolean(localStorage.getItem('user'))
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
      {
        id: 6,
        route: '/contribuye',
        text: 'Contribuye',
      },
    ],
    buttonsAction: [
      {
        id: 7,
        route: (isLogged ? '/logout' : '/login'),
        text: (isLogged ? 'Cerrar sesion' : 'Log in'),
      },
      {
        id: 8,
        route: (isLogged ? '/mi-perfil' : '/registrate'),
        text: (isLogged ? 'Mi Perfil' : 'Registrate'),
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

  const handleOpenMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseMenu = (route) => {
    navigate(route)
    setAnchorNav(null);
  };

  return (
    <Header
      logo={data.logo}
      menu={data.menu}
      buttonsAction={data.buttonsAction}
      anchorNav={anchorNav}
      handleOpenMenu={handleOpenMenu}
      handleCloseMenu={handleCloseMenu}
      navigate={navigate}
      handleActiveButton={handleActiveButton}
      activeButton={activeButton}
      isLogged={isLogged}
    />
  )
}

export default HeaderContainer
