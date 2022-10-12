import React from 'react'
import * as material from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import FormInputField from '../../Layout/FormInputField'

const EditUserProfile = ({
  initialValues, onSubmitForm, validationSchema, error, errorMessage, editSucces,
}) => {
  const navigate = useNavigate()
  return (
    <material.Box component="main" sx={{ margin: 'auto', maxWidth: '1600px', width: { lg: '80%', xs: '100%' } }}>
      <material.CssBaseline />
      <material.Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Editar mi perfil</material.Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >

        <material.Box sx={{ mx: 2 }}>
          <Form>
            <material.Grid container spacing={2}>
              <material.Grid item xs={12}>
                <FormInputField label="Nombre" name="firstName" type="text" variant="outlined" sx={{ h: 10 }} />
              </material.Grid>
              <material.Grid item xs={12}>
                <FormInputField label="Apellido" name="lastName" type="text" variant="outlined" sx={{ h: 10 }} />
              </material.Grid>
              <material.Grid item xs={12}>
                <FormInputField label="Email" name="email" type="text" variant="outlined" sx={{ h: 10 }} />
              </material.Grid>
            </material.Grid>
            <material.DialogActions>
              <material.Button
                onClick={() => { navigate('/mi-perfil') }}
              >
                Cancelar
              </material.Button>
              <material.Button
                type="submit"
                variant="contained"
                color="primary"
              >
                Guardar cambios
              </material.Button>
            </material.DialogActions>
            {error && (
            <material.Box component="span" color="red">{ `Ha sucedo un error: ${errorMessage}` }</material.Box>
            )}
            {editSucces && <material.Alert severity="success">Usuario actualizado!</material.Alert>}
          </Form>
        </material.Box>

      </Formik>
    </material.Box>
  )
}

EditUserProfile.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
  editSucces: PropTypes.bool.isRequired,
}

EditUserProfile.defaultProps = {
  error: null,
  errorMessage: null,
}

export default EditUserProfile
