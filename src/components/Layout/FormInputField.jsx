import React, { useState } from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types'
import {
  TextField, FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton, FormHelperText,
} from '@mui/material'
import { VisibilityOff, Visibility } from '@mui/icons-material';

// Input field component, with label, input and error handler
const FormInputField = ({ label, ...props }) => {
  const [values, setValues] = useState({
    password: '',
    showPassword: false,
  })

  const [field, meta] = useField(props)

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    })
  }

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  }

  return (
    props.name === 'password' || props.id === 'password'
      ? (
        <>
          <FormControl error={meta.touched && Boolean(meta.error)} fullWidth>
            <InputLabel htmlFor={props.id || props.name}>{label}</InputLabel>
            <OutlinedInput
              id={props.id || props.name}
              type={values.showPassword ? 'text' : 'password'}
              value={values.password}
              onChange={handleChange('password')}
              error={meta.touched && Boolean(meta.error)}
              endAdornment={(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
        )}
              label={label}
              fullWidth
              {...field}
              {...props}
            />
            <FormHelperText error={meta.touched && Boolean(meta.error)}>{meta.touched ? meta.error : ''}</FormHelperText>
          </FormControl>
        </>
      )
      : <TextField id={props.id || props.name} label={label} helperText={meta.touched ? meta.error : ''} error={meta.touched && Boolean(meta.error)} fullWidth {...field} {...props} />
  )
}

FormInputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
}

FormInputField.defaultProps = {
  id: null,
}

export default FormInputField
