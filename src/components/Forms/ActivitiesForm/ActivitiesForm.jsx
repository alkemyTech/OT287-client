import React, { useState } from 'react'
import { Formik, Form, ErrorMessage } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import FormInputField from '../../Layout/FormInputField'

const ActivitiesForm = ({
  initialValues, id, validationSchema, onSubmitForm, error, errorMessage,
}) => {
  const [newContent, setNewContent] = useState(null)
  const handleChange = (event, editor) => {
    const data = editor.getData()
    setNewContent(data)
  }
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
        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Formulario de Actividades</Typography>
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values) => {
            values.content = newContent
            onSubmitForm(values, id)
          }}
        >
          <Box sx={{ mt: 4 }}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormInputField label="Nombre actividad" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
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
                    variant="contained"
                    sx={{ margin: '5px 15px 0 0', h: 14 }}
                  >
                    Guardar cambios
                  </Button>
                  <Button
                    onClick={() => { navigate('/back-office/activities') }}
                    sx={{ margin: '5px 15px 0 0', h: 14 }}
                  >
                    Cancelar
                  </Button>
                  {error && (
                  <Box component="span" color="red">{error === 409 ? 'La actividad no fue posible de crearse o editarse' : errorMessage}</Box>
                  )}
                </Grid>
              </Grid>
            </Form>
          </Box>
        </Formik>
      </Box>
    </Container>
  )
}

ActivitiesForm.propTypes = {
  id: PropTypes.string,
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    content: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

ActivitiesForm.defaultProps = {
  id: null,
  error: null,
  errorMessage: null,
}

export default ActivitiesForm
