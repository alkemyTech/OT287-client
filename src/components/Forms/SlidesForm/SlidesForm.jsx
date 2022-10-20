import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,

} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'
import AWSFileUpload from '../../Layout/AWSFileUpload'

const SlidesForm = ({
  id, initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) => {
  const navigate = useNavigate()
  return (
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
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>Editar Slide</Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            if (values.imageUrl.name) {
              values.imageUrl = await AWSFileUpload(values.imageUrl)
            } else {
              values.imageUrl = initialValues.imageUrl
            }
            onSubmitForm(values, id)
          }}
        >
          {(formProps) => (
            <Box sx={{ width: { xs: '50%', sm: '80%', md: '100%' } }}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} display="none">
                    <FormInputField label="Nombre Organización" name="organization" type="text" variant="outlined" autoFocus sx={{ h: 10 }} disabled />
                  </Grid>
                  <Grid item xs={12} display="none">
                    <FormInputField label="ID Organización" name="organizationId" type="number" variant="outlined" autoFocus sx={{ h: 10 }} disabled />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputField label="Texto" name="text" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputField label="Orden" name="order" type="number" variant="outlined" autoFocus sx={{ h: 10 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputField label="Imagen actual:" name="uploadedImage" type="text" variant="standard" />
                    <FormInputImage label="Upload" id="image" name="imageUrl" formProps={formProps} />
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
                      onClick={() => { navigate('/back-office/slides') }}
                      sx={{ margin: '5px 15px 0 0', h: 14 }}
                    >
                      Cancelar
                    </Button>
                    {error && (
                    <Box component="span" color="red">{errorMessage}</Box>
                    )}
                  </Grid>
                </Grid>
              </Form>
            </Box>
          )}
        </Formik>
      </Box>
    </Container>
  )
}
SlidesForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    imageUrl: PropTypes.string,
    uploadedImage: PropTypes.string,
    text: PropTypes.string,
    order: PropTypes.number,
    organizationId: PropTypes.number,
    organization: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

SlidesForm.defaultProps = {
  id: null,
  error: null,
  errorMessage: null,
}

export default SlidesForm
