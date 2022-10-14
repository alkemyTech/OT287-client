import React, { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'
import AWSFileUpload from '../../Layout/AWSFileUpload'

const NewsForm = ({
  id, initialValues, validationSchema, onSubmitForm, error, errorMessage,
}) => {
  const [newContent, setNewContent] = useState(null)
  const handleChange = (event, editor) => {
    const data = editor.getData()
    setNewContent(data)
  }

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
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Novedades!</Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            values.content = newContent
            if (values.image.name) {
              values.image = await AWSFileUpload(values.image, 'news')
            } else {
              values.image = initialValues.image
            }
            onSubmitForm(values, id)
          }}

        >
          {(formProps) => (
            <Box sx={{ width: { xs: '50%', sm: '80%', md: '100%' } }}>
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <FormInputField label="Título" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
                  </Grid>
                  <Grid item xs={12}>
                    <FormInputField label="Imagen actual:" name="uploadedImage" type="text" variant="standard" disabled />
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
          )}
        </Formik>
      </Box>
    </Container>
  )
}

NewsForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
    uploadedImage: PropTypes.string,
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
