import React from 'react'
import {
  Button,
  Grid, TextField, Typography,
} from '@mui/material'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import Alert from '../Alert/Alert';

const MyProfile = (props) => {
  const {
    data, handleDeleteUser, id, userDelete, errorStatus,
  } = props
  const navigate = useNavigate()
  return (
    <Grid container widht="100%" display="flex" direction="row" justifyContent="center">
      <Grid
        container
        display="flex"
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100%"
        spacing={4}
        sx={{ width: { xs: '20rem', md: '25rem', lg: '50rem' } }}
      >
        <Grid item>
          <Typography>
            Perfil de
            {' '}
            {data[0].text}
          </Typography>
        </Grid>
        {data.map((row) => (
          <Grid item width="100%" key={row.id}>
            <TextField
              color="grey"
              variant="standard"
              key={row.id}
              label={row.label}
              defaultValue={row.text}
              fullWidth
              InputProps={{
                readOnly: true,
              }}
            />
          </Grid>
        ))}
        <Grid item>
          <Button variant="contained" color="primary" sx={{ fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' } }} onClick={() => { navigate('/mi-perfil/editar') }}>Editar</Button>
        </Grid>
        <Grid item>
          <Button
            sx={{
              color: 'black', fontSize: { xs: '.6rem', md: '.8rem', lg: '1rem' },
            }}
            onClick={() => handleDeleteUser(id)}
          >
            Eliminar Cuenta
          </Button>
        </Grid>
      </Grid>
      <Alert show={userDelete} title="Su usuario ha sido eliminado" textButton="Ok" />
      <Alert show={errorStatus} title="Error al eliminar usuario" textButton="Ok" />
    </Grid>
  )
}

MyProfile.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    label: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  id: PropTypes.number.isRequired,
  userDelete: PropTypes.bool.isRequired,
  errorStatus: PropTypes.string,
  handleDeleteUser: PropTypes.func.isRequired,
}

MyProfile.defaultProps = {
  errorStatus: null,
}

export default MyProfile
