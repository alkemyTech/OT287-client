import React from 'react'
import { Typography } from '@mui/material'
import CategoriesForm from './CategoriesForm'
import validationSchema from '../../../schemas/categories'

const CategoriesFormContainer = () => {
  const initialValues = {
    name: 'hola',
    description: 'holaaaa',
  }

  //   useEffect( ()=> {

  //   },[])

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
