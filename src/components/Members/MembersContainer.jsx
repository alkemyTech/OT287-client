import React, {
  useCallback, useState, useEffect,
} from 'react'
import { Box, Typography } from '@mui/material'
import MembersCards from './MembersCards'
import httpService from '../../services/httpService';
import Slider from '../Slider/Slider';

const sliderAboutUsImg = [
  {
    id: 1,
    imageUrl: 'images/SliderAboutUs1.jpg',
    text: 'not found',
    content: 'Desde 1997 en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento e inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos',
    title: 'Nosotros',
  },
  {
    id: 2,
    imageUrl: 'images/SliderAboutUs2.jpg',
    text: 'not found',
    content: 'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.',
    title: 'Visión',
  },
  {
    id: 3,
    imageUrl: 'images/SliderAboutUs3.png',
    text: 'not found',
    content: 'Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.',
    title: 'Misión',
  },
]

const MembersContainer = () => {
  const [members, setMembers] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getMembersData = useCallback(async () => {
    try {
      const data = await httpService('get', '/members')
      if (data.code === 200) {
        setMembers(data.body)
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(`Error has occurred: ${error.response}`)
    }
  }, [])

  useEffect(() => {
    getMembersData()
  }, [getMembersData])

  return (
    <Box sx={{ m: '120px 100px 20px 100px' }}>
      {sliderAboutUsImg ? <Slider items={sliderAboutUsImg} /> : null }
      <Typography sx={{
        fontSize: 24, ml: 2, mt: 6, fontWeight: 700,
      }}
      >
        Nuestro Staff
      </Typography>
      <MembersCards
        data={members}
        error={errorStatus}
        errorMessage={errorMessage}
      />
    </Box>
  )
}
export default MembersContainer
