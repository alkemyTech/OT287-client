import React, { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'
/* import AWSFileUpload from '../../Layout/AWSFileUpload' */
import './ckEditor.css'

const TestimonialForm = ({
  id, initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) => {
  const [newContent, setNewContent] = useState(null)
  const handleChange = (event, editor) => {
    const data = editor.getData()
    setNewContent(data)
  }
  const navigate = useNavigate()

  return (
    <Container component="main" maxWidth="md">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
        }}
      >
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Testimonio</Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            values.content = newContent
            /* if (values.image.name) {
              values.image = await AWSFileUpload(values.image)
            } else {
              values.image = initialValues.image
            } */
            onSubmitForm(values, id)
          }}
        >
          {(formProps) => (
            <Box sx={{ mt: 4 }}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormInputField label="Título" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputField label="Imagen actual:" name="uploadedImage" type="text" variant="standard" disabled />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputImage label="Upload" id="image" name="image" formProps={formProps} />
                  </Grid>
                  <Grid item xs={12}>
                    <CKEditor
                      id="content"
                      name="content"
                      data={initialValues.content}
                      editor={ClassicEditor}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="signator_text" />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2, h: 10 }}
                    >
                      Guardar
                    </Button>
                    <Button
                      onClick={() => { navigate('/back-office/testimonials') }}
                      fullWidth
                      sx={{ mt: 2, mb: 2, h: 10 }}
                    >
                      Cancelar
                    </Button>
                    {error && (
                    <Box component="span" color="red">{error === 409 ? 'Error al crear o editar testimonio' : errorMessage}</Box>
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

TestimonialForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    uploadedImage: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

TestimonialForm.defaultProps = {
  id: null,
  error: null,
  errorMessage: null,
}

export default TestimonialForm
