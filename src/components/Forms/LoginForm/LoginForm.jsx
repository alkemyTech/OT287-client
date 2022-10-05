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
      position: 'relative',
      top: '-48px',
      bottom: '-120px',
      padding: '0',
      width: '100vw',
      display: 'flex',
      flexDirection: 'row',
    }}
  >
    <CssBaseline />
    <Container
      sx={{
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
        <Box className="formBox" sx={{ mt: { xs: '20px', lg: '150px' }, width: { xs: '90%', md: '50%' }, minWidth: '250px' }}>
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
                    backgroundcolor: '#DB5752', maxHeight: '60px', minHeight: '60px', fontSize: '1.4rem', fontWeight: 'bolder',
                  }}
                >
                  Inicia sesión
                </Button>
                {error && (
                <Box component="span">{error === 400 ? 'El usuario o la contraseña son invalidos' : `Hay un problema con los datos ingresados: ${errorMessage}`}</Box>
                )}
                <Typography className="registerText" component="p" variant="p" sx={{ mt: { xs: '25px', lg: '120px' } }}>
                  No tienes una cuenta?
                  {' '}
                  <Link to="/registrate" backgroundcolor="#DB5752" className="registerLink">Registrate</Link>
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
