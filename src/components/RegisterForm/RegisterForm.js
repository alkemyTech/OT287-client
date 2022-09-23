import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types';
import FormInputField from '../Layout/FormInputField'

function RegisterForm({
  initialValues, validationSchema, onSubmitForm, error,
}) {
  return (
    <div className="w-full p-8">
      <h1 className="mb-8 text-2xl font-semibold text-gray-600 text-center">Registrarse</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values, 1)}
      >
        <Form>
          <FormInputField label="Nombre" name="name" type="text" />
          <FormInputField label="Apellido" name="surname" type="text" />
          <FormInputField label="Email" name="email" type="email" />
          <FormInputField label="Contraseña" name="password" type="password" />
          <div>
            <button
              className="bg-indigo-500 text-white font-bold py-2 px-4 w-full rounded-lg hover:bg-indigo-400"
              type="submit"
            >
              Registrarse
            </button>
          </div>
          {error && (
            <span className="text-red-500 text-sm">Ya existe un usuario con ese email</span>
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
  validationSchema: PropTypes.string.isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.string,
}

RegisterForm.defaultProps = {
  error: null,
}

export default RegisterForm
