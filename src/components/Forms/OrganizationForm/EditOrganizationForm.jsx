import React from 'react'
import { Formik, Form } from 'formik'
import PropTypes from 'prop-types'
import {
  Dialog, DialogActions, CssBaseline, Box, Typography, Grid, Button,
} from '@mui/material'
import { useParams, useNavigate } from 'react-router-dom'
import FormInputField from '../../Layout/FormInputField'
import FormInputImage from '../../Layout/FormInputImage'

const EditOrganizationForm = ({
  initialValues, onSubmitForm,
}) => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleClose = () => {
    navigate('/backoffice')
  }

  return (
    <Dialog open onClose={handleClose} sx={{ zIndex: 1600 }}>
      <CssBaseline />
      <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', m: 2 }}>Ingresa los datos</Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => onSubmitForm({ id, ...values })}
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
            </Form>
          </Box>
        )}
      </Formik>
    </Dialog>
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
}

export default EditOrganizationForm
