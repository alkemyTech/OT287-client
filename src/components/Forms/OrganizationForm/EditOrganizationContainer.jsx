import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditOrganizationForm from './EditOrganizationForm'
import validationSchema from '../../../schemas/organization'

const EditOrganizationContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      axios
        .put(`${process.env.REACT_APP_API_DOMAIN}/organizations/1`, values)
        .then(() => navigate('/backoffice'))
        .catch((error) => {
          setErrorStatus(error.response.status)
          setErrorMessage(error.response.statusText)
        })
    } catch (error) {
      setErrorStatus(error.response)
    }
  }

  const initialValues = {
    name: '',
    image: null,
  }

  return (
    <EditOrganizationForm
      initialValues={initialValues}
      onSubmitForm={onSubmitForm}
      validationSchema={validationSchema}
      error={errorStatus}
      errorMessage={errorMessage}
    />
  )
}

export default EditOrganizationContainer
