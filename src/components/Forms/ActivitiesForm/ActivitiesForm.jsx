import React from 'react'
import validationSchema from '../../../schemas/activities'
import {
    Formik,
    Form
} from 'formik'
import {
    Button, Grid
  } from '@mui/material'
import FormikField from '../../Layout/FormikField';
 

function ActivitiesForm({initialValues, formValues, onSubmit}) {
    
    
  return (
    <Formik
    initialValues={formValues || initialValues}
    validationSchema={validationSchema}
    onSubmit={(values) => onSubmit(values)}
    enableReinitialize
    >
       
        <Grid container widht="100%" justifyContent="center">
            <Form>

              <Grid item xs={12}>
                <br />
                <FormikField name="name" label="Nombre de la actividad" />
               </Grid>

               <Grid item xs={12}>
                 <br />
                 <FormikField name="content" label="Contenido de la actividad" />
               </Grid>

               <Grid item width="100%">
                 <br />
                 <Button variant="contained" color="success" type="submit" fullWidth>
                   Submit
                 </Button>
               </Grid>

            </Form>
          </Grid>
   
    </Formik>
  )
}

export default ActivitiesForm


