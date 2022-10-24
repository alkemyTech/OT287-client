import React from 'react';
import {
  Box, Button, Grid, Paper, Typography,
} from '@mui/material'
import PropTypes from 'prop-types'
import './newById.css'
import { useNavigate } from 'react-router-dom'

const NewById = ({ data }) => {
  const navigate = useNavigate()

  return (
    <Grid item xs={12} height="100%" width="100%" minwidth="250px" maxWidth="1000px" margin="0 auto 120px auto">
      <Paper
        sx={{
          height: '30vw',
          minHeight: '240px',
          position: 'relative',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundImage: `url(${data.image})`,
        }}
      >
        <img style={{ display: 'none' }} src={data.image} alt={data.name} />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            backgroundColor: 'rgba(0,0,0,.3)',
          }}
        />
      </Paper>
      <Grid container>
        <Grid item>
          <Box
            sx={{
              margin: '30px 0 10px 0',
              minWidth: '250px',
            }}
          >
            <Typography
              className="newByIdTitle"
              color="inherit"
              sx={{ typography: { lg: 'h4', xs: 'h5' }, margin: '10px 0' }}
            >
              {data.name}
            </Typography>
            <Typography
              className="newByIdParagraph"
              sx={{ typography: { lg: 'h6', xs: 'p' } }}
              color="inherit"
              paragraph
              dangerouslySetInnerHTML={{ __html: data.content }}
            />
            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              margin="60px 0 0 0"
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  fontSize: { xs: '.8rem', md: '1rem', lg: '1.4rem' },
                }}
                onClick={() => { navigate('/novedades') }}
              >
                Volver

              </Button>
            </Box>

          </Box>
        </Grid>
      </Grid>
    </Grid>
  )
};

NewById.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    categoryId: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

export default NewById;
