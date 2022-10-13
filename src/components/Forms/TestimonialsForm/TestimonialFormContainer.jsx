import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom'
import validationSchema from '../../../schemas/testimonials'
import httpService from '../../../services/httpService';
import TestimonialForm from './TestimonialForm';

const TestimonialFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    name: '',
    content: '',
    image: '',
    uploadedImage: '',
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const user = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const getData = await httpService('get', `testimonials/${id}`)
          /*  const uploadedImage = getData.body.image.split('com/') */
          setInitialValues({
            name: getData.body.name,
            content: getData.body.content,
            image: getData.body.image,
            // cambiar a - uploadedImage: uploadedImage[1] - cuando se implemente AWS,
            uploadedImage: getData.body.image,
          })
        } catch (error) {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        }
      })()
    }
  }, [id])

  const onSubmitForm = async (values, idToEdit) => {
    let action = 'post'
    let endpoint = 'testimonials'

    if (idToEdit) {
      action = 'put'
      endpoint = `testimonials/${id}`
    }

    try {
      const data = await httpService(action, endpoint, {
        name: values.name,
        content: values.content,
        image: values.image.name,
      })
      if (data.code === 200 && user.roleId === 1) {
        navigate('/back-office/testimonials')
      } if (data.code === 200 && user.roleId === 2) {
        navigate('/testimonios')
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }
  return (
    <TestimonialForm
      key={id}
      id={id}
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmitForm={onSubmitForm}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default TestimonialFormContainer
