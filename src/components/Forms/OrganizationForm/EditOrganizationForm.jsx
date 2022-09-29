import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  DialogActions, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'

const EditOrganizationForm = ({
  initialValues, onSubmitForm, validationSchema, error, errorMessage,
}) => {
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/back-office')
  }

  return (
    <Box component="main" sx={{ width: '100%' }}>
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Ingresa los datos</Typography>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => onSubmitForm(values)}
      >
        {(formProps) => (
          <Box sx={{ mx: 2 }}>
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormInputField label="Nombre" name="name" type="text" variant="outlined" sx={{ h: 10 }} />
                </Grid>
                <Grid item xs={12}>
                  <FormInputImage label="Upload" name="image" type="file" formProps={formProps} />
                </Grid>
              </Grid>
              <DialogActions>
                <Button
                  type="submit"
                  onClick={() => handleClose()}
                >
                  Cancelar
                </Button>
                <Button
                  type="submit"
                >
                  Enviar
                </Button>
              </DialogActions>
              {error && (
              <Box component="span" color="red">{ `Ha sucedo un error: ${errorMessage}` }</Box>
              )}
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  )
}

EditOrganizationForm.propTypes = {
  initialValues: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    email: PropTypes.string,
    password: PropTypes.string,
  }).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  error: PropTypes.number,
  errorMessage: PropTypes.string,
}

EditOrganizationForm.defaultProps = {
  error: null,
  errorMessage: null,
}

export default EditOrganizationForm
