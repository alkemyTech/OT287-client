import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import FormInputField from '../../Layout/FormInputField'

const NewsForm = ({
  id, initialValues, validationSchema, onSubmitForm, error, errorMessage,
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
      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Novedades!</Typography>
      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) =>
          onSubmitForm(values, id)}
      >
        <Box sx={{ mt: 4 }}>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FormInputField label="Título" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Imagen" name="image" type="text" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Contenido" name="content" type="text" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <FormInputField label="Categoría" name="categoryId" variant="outlined" disabled />
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
                {error && (
                <Box component="span" color="red">{error === 409 ? 'El email ingresado ya existe en la base de datos para otro usuario' : errorMessage}</Box>
                )}
              </Grid>
            </Grid>
          </Form>
        </Box>
      </Formik>
    </Box>
  </Container>
)

NewsForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    categoryId: PropTypes.number,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

NewsForm.defaultProps = {
  id: null,
  error: null,
  errorMessage: null,
}

export default NewsForm
