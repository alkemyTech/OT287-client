import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  DialogActions, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'

const EditOrganizationForm = ({
  onSubmitForm, initialValues, validationSchema, error, errorMessage,
}) => {
  const navigate = useNavigate()

  return (
    <Box component="main" sx={{ width: '100%' }}>
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Ingresa los datos</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
        enableReinitialize
      >
        {(formProps) => (
          <Box sx={{ mx: 2 }}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormInputField label="Nombre" name="name" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="Texto de bienvenida" name="welcomeText" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="URL Imagen" name="image" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="About" name="aboutUsText" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="Direccion" name="address" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="Telefono" name="phone" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="email" name="email" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="URL Facebook" name="fbUrl" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="URL Instagram" name="igUrl" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputField label="URL Linkedin" name="ldUrl" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  {/* Cargar imagen todavia no hace nada, no esta asociada la funcionalidad */}
                  <FormInputImage label="Cargar Imagen" name="image" type="file" formProps={formProps} />
                </Grid>
              </Grid>
              <DialogActions>
                <Button
                  type="submit"
                  variant="contained"
                >
                  Guardar Cambios
                </Button>
                <Button
                  type="submit"
                  onClick={() => { navigate('/back-office/organizations') }}
                >
                  Cancelar
                </Button>
              </DialogActions>
              {error && (
              <Box component="span" color="red">{ `Ha sucedo un error: ${errorMessage}` }</Box>
              )}
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

EditOrganizationForm.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    email: PropTypes.string,
    fbUrl: PropTypes.string,
    igUrl: PropTypes.string,
    ldUrl: PropTypes.string,
  }).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

EditOrganizationForm.defaultProps = {
  error: null,
  errorMessage: null,
}

export default EditOrganizationForm
