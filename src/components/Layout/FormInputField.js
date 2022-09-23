import React from 'react'
import { useField } from 'formik'
import PropTypes from 'prop-types';

// Input field component, with label, input and error handler
function FormInputField({ label, ...props }) {
  const [field, meta] = useField(props)
  return (
    <div>
      <label
        className="block text-gray-700 text-sm font-bold pt-2 pb-1"
        htmlFor={props.id || props.name}
      >
        {label}
      </label>
      <input
        className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? <div className="text-red-500 text-sm">{meta.error}</div> : null}
    </div>
  )
}

FormInputField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default FormInputField
