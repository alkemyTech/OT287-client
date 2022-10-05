import React from 'react'
import { Grid, Typography } from '@mui/material'
import ContactFormContainer from '../Forms/ContactForm/ContactFormContainer'

const ContactScreen = () => (
  <>
    <Grid container height="100vh">
      <Grid
        container
        item
        height="100%"
        xs={12}
        sm={12}
        md={6}
        order={{ xs: 2, sm: 2, md: 1 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          xs={10}
          sm={10}
          md={10}
          lg={10}
          xl={8}
          mt={6}
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
        sm={12}
        md={6}
        order={{ xs: 1, sm: 1, md: 2 }}
      >
        <ContactFormContainer />
      </Grid>
    </Grid>
  </>
)

export default ContactScreen
