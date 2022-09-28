import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextField from '@mui/material/TextField';

const FormikFieldTextarea = ({name, label}) => {
    return (

    <div className ='FormikFieldTextarea'>
        <Field
        autoComplete='off'
        as={TextField}
        label={label}
        name = {name}
        helperText={<ErrorMessage name={name} />}
        required
        inputProps={{
            minLength: 20
          }}
          id="outlined-multiline-static"
          multiline
        
        />
    </div>
    )
}

export default FormikFieldTextarea