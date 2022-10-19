import React from 'react'
import PropTypes from 'prop-types'
import { Formik, Form } from 'formik'
import {
  Alert,
  Box, Button, Container, CssBaseline, Grid, Typography,
} from '@mui/material'
import FormInputField from '../../Layout/FormInputField'

const CategoriesForm = (props) => {
  const {
    id, initialValues, validationSchema,
    onSubmitForm, succesMessage, setSuccesMessage, navigate, error, setErrorStatus,
  } = props
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
          <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Categorías!</Typography>
          <Formik
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={async (values) => {
              onSubmitForm(values, id)
            }}
          >
            {() => (
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
                        variant="contained"
                        sx={{ margin: '5px 15px 0 0', h: 14 }}
                      >
                        Guardar cambios
                      </Button>
                      <Button
                        onClick={() => { navigate('/back-office/categories') }}
                        sx={{ margin: '5px 15px 0 0', h: 14 }}
                      >
                        Cancelar
                      </Button>
                      {succesMessage ? (
                        <Alert
                          severity="success"
                          onClose={() => {
                            setSuccesMessage('')
                            navigate('/back-office')
                          }}
                        >
                          Tu categoría ha sido
                          {' '}
                          {succesMessage}
                          {' '}
                        </Alert>
                      ) : null}

                      {error ? (
                        <Alert
                          severity="error"
                          onClose={() => {
                            setErrorStatus(null)
                            navigate('/back-office')
                          }}
                        >
                          { id && error ? 'No se pudo actualizar la categoría' : 'No se pudo crear la categoría'}

                        </Alert>
                      ) : null}
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
CategoriesForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  succesMessage: PropTypes.string.isRequired,
  setSuccesMessage: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  error: PropTypes.string,
  setErrorStatus: PropTypes.func.isRequired,
}

CategoriesForm.defaultProps = {
  id: null,
  error: null,
}
export default CategoriesForm
