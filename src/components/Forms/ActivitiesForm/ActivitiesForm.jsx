import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  Container, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import FormInputField from '../../Layout/FormInputField'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
 

const ActivitiesForm = ({
  initialValues, id, validationSchema, onSubmitForm, error, errorMessage, handleChange, dataCk
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
    <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold' }}>Formulario de Actividades</Typography>
    <Formik
      enableReinitialize
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        onSubmitForm(values, id)
      }
      }
    >
      <Box sx={{ mt: 4 }}>
        <Form>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <FormInputField label="Nombre actividad" name="name" type="text" variant="outlined" autoFocus sx={{ h: 10 }} />
            </Grid>
            
            <Grid item xs={12}>
            
                <CKEditor
                    editor={ ClassicEditor }
                    data={dataCk}
                    onReady={ editor => {
                   
                     
                  } }
                
                  onChange={ ( event, editor ) => {
                    handleChange(event,editor)
                    
                 } }
                  
                  onBlur={ ( event, editor ) => {
                     
                  } }
                  onFocus={ ( event, editor ) => {
                     
                  } }
                    
                />
              
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
              <Box component="span" color="red">{error === 409 ? 'Error conexion con el servidor' : errorMessage}</Box>
              )}
            </Grid>
          </Grid>
        </Form>
      </Box>
    </Formik>
  </Box>
</Container>

  
)

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


