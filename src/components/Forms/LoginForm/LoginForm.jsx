import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { Link } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import './loginForm.css'

const LoginForm = ({
  initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) => (
  <Box
    component="main"
    sx={{
      margin: '0',
      padding: '0',
      width: '100vw',
      height: '100vh',
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <CssBaseline />
    <Container
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
        <Box className="formBox" sx={{ mt: 4, width: '50%', minWidth: '250px' }}>
          <Typography component="p" variant="p">Bienvenido</Typography>
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 3 }}>Inicia sesión en tu cuenta! </Typography>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInputField label="email" name="email" type="email" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Contraseña" name="password" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="btn"
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{
                    maxHeight: '60px', minHeight: '60px', fontSize: '1.4rem', backgroundColor: 'red', fontWeight: 'bolder',
                  }}
                >
                  Inicia sesión
                </Button>
                {error && (
                <Box component="span" color="red">{error === 400 ? 'El usuario o la contraseña son invalidos' : `Hay un problema con los datos ingresados: ${errorMessage}`}</Box>
                )}
                <Typography className="registerText" component="p" variant="p" mt={40}>
                  No tienes una cuenta?
                  {' '}
                  <Link to="/register" className="registerLink">Registrate</Link>
                </Typography>
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Formik>
    </Container>
    <Box
      className="imgLoginBox"
      sx={{
        width: '50%',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      <img className="loginPic" src="https://i.imgur.com/x93dN4S.png" alt="login" />
    </Box>
  </Box>
)

LoginForm.propTypes = {
  initialValues: PropTypes.shape({
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

LoginForm.defaultProps = {
  error: null,
  errorMessage: null,
}

export default LoginForm
