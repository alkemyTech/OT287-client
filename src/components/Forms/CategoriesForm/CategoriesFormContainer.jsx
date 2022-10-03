import React, { useEffect, useState, useCallback } from 'react'
import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { ErrorMessage } from 'formik'
import CategoriesForm from './CategoriesForm'
import validationSchema from '../../../schemas/categories'

import httpService from '../../../services/httpService'

const CategoriesFormContainer = () => {
  const { id } = useParams()
  const [initialValues, setInitialValues] = useState({
    name: '',
    description: '',
  })
  const [errorStatus, setErrorStatus] = useState(null)
  const [errorMessage, setErrorMessage] = useState(null)

  const findCategoryById = useCallback(async () => {
    const data = await httpService('put', `categories/${id}`)

    if (data === 200) {
      setInitialValues({
        name: data.body.name,
        description: data.body.description,
      })
    } else {
      setErrorStatus(data.response.status)
      setErrorMessage(data.response.statusText)
    }
  }, [])

  useEffect(() => {
    findCategoryById(id)
  }, [id, findCategoryById])

  return (
    <>
      <Typography>HOLA</Typography>
      <CategoriesForm
        // key={id}
        // id={id}
        initialValues={initialValues}
        validationSchema={validationSchema}
        // onSubmitForm={onSubmitForm}
        // error={errorStatus}
        // errorMessage={errorMessage}
      />
    </>
  )
}
export default CategoriesFormContainer
