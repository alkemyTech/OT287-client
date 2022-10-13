import React, {
  useCallback, useState, useEffect,
} from 'react'

import httpService from '../../services/httpService';
import Testimonials from './Testimonials';

const TestimonialsContainer = () => {
  const [testimonials, setTestimonials] = useState([])
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const getTestimonialsData = useCallback(async () => {
    try {
      const data = await httpService('get', '/testimonials')
      if (data.code === 200) {
        setTestimonials(data.body)
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(`Error has occurred: ${error.response}`)
    }
  }, [])

  useEffect(() => {
    getTestimonialsData()
  }, [getTestimonialsData])

  return (
    <>
      <Testimonials
        testimonials={testimonials}
        error={errorStatus}
        errorMessage={errorMessage}
      />
    </>
  )
}
export default TestimonialsContainer
