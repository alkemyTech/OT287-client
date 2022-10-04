import * as material from '@mui/material'
import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'

const EditUserForm = ({
  initialValues, onSubmitForm, validationSchema, error, errorMessage, handleRole, role, editSucces,
}) => {
  const navigate = useNavigate()
  return (
    <material.Box component="main" sx={{ width: '100%' }}>
      <material.CssBaseline />
      <material.Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Editar usuario</material.Typography>
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
                <material.FormControl fullWidth>
                  <material.InputLabel id="role-label">Role</material.InputLabel>
                  <material.Select
                    labelId="role-label"
                    id="role-simple-select"
                    value={role}
                    label="Role"
                    onChange={handleRole}
                  >
                    <material.MenuItem value={1}>Admin</material.MenuItem>
                    <material.MenuItem value={2}>Standard</material.MenuItem>
                  </material.Select>
                </material.FormControl>
              </material.Grid>
            </material.Grid>
            <material.DialogActions>
              <material.Button
                onClick={() => { navigate('/back-office/users') }}
              >
                Cancelar
              </material.Button>
              <material.Button
                type="submit"
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

EditUserForm.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
  handleRole: PropTypes.func,
  role: PropTypes.number,
  editSucces: PropTypes.bool.isRequired,
}

EditUserForm.defaultProps = {
  error: null,
  errorMessage: null,
  handleRole: null,
  role: null,
}
export default EditUserForm
