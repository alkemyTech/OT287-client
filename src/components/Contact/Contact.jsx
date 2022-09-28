import React from 'react'
import { Grid, Typography } from '@mui/material'
import PropTypes from 'prop-types'
import ContactForm from './ContactForm'

const Contact = (props) => {
  const {
    initialValues, validationSchema, onSubmitForm, errorStatus, navigate, setErrorStatus, contactCreated, setContactCreated,
  } = props
  return (
    <>
      <Grid container height="100vh">
        <Grid
          container
          item
          height="100%"
          xs={12}
          sm={6}
          lg={6}
          xl={6}
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Grid
            item
            xs={10}
            lg={8}
            xl={8}
            mt={4}
            height="100%"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ backgroundColor: '#e3f2fd', borderRadius: '20px' }}
          >
            <Typography m="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
              eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.

            </Typography>
          </Grid>

        </Grid>
        <Grid
          container
          item
          display="flex"
          height="100%"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          xs={12}
          sm={6}
          lg={6}
          xl={6}
        >
          <ContactForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmitForm={onSubmitForm}
            errorStatus={errorStatus}
            navigate={navigate}
            setErrorStatus={setErrorStatus}
            contactCreated={contactCreated}
            setContactCreated={setContactCreated}
          />
        </Grid>
      </Grid>
    </>
  )
}

Contact.propTypes = {
  initialValues: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
  }).isRequired,
  validationSchema: PropTypes.oneOfType([PropTypes.object]).isRequired,
  onSubmitForm: PropTypes.func.isRequired,
  setErrorStatus: PropTypes.func.isRequired,
  contactCreated: PropTypes.bool.isRequired,
  setContactCreated: PropTypes.func.isRequired,
  navigate: PropTypes.func.isRequired,
  errorStatus: PropTypes.number,
}
Contact.defaultProps = {
  errorStatus: null,

}
export default Contact
