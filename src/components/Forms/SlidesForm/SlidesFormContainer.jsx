import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import SlidesForm from './SlidesForm'
import validationSchema from '../../../schemas/slides'
import httpService from '../../../services/httpService';

const SlidesFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    imageUrl: '',
    uploadedImage: '',
    text: '',
    order: 0,
    organizationId: 1,
    organization: 'ONG',
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const getData = await httpService('get', `slides/${id}`)
          const uploadedImage = getData.body.imageUrl.split('com/')

          setInitialValues({
            imageUrl: getData.body.imageUrl,
            uploadedImage: uploadedImage[1],
            text: getData.body.text,
            order: getData.body.order,
            organizationId: getData.body.organizationId,
            organization: getData.body.organization.name,
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
    let endpoint = 'slides'

    if (idToEdit) {
      action = 'put'
      endpoint = `slides/${id}`
    }

    try {
      const data = await httpService(action, endpoint, {
        imageUrl: values.imageUrl,
        text: values.text,
        order: values.order,
        organizationId: values.organizationId,
      })
      if (data.code === 200 || data.code === 201 || data.code === 209) {
        setTimeout(() => navigate('/back-office/slides'), 500)
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  return (
    <SlidesForm
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

export default SlidesFormContainer
