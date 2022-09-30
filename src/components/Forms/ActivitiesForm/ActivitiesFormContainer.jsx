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
    const [dataCk,setDataCk]=useState('');

    const navigate = useNavigate()
    
    const handleChange=(event,editor)=>{
      setDataCk(editor.getData());
     }
  
      useEffect(() => {
        if (id) {
          (async () => {
            try {
              const getData = await httpService('get', `activities/${id}`)
              
              if(getData){
                setInitialValues({
                  name: getData.body.name,
                  content: getData.body.content
                })
                setDataCk(getData.body.content)
              }
            } catch (error) {
              setErrorStatus(error.response.status)
              setErrorMessage(error.response.statusText)
            }
          }) ()
        }
      }, [id])
    

      const onSubmitForm = async (values, idToEdit) => {
        try {
          if(idToEdit && dataCk !== ''){
            
              const data = await httpService('put', `activities/ ${id}` , {
                name: values.name,
                content: dataCk
              })
              if (data.code === 200) {
                navigate('/')
              } else {
                setErrorStatus(data.response.status)
                setErrorMessage(data.response.statusText)
              }

          } 
          else {
            const data = await httpService('post', 'activities', {
              name: values.name,
              content: dataCk
            })
            if (data.code === 201) {
              navigate('/')
            } else {
              setErrorStatus(data.response.status)
              setErrorMessage(data.response.statusText)
            }
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
    handleChange={handleChange}
    validationSchema={validationSchema}
    id={id}
    key={id}
    dataCk={dataCk}
    />
  )
}

export default ActivitiesFormContainer