import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm'
import validationSchema from '../../../schemas/activities'
import httpService from '../../../services/httpService';

const ActivitiesFormContainer = () => {
    const {id} = useParams()
    const [initialValues, setInitialValues] = useState({
      name: '',
      content: ''
    })
    const [errorStatus, setErrorStatus] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    const navigate = useNavigate()
  
      useEffect(() => {
        if (id) {
          (async () => {
            try {
              const getData = await httpService('get', `activities/${id}`)
                setInitialValues({
                  name: getData.body.name,
                  content: getData.body.content
                })
            } catch (error) {
              setErrorStatus(error.response.status)
              setErrorMessage(error.response.statusText)
            }
          }) ()
        }
      }, [id])
    
      const onSubmitForm = async (values, idToEdit) => {
        let action = 'post'
        let endpoint = 'activities'
        if(idToEdit){
          action = 'put'
          endpoint = `activities/ ${id}`
        }
        try {
              const data = await httpService(action, endpoint , {
                name: values.name,
                content: values.content
              })
              if (data.code === 200 || 201) {
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
    <ActivitiesForm 
    errorMessage={errorMessage} 
    error={errorStatus} 
    initialValues={initialValues} 
    onSubmitForm={onSubmitForm} 
    validationSchema={validationSchema}
    id={id}
    key={id}
    />
  )
}

export default ActivitiesFormContainer