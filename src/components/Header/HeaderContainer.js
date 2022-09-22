import React from 'react'
import Header from './Header'

const data = {
  logo: 'https://i.imgur.com/nIclrvm.png',
  menu: [
    {
      id: 1,
      route: '/home',
      text: 'Inicio',
    },
    {
      id: 2,
      route: '/aboutUs',
      text: 'Nosotros',
    },
    {
      id: 3,
      route: '/news',
      text: 'Novedades',
    },
    {
      id: 4,
      route: '/testimonials',
      text: 'Testimonios',
    },
    {
      id: 5,
      route: '/contacs',
      text: 'Contacto',
    },
    {
      id: 6,
      route: '/contributes',
      text: 'Contribuye',
    },
  ],
}

function HeaderContainer() {
  const [anchorNav, setAnchorNav] = React.useState(null);

  const handleOpenMenu = (event) => {
    setAnchorNav(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorNav(null);
  };

  return (
    <Header
      logo={data.logo}
      menu={data.menu}
      anchorNav={anchorNav}
      handleOpenMenu={handleOpenMenu}
      handleCloseMenu={handleCloseMenu}
    />
  )
}

export default HeaderContainer
