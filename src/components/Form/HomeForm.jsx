import { Formik, Form, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup';
import FormikField from '../FormikField/text';
import FormikFieldTextarea from '../FormikField/textarea'
import {  Button, Grid, Typography, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';

const initialValues = {
    welcomeText: '',
    slideOneImg: '',
    slideOneText: '',
    slideTwoImg: '',
    slideTwoText: '',
    slideThreeImg: '',
    slideThreeText: ''
}

const onSubmit = values => {
    console.log('Form data', values);
    const homeDataToEdit = {
    welcomeText: values.welcomeText,
    slideOneImg: values.slideOneImg,
    slideOneText: values.slideOneText,
    slideTwoImg: values.slideTwoImg,
    slideTwoText: values.slideTwoText,
    slideThreeImg: values.slideThreeImg,
    slideThreeText: values.slideThreeText
    }
    return homeDataToEdit
}

const FILE_SIZE = 160 * 1024;
const SUPPORTED_FORMATS = [
      "image/jpg",
      "image/jpeg",
      "image/gif",
      "image/png"
    ];

const validationSchema = Yup.object({
    welcomeText: Yup.string().required('Required').min(20, 'Welcome text must be of minimum20 characters'),
    slideOneImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
    slideOneText: Yup.string().required('Required'),
    slideTwoImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
    slideTwoText: Yup.string().required('Required'),
    slideThreeImg: Yup.mixed()
    .required("A file is required")
    .test(
      "fileSize",
      "File too large",
      value => value && value.size <= FILE_SIZE
    )
    .test(
      "fileFormat",
      "Unsupported Format",
      value => value && SUPPORTED_FORMATS.includes(value.type)
    ),
    slideThreeText: Yup.string().required('Required'),
})

function HomeForm () {
    return(
      <Grid container widht="100%" display="flex" direction="column" padding={10} >

        <Box bgcolor="#ebebeb" width="auto"
         sx={{
          boxShadow: 0,
          p: 1,
          m: 1,
          borderRadius: 2,
          textAlign: 'center',
          fontSize: '0.875rem',
          fontWeight: '700',
        }}>

        
        <Grid container widht="100%" justifyContent= "center" >
           <Grid item margin={5} ><Typography variant='h5'>Formulario Edicion Home</Typography></Grid>
        </Grid>
             <Formik
             initialValues = {initialValues}
             onSubmit = {onSubmit}
             validationSchema = {validationSchema}>
              <Grid container widht="100%" justifyContent= "center" >
                     <Form>
                       <FormikFieldTextarea name={'welcomeText'} label={'welcomeText'} />

                         <br />
                         <label htmlFor="slideOneImg">Image Slide N°1</label> <br />
                         <IconButton color="error" id='slideOneImg' name='slideOneImg' aria-label="upload picture" component="label" >
                         <input hidden accept="image/*" type="file" />
                         <PhotoCamera />
                         </IconButton>
                         <ErrorMessage name='slideOneImg'/>

                         <br />
                         <FormikField name={'slideOneText'} label={'Text Slide N°1'} />

                         <br />
                         <label htmlFor="slideTwoImg">Image Slide N°2</label> <br />
                         <IconButton color="error" id='slideTwoImg' name='slideTwoImg' aria-label="upload picture" component="label" >
                         <input hidden accept="image/*" type="file" />
                         <PhotoCamera />
                         </IconButton>
                         <ErrorMessage name='slideTwoImg'/>

                         <br />
                         <FormikField name={'slideTwoText'} label={'Text Slide N°2'} />

                         <br />
                         <label htmlFor="slideThreeImg">Image Slide N°3</label> <br />
                         <IconButton color="error" id='slideThreeImg' name='slideThreeImg' aria-label="upload picture" component="label" >
                         <input hidden accept="image/*" type="file" />
                         <PhotoCamera />
                         </IconButton>
                         <ErrorMessage name='slideThreeImg'/>

                         <br />
                         <FormikField name={'slideThreeText'} label={'Text Slide N°3'} />

                         <br />
                         <Grid item width="100%"> 
                         <Button
            variant="contained" color="success" type='submit'
            fullWidth
          >
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

export default HomeForm;
