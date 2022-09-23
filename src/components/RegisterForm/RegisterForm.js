import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types';
import FormInputField from '../Layout/FormInputField'

function RegisterForm({
  initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) {
  return (
    <div>
      <h1>Registrarse</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >
        <Form>
          <FormInputField label="Nombre" name="firstName" type="text" />
          <FormInputField label="Apellido" name="lastName" type="text" />
          <FormInputField label="Email" name="email" type="email" />
          <FormInputField label="Contraseña" name="password" type="password" />
          <div>
            <button
              type="submit"
            >
              Registrarse
            </button>
          </div>
          {error && (
            <span>{errorMessage}</span>
          )}
        </Form>
      </Formik>
    </div>
  )
}

RegisterForm.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

RegisterForm.defaultProps = {
  error: null,
  errorMessage: null,
}

export default RegisterForm
