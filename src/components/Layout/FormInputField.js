import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types';

// Input field component, with label, input and error handler
function FormInputField({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
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
