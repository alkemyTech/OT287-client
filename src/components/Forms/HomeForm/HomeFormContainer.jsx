import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import HomeForm from './HomeForm'

const HomeFormContainer = () => {
  const [org, setOrg] = useState(null);
  const [home, setHome] = useState(null);

  const getHomeData = useCallback(async () => {
    const orgDataResponse = await axios.get('http://localhost:3003/organizations/1/public')

    // falta un endpoint de slides para poder hacer el axios.
    const slidesData = [
      {
        id: 1, organizationId: 1, imageUrl: 'sumaMas.jpg', text: 'bolsones comida', order: 1,
      },
      {
        id: 2, organizationId: 1, imageUrl: 'bebidas.jpg', text: 'bolsones bebidas', order: 2,
      },
      {
        id: 3, organizationId: 1, imageUrl: 'ropa.jpg', text: 'bolsones ropa', order: 3,
      },
      {
        id: 4, organizationId: 2, imageUrl: 'leche.jpg', text: 'bolsones leche', order: 1,
      },
      {
        id: 5, organizationId: 2, imageUrl: 'fideos.jpg', text: 'bolsones fideos', order: 2,
      },
      {
        id: 6, organizationId: 2, imageUrl: 'varios.jpg', text: 'bolsones varios', order: 3,
      },
    ]

    const slideHome = []

    slidesData.map((slide) => (slide.organizationId === 1 ? slideHome.push(slide) : null))

    if (orgDataResponse && orgDataResponse.data.body) {
      setOrg(orgDataResponse.data.body)
      setHome(
        [
          {
            id: 1,
            label: 'welcomeText',
            text: orgDataResponse.data.body.welcomeText,
          },
          {
            id: 2,
            label: 'slideOne',
            text: slideHome[0].text,
            imageUrl: slideHome[0].imageUrl,
          },
          {
            id: 3,
            label: 'slideTwo',
            text: slideHome[1].text,
            imageUrl: slideHome[1].imageUrl,
          },
          {
            id: 4,
            label: 'slideThree',
            text: slideHome[2].text,
            imageUrl: slideHome[2].imageUrl,
          },
        ],
      )
    }
  }, [])

  useEffect(() => {
    getHomeData()
  }, [getHomeData])

  // falta ambos endpoint para editar en tabla organization el "welcomeText" y el endpoint para editar los "slides" - no hay controller de slides directamente
  const onSubmit = async (values) => {
    console.log('Form data', values)
  }

  return (
    <HomeForm data={home} onSubmit={onSubmit} org={org} />
  )
}

export default HomeFormContainer
