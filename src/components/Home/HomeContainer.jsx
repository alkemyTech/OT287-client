import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import httpService from '../../services/httpService'
import Home from './Home'

const sliderImg = [
  {
    id: 1,
    imageUrl: 'images/SliderAboutUs2.jpg',
    title: 'Bienvenidx!',
    text: 'En Somos Más trabajamos con chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos.',
  },
  {
    id: 2,
    imageUrl: 'images/sliderImg2.jpg',
    text: 'Somos una ONG que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo nos involucramos con la comunidad y hoy somos un centro comunitario que acompaña a más de 700 personas.',
    title: 'Somos Más',
  },
  {
    id: 3,
    imageUrl: 'images/SliderAboutUs1.jpg',
    text: 'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.',
    title: 'Visión',
  },
  {
    id: 4,
    imageUrl: 'images/SliderAboutUs3.png',
    text: 'Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.',
    title: 'Misión',
  },
]
const HomeContainer = () => {
  const [data, setData] = useState([])
  const [members, setMembers] = useState(null)
  const [testimonials, setTestimonials] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const location = useLocation().pathname

  useEffect(() => {
    const getNews = async () => {
      try {
        const dataNews = await httpService('get', '/news')
        if (dataNews.code === 200 && dataNews.body && dataNews.body.length > 2) {
          setData(dataNews.body.slice(dataNews.body.length - 2))
        } else {
          setErrorStatus(dataNews.code)
          setErrorMessage(dataNews.body.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
    const getMembers = async () => {
      try {
        const dataMembers = await httpService('get', '/members')
        if (dataMembers.code === 200 && dataMembers.body && dataMembers.body.length > 6) {
          setMembers(dataMembers.body.slice(dataMembers.body.length - 6))
        } else {
          setErrorStatus(dataMembers.response.status)
          setErrorMessage(dataMembers.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
    const getTestimonials = async () => {
      try {
        const dataTestimonials = await httpService('get', '/testimonials')
        if (dataTestimonials.code === 200 && dataTestimonials.body
           && dataTestimonials.body.length > 6) {
          setTestimonials(dataTestimonials.body.slice(dataTestimonials.body.length - 6))
        } else {
          setErrorStatus(dataTestimonials.response.status)
          setErrorMessage(dataTestimonials.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
    getNews()
    getMembers()
    getTestimonials()
  }, [])

  return (
    <Home
      news={data}
      members={members}
      testimonials={testimonials}
      slider={sliderImg}
      error={errorStatus}
      errorMessage={errorMessage}
      location={location}
    />
  )
}
export default HomeContainer
