import React, { useCallback, useState, useEffect } from 'react'
import ActivitiesForm from '../ActivitiesForm/ActivitiesForm'

const initialValues = {
    name: '',
    content: ''
}

// const savedValues = {
//     name: '',
//     content: ''
// }

 

const ActivitiesFormContainer = () => {
    const [formValues, setFormValues] = useState(null)
    
    const getActivityData = useCallback(async (object) => {
        console.log(object)
        if(object) {
            setFormValues(object)
        } else {
            setFormValues(initialValues)
        }        
      }, [])

      useEffect(() => {
        getActivityData({
            id: '1',
            name: 'actividad',
            content: 'mucha actividad'
        })
        
      }, [getActivityData])
    

      const onSubmit = async (values) => {
        console.log('Form data', values)
        console.log('object', formValues)
        if(formValues.name === values.name && formValues.content === values.content){
            console.log('vamos por PUT');
        } else {
            console.log('vamos por POST');
        }
      }


  return (
    <ActivitiesForm initialValues={initialValues} onSubmit={onSubmit} formValues={formValues} />
   
  )
}

export default ActivitiesFormContainer