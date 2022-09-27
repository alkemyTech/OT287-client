import React from 'react'
import { Field } from 'formik'


const FormikFieldFile = ({name, label}) => {
    return (

    <div className ='FormikFieldFile'>
        <Field
        autoComplete='off'
        label={label}
        name = {name}
        accept="image/*"
        required
        type="file"
        size="small"
        variant="standard"
        
        />
    </div>
    )
}

export default FormikFieldFile