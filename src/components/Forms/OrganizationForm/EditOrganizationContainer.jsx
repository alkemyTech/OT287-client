import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import EditOrganizationForm from './EditOrganizationForm'
import validationSchema from '../../../schemas/organization'
import httpService from '../../../services/httpService';

const EditOrganizationContainer = () => {
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)
  const [initialValues, setInitialValues] = useState({
    name: '',
    image: '',
    address: '',
    phone: '',
    email: '',
    fbUrl: '',
    igUrl: '',
    ldUrl: '',
    welcomeText: '',
    aboutUsText: '',
  })

  const navigate = useNavigate()
  const { id } = useParams()

  const getOrganizationData = useCallback(async () => {
    try {
      const data = await httpService('get', `organizations/${id}/public`)
      if (data.code === 200) {
        setInitialValues({
          name: data.body.name,
          image: data.body.image,
          address: data.body.address,
          phone: data.body.phone,
          email: data.body.email,
          fbUrl: data.body.fbUrl,
          igUrl: data.body.igUrl,
          ldUrl: data.body.ldUrl,
          welcomeText: data.body.welcomeText,
          aboutUsText: data.body.aboutUsText,
        })
      } else {
        setErrorStatus(data.code)
      }
    } catch (error) {
      setErrorStatus(error.response)
    }
  }, [id])

  const onSubmitForm = async (values) => {
    try {
      await httpService('put', `organizations/${id}`, values)
      navigate('/back-office/organization')
    } catch (error) {
      setErrorStatus(error.response.status)
      setErrorMessage(error.response.statusText)
    }
  }

  useEffect(() => {
    getOrganizationData()
  }, [getOrganizationData])

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
