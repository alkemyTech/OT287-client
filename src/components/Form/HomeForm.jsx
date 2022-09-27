import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import FormikField from './text';
import FormikFieldTextarea from './textarea'
import FormikFieldFile from './file';
import {  Button, Grid, Typography, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import PropTypes from 'prop-types';
import validationSchema from './validationSchema'

const HomeForm = ({ data, onSubmit}) => {
  console.log(data);

  const initialValues = {
    welcomeText: '', // data[0].text
    slideOneImg: '', //data[1].imageUrl
    slideOneText: '', //data[1].text
    slideTwoImg: '',//data[2].imageUrl
    slideTwoText: '', //data[2].text
    slideThreeImg: '',//data[3].imageUrl
    slideThreeText: ''//data[3].text
}

  

    return(
      <Grid container widht="100%" display="flex" direction="column" padding={10} 
       spacing={0}
       alignItems="center"
       justify="center"
       style={{ minHeight: '100vh' }} >
        
        <Box bgcolor="#ebebeb" width="auto"
            sx={{
              width: '40%',
              p: 1,
              my: 1,
              bgcolor: (theme) =>
                theme.palette.mode === 'dark' ? '#101010' : 'grey.100',
              color: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800',
              border: '1px solid',
              borderColor: (theme) =>
                theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
              borderRadius: 2,
              fontSize: '0.875rem',
              fontWeight: '700',
              textAlign: 'center',
            }}>

        
        <Grid container widht="100%" justifyContent= "center" >
           <Grid item margin={5} ><Typography variant='h5'>Formulario Edicion Home</Typography></Grid>
        </Grid>
             <Formik
             initialValues = {initialValues}
              onSubmit={(values) => onSubmit(values)}
             validationSchema = {validationSchema}>
              <Grid container widht="100%" justifyContent= "center" >
                     <Form>
                       <FormikFieldTextarea name={'welcomeText'} label={'welcomeText'} />

                        
                         <Grid item xs={12}>
                           <br />
                           <IconButton color="error" id='slideOneImg' name='slideOneImg' aria-label="upload picture" component="label" >
                              <FormikFieldFile name={'slideOneImg'} label={'Image Slide N°1'} />
                              <PhotoCamera />
                           </IconButton>
                           <ErrorMessage name='slideTwoImg'/>
                         </Grid>

                         <Grid item xs={12}>
                            <br />
                            <FormikField name={'slideOneText'} label={'Text Slide N°1'} />
                         </Grid>

                         <Grid item xs={12}>
                           <br />
                           <IconButton color="error" id='slideTwoImg' name='slideTwoImg' aria-label="upload picture" component="label" >
                              <FormikFieldFile name={'slideTwoImg'} label={'Image Slide N°2'} />
                              <PhotoCamera />
                           </IconButton>
                           <ErrorMessage name='slideTwoImg'/>
                         </Grid>

                         <Grid item xs={12}>
                          <br />
                          <FormikField name={'slideTwoText'} label={'Text Slide N°2'} />
                         </Grid>

                         <Grid item xs={12}> 
                           <br />
                           <IconButton color="error" id='slideThreeImg' name='slideThreeImg' aria-label="upload picture" component="label" >
                              <FormikFieldFile name={'slideThreeImg'} label={'Image Slide N°3'} />
                              <PhotoCamera />
                           </IconButton>
                           <ErrorMessage name='slideThreeImg'/>
                         </Grid>

                         <Grid item xs={12}>
                            <br />
                            <FormikField name={'slideThreeText'} label={'Text Slide N°3'} />
                         </Grid>

                         <Grid item width="100%">
                            <br />
                            <Button variant="contained" color="success" type='submit' fullWidth>
                               Submit
                            </Button>
                         </Grid> 

                     </Form>
                     </Grid>
             </Formik>
             </Box>
        </Grid>
    )
}

HomeForm.propTypes = {
  initialValues: PropTypes.shape({
    welcomeText: PropTypes.string,
    slideOneImg: PropTypes.string,
    slideOneText: PropTypes.string,
    slideTwoImg: PropTypes.string,
    slideTwoText: PropTypes.string,
    slideThreeImg: PropTypes.string,
    slideThreeText: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmit: PropTypes.func.isRequired,
}

export default HomeForm;
 