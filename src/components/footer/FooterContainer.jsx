import React, { useState, useEffect } from 'react'
import Footer from './Footer'
import httpService from '../../services/httpService'

const mockedData = {
  logo: 'https://i.imgur.com/nIclrvm.png',
  menu: [
    {
      id: 1,
      route: '/',
      text: 'inicio',
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
      route: '/actividades',
      text: 'Actividades',
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

const FooterContainer = () => {
  const [data, setData] = useState({
    logo: '',
    menu: '',
    socials: {
      email: '',
      facebook: '',
      instagram: '',
      linkedin: '',
    },
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  useEffect(() => {
    (async () => {
      try {
        const getData = await httpService('get', 'organizations/1/public')
        setData({
          logo: getData.body.image,
          socials: {
            email: getData.body.email,
            facebook: getData.body.fbUrl,
            instagram: getData.body.igUrl,
            linkedin: getData.body.ldUrl,
          },
        })
      } catch (error) {
        setErrorStatus(error.response.status)
        setErrorMessage(error.response.statusText)
      }
    })()
  }, [])

  return (
    <div>
      <Footer
        logo={mockedData.logo}
        menu={mockedData.menu}
        socials={data.socials}
        error={errorStatus}
        errorMessage={errorMessage}
      />
    </div>
  )
}

export default FooterContainer
