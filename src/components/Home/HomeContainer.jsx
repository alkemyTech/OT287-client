import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import httpService from '../../services/httpService'
import Home from './Home'

const HomeContainer = () => {
  const [data, setData] = useState([])
  const [members, setMembers] = useState(null)
  const [slides, setSlides] = useState(null)
  const [testimonials, setTestimonials] = useState(null)
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const location = useLocation().pathname

  useEffect(() => {
    const getSlides = async () => {
      try {
        const dataSlides = await httpService('get', '/slides')
        if (dataSlides.code === 200) {
          setSlides(dataSlides.body)
        } else {
          setErrorStatus(dataSlides.code)
          setErrorMessage(dataSlides.body.response.statusText)
        }
      } catch (error) {
        setErrorStatus(`Error has occurred: ${error.response}`)
      }
    }
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
    getSlides()
    getNews()
    getMembers()
    getTestimonials()
  }, [])

  return (
    <Home
      news={data}
      members={members}
      testimonials={testimonials}
      slider={slides}
      error={errorStatus}
      errorMessage={errorMessage}
      location={location}
    />
  )
}
export default HomeContainer
