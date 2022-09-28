
import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextField from '@mui/material/TextField';

const FormikField = ({name, label}) => {
    return (

    <div className ='FormikField'>
        <Field
        autoComplete='off'
        as={TextField}
        label={label}
        name = {name}
        helperText={<ErrorMessage name={name} />}
        required
        size="small"
        variant="standard"
        
        />
    </div>
    )
}

export default FormikField

