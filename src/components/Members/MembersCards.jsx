import React from 'react'
import { Grid, Container, Box } from '@mui/material'
import MediaCard from './MediaCard'


const MembersCards = ({data, error, errorMessage}) => {
   
  return (
   <Container maxWidth='0px' style={{padding: '0px'}} >
    {error && (
                    <Box component="span" color="red">{error === 409 ? 'Error server conexion' : errorMessage}</Box>
                  )}
      <Grid container spacing={3}  >     
      { data && data.map((d, index) => (
        <Grid item xs={12} sm={6} md={4} lg={2} key={index} sx={{mt:2, mb:10, textAlign:'-webkit-center'}} >
            <MediaCard 
            data={d}/>
        </Grid>
      ))}      
      </Grid>
   </Container>
  )
}


export default MembersCards