import * as material from '@mui/material'
import { Form, Formik } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'

const EditUserForm = ({
  initialValues, role, onSubmitForm, validationSchema, error, errorMessage, handleRole, editSucces, id
}) => {
  const navigate = useNavigate()
  const location = useLocation();
  return (
    <material.Box component="main" sx={{ width: '100%' }}>
      <material.CssBaseline />
      {location.pathname === `/back-office/users/create`?
      <material.Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Crea un Usuario!</material.Typography> :
      <material.Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Edita el Usuario id # {id} !</material.Typography> 
      }
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values, id)}
      >
        {(formProps) => (
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
              { 
              location.pathname === `/back-office/users/create`?
              <material.Grid item xs={12}>
                <FormInputField label="Contraseña" name="password" type="text" variant="outlined" sx={{ h: 10 }} />
              </material.Grid> : null
            }
              <material.Grid item xs={12}>
                { location.pathname === `/back-office/users/${id}/edit`?
                <FormInputField label="Imagen actual:" name="uploadedImage" type="text" variant="standard" disabled />:null                
                }
                <FormInputImage label="Upload" id="image" name="image" formProps={formProps} />
              </material.Grid>
              { location.pathname === `/back-office/users/${id}/edit`? 
              <material.Grid item xs={12}>
                <material.FormControl fullWidth>
                  <material.InputLabel id="role-label">Role</material.InputLabel>
                  <material.Select
                    labelId="role-label"
                    id="role-simple-select"
                    label="Role"
                    name='roleId'
                    onChange={handleRole}
                    value={role?role:0}
                    defaultValue={initialValues.roleId?initialValues.roleId:0}
                  >
                    <material.MenuItem value={0}>Seleccionar</material.MenuItem>
                    <material.MenuItem value={1}>Admin</material.MenuItem>
                    <material.MenuItem value={2}>Standard</material.MenuItem>
                  </material.Select>
                </material.FormControl>
              </material.Grid> : null
              }
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
        )}
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
