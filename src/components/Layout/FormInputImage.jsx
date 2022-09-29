import React, { useState } from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import { Button, Typography, FormHelperText } from '@mui/material'
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';

const FormInputImage = ({ label, formProps, ...props }) => {
  const [fileName, setFileName] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [field, meta] = useField(props)

  const handleOnChange = (event) => {
    const file = event.target.files[0];
    setFileName(file.name);
    formProps.setFieldValue(props.name, file)
  }

  return (
    <>
      <Button variant="contained" component="label" startIcon={<PhotoCameraIcon />}>
        { label }
        <input id={props.name} name={props.name} hidden accept="image/*" type="file" onChange={handleOnChange} />
      </Button>
      <Typography variant="body2">
        { fileName }
      </Typography>
      <FormHelperText error={meta.touched && Boolean(meta.error)}>{meta.touched ? meta.error : ''}</FormHelperText>
    </>
  )
}

FormInputImage.propTypes = {
  label: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  formProps: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
}

export default FormInputImage
