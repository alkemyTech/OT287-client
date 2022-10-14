import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom'
import MembersForm from './MembersForm'
import validationSchema from '../../../schemas/news'
import httpService from '../../../services/httpService';

const MembersFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    name: '',
    image: '',
    uploadedImage: '',
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (id) {
      (async () => {
        try {
          const getData = await httpService('get', `members/${id}`)
          const uploadedImage = getData.body.image.split('com/')
          setInitialValues({
            name: getData.body.name,
            image: getData.body.image,
            uploadedImage: uploadedImage[1],
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
    let endpoint = 'members'

    if (idToEdit) {
      action = 'put'
      endpoint = `members/${id}`
    }

    try {
      const data = await httpService(action, endpoint, {
        name: values.name,
        image: values.image,
      })
      if (data.code === 200) {
        navigate('/')
      } else {
        setErrorStatus(data.response.status)
        setErrorMessage(data.response.statusText)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  return (
    <MembersForm
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

export default MembersFormContainer
