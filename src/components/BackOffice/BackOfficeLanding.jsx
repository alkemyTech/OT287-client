import {
  Avatar, Grid, Typography,
} from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'

const BackOfficeLanding = () => {
  const { userName, image } = useSelector((state) => state.auth.userData)

  return (
    <Grid container p={4} justifyContent="center" flexDirection="column" alignItems="center" mt="1rem" height="50%">
      <Typography variant="h7" fontWeight="500">
        Bienvenidx
      </Typography>

      <Grid item container justifyContent="center" mt="1rem" />
      <Avatar
        alt="Remy Sharp"
        src={image}
        sx={{ width: 46, height: 46 }}
      />
      <Typography mt="1rem">{userName}</Typography>
    </Grid>

  )
}

export default BackOfficeLanding
