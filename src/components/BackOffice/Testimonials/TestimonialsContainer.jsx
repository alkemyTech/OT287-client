import React, { useCallback, useEffect, useState } from 'react'
import httpService from '../../../services/httpService'
import Testimonials from './Testimonials'

const TestimonialsContainer = () => {
  const [handleModal, setHandleModal] = useState(false)
  const [dataTestimonials, setDataTestimonials] = useState([])
  const [errorStatusTestimonials, setErrorStatusTestimonials] = useState('')
  const [elementToDelete, setElementToDelete] = useState({})
  const [deletedSucces, setDeletedSucces] = useState(false)
  const [errorStatus, setErrorStatus] = useState('')

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
  const deleteElement = async (id) => {
    try {
      const data = await httpService('delete', `/testimonials/${id}`)
      if (data.code === 200) {
        setDeletedSucces(true)
        getTestimonialsData()
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  useEffect(() => {
    getTestimonialsData()
  }, [getTestimonialsData])

  return (
    <div>
      <Testimonials
        // Muestra el modal de aceptar o declinar
        handleModal={handleModal}
        setHandleModal={setHandleModal}
        // datos del endpoint
        testimonials={dataTestimonials}
        getTestimonialsData={getTestimonialsData}
        // error handlers
        errorStatus={errorStatus}
        errorStatusTestimonials={errorStatusTestimonials}
        // delete handlers
        deleteElement={deleteElement}
        setElementToDelete={setElementToDelete}
        elementToDelete={elementToDelete}
        deletedSucces={deletedSucces}
        setDeletedSucces={setDeletedSucces}
      />
    </div>
  )
}

export default TestimonialsContainer
