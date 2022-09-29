import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import EditOrganizationForm from './EditOrganizationForm'
import validationSchema from '../../../schemas/organization'
import httpService from '../../../services/httpService';

const EditOrganizationContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const navigate = useNavigate()

  const onSubmitForm = async (values) => {
    try {
      await httpService('put', 'organizations/1', values)
      navigate('/backoffice')
    } catch (error) {
      setErrorStatus(error.response.status)
      setErrorMessage(error.response.statusText)
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
