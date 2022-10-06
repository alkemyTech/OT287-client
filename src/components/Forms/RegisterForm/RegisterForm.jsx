import React from 'react'
import { Formik, Form } from 'formik'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import FormInputField from '../../Layout/FormInputField'

const RegisterForm = ({
  initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) => (
  <Container component="main" maxWidth="sm">
    <CssBaseline />
    <Box
      sx={{
        marginTop: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >
        <Box sx={{ width: { xs: '90%', md: '100%' } }}>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', alignSelf: 'flex-start', mb: 2.5 }}>Registrate!</Typography>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInputField label="Nombre" name="firstName" type="text" variant="outlined" sx={{ h: 10 }} />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Apellido" name="lastName" type="text" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="email" name="email" type="email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Contraseña" name="password" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    mt: 1.5, mb: 2, minHeight: '60px', maxHeight: '60px', fontSize: '1.4rem', fontWeight: 'bolder',
                  }}
                >
                  Registrate
                </Button>
                {error && (
                <Box component="span" color="red">{error === 409 ? 'El email ingresado ya existe en la base de datos para otro usuario' : errorMessage}</Box>
                )}
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className="registerText"
                  component="p"
                  variant="p"
                  sx={{
                    mt: { lg: '6rem' }, fontSize: { xs: '1rem', md: '1.2rem' }, textAlign: 'center', '& > a': { color: '#DB5752', textDecoration: 'none' },
                  }}
                >
                  Ya tienes una cuenta?
                  {' '}
                  <Link to="/login" backgroundcolor="#DB5752" className="registerLink">Inicia sesión</Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Formik>
    </Box>
  </Container>
)

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
