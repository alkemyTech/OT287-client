import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Testimonials from './Testimonials'

const TestimonialsContainer = () => {
  const [dataTestimonials, setDataTestimonials] = useState([])
  const [errorStatusTestimonials, setErrorStatusTestimonials] = useState('')

  const getTestimonialsData = useCallback(async () => {
    try {
      const data = await httpService('get', '/testimonials')
      if (data.code === 200) {
        setDataTestimonials(data.body)
      } else {
        setErrorStatusTestimonials(data.code)
      }
    } catch (error) {
      setErrorStatusTestimonials(error.response)
    }
  }, [])

  useEffect(() => {
    getTestimonialsData()
  }, [getTestimonialsData])

  return (
    <div>
      <Testimonials
        testimonials={dataTestimonials}
        errorStatus={errorStatusTestimonials}
      />
    </div>
  )
}

export default TestimonialsContainer
