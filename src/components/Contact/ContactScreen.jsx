import React from 'react'
import {
  Grid, IconButton, Link, Typography,
} from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import CallIcon from '@mui/icons-material/Call';
import ContactFormContainer from '../Forms/ContactForm/ContactFormContainer'

const ContactScreen = () => (
  <>
    <Grid container sx={{ maxWidth: '1600px', margin: 'auto' }}>
      <Grid item container justifyContent="center">
        <Typography margin="10px 5px 25px 15px" variant="h5" fontWeight="bold">
          ¡Contactate con nosotros!
        </Typography>
      </Grid>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={6}
        order={{ xs: 2, sm: 2, md: 1 }}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="300px"
      >
        <Grid
          item
          container
          xs={11}
          sm={8}
          md={10}
          lg={10}
          xl={8}
          padding={{ xs: '2rem 0', md: '0 2rem' }}
          display="flex"
          flexDirection="column"
        >
          <Typography variant="subtitle">
            Puedes solicitarnos información sobre cualquiera de nuestras actividades
            o enviarnos los comentarios que consideres oportunos para ayudarnos a mejorar.
          </Typography>
          <Typography variant="subtitle" fontWeight="bold">Dejanos tu mensaje y te responderemos lo antes posible.</Typography>
          <br />
          <Typography variant="subtitle" text fontWeight="bold" marginBottom=".5rem">Otros medios de contacto</Typography>
          <Grid item container flexDirection="column">
            <Grid item>
              <Link href="https://www.facebook.com/profile.php?id=100077792335889" target="_blank" rel="noopener noreferrer" underline="none" color="inherit">
                <IconButton color="inherit">
                  <FacebookIcon />
                </IconButton>
                <Typography variant="span"> Somos_Más</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com/educandosomosmas/" target="_blank" rel="noopener noreferrer" underline="none" color="inherit">
                <IconButton color="inherit">
                  <InstagramIcon />
                </IconButton>
                <Typography variant="span"> SomosMás</Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link href="tel:1160112988" target="_blank" rel="noopener noreferrer" underline="none" color="inherit">
                <IconButton color="inherit">
                  <CallIcon />
                </IconButton>
                <Typography variant="span"> 1160112988</Typography>
              </Link>
            </Grid>
          </Grid>
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
