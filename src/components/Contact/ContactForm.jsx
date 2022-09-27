import React from 'react'
import {
  Box, Button, Typography, Grid, Container, InputLabel, OutlinedInput,
} from '@mui/material'
import { Form } from 'formik'
import FormInputField from '../Layout/FormInputField'

const ContactForm = () => (

  <Grid
    item
    xs={12}
    xl={10}
    height="100vh"
    sx={{
      marginTop: 12,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: 'blue',
    }}
  >
    <Typography>HOLA FORM</Typography>
    {/* <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >
        <Box sx={{ mt: 4 }}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInputField label="Nombre" name="firstName" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
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
                  sx={{ mt: 3, mb: 2, h: 10 }}
                >
                  Registrate
                </Button>
                {error && (
                <Box component="span" color="red">{error === 409 ? 'El email ingresado ya existe en la base de datos para otro usuario' : errorMessage}</Box>
                )}
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Formik> */}
  </Grid>

)

export default ContactForm
