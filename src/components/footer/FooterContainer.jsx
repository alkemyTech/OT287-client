import React from 'react'
import Footer from './Footer'

const data = {
  logo: 'https://i.imgur.com/nIclrvm.png',
  menu: [
    {
      id: 1,
      route: '/home',
      text: 'inicio',
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
  contact: [
    {
      id: 1,
      //   route: `/organizations/${id}/public`,
      text: 'instagram',
      url: 'https://www.instagram.com/educandosomosmas/',
    },
    {
      id: 2,
      //   route: `/organizations/${id}/public`,
      text: 'facebook',
      url: 'https://www.facebook.com/profile.php?id=100077792335889',
    },
    {
      id: 3,
      //   route: `/organizations/${id}/public`,
      text: 'telefono',
      url: '1160112988',
    },
    {
      id: 4,
      //   route: `/organizations/${id}/public`,
      text: 'email',
      url: 'somosfundacionmas@gmail.com',
    },

  ],

}
const FooterContainer = () => (

  <div>
    <Footer
      logo={data.logo}
      menu={data.menu}
      contact={data.contact}
    />
  </div>

)

export default FooterContainer
