import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';
import * as Yup from 'yup'

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
        <Formik
        initialValues = {initialValues}
        onSubmit = {onSubmit}
        validationSchema = {validationSchema}>
                <Form>
                    <label htmlFor="welcomeText">Welcome text</label> <br />
                    <Field as="textarea" id='welcomeText' name='welcomeText'/> <br />
                    <ErrorMessage name='welcomeText'/>
                    <br />
                    <label htmlFor="slideOneImg">Image Slide N°1</label> <br />
                    <Field type="file" id='slideOneImg' name='slideOneImg' accept=".jpg, .png, .tif"/> <br />
                    <ErrorMessage name='slideOneImg'/>
                    <br />
                    <label htmlFor="slideOneText">Text Slide N°1</label> <br />
                    <Field type="text" id='slideOneText' name='slideOneText'/> <br />
                    <ErrorMessage name='slideOneText'/>
                    <br />
                    <label htmlFor="slideTwoImg">Image Slide N°2</label> <br />
                    <Field type="file" id='slideTwoImg' name='slideTwoImg' accept=".jpg, .png, .tif"/> <br />
                    <ErrorMessage name='slideTwoImg'/>
                    <br />
                    <label htmlFor="slideTwoText">Text Slide N°2</label> <br />
                    <Field type="text" id='slideTwoText' name='slideTwoText'/> <br />
                    <ErrorMessage name='slideTwoText'/>
                    <br />
                    <label htmlFor="slideThreeImg">Image Slide N°3</label> <br />
                    <Field type="file" id='slideThreeImg' name='slideThreeImg' accept=".jpg, .png, .tif"/> <br />
                    <ErrorMessage name='slideThreeImg'/>
                    <br />
                    <label htmlFor="slideThreeText">Text Slide N°3</label> <br />
                    <Field type="text" id='slideThreeText' name='slideThreeText'/> <br />
                    <ErrorMessage name='slideThreeText'/>
                    <br />
                    <button type='submit'>Submit</button>
                </Form>
        </Formik>
    )
}

export default HomeForm;
