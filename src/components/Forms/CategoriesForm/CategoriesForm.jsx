import React from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import {
  Box, Button, Container, CssBaseline, Grid, Typography,
} from '@mui/material'
import FormInputField from '../../Layout/FormInputField'

const CategoriesForm = ({ initialValues, validationSchema }) => {
  console.log('hola')
  return (
    <>
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
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Novedades!</Typography>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            // onSubmit={async (values) => {
            //   values.content = newContent
            //   onSubmitForm(values, id)
            // }}
          >
            {(formProps) => (
              <Box sx={{ mt: 4 }}>
                <Form>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <FormInputField label="Nombre" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
                    </Grid>
                    <Grid item xs={12}>
                      <FormInputField label="Descripción" name="description" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
                    </Grid>

                    <Grid item xs={12}>
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, h: 10 }}
                      >
                        Grabar
                      </Button>
                      {/* {error && (
                    <Box component="span" color="red">{error === 409 ? 'El email ingresado ya existe en la base de datos para otro usuario' : errorMessage}</Box>
                    )} */}
                    </Grid>
                  </Grid>
                </Form>
              </Box>
            )}
          </Formik>
        </Box>
      </Container>
    </>
  )
}
export default CategoriesForm
