import React from 'react'
import { Grid, Container, Box } from '@mui/material'
import MediaCard from './MediaCard'


const NewsCards = ({data, error, errorMessage}) => {
   
  return (
   <Container 
  style={{maxWidth:'fit-content', padding: '0px'}}
   >
    {error && (
                    <Box component="span" color="red">{error === 409 ? 'Error server conexion' : errorMessage}</Box>
                  )}
      <Grid container >     
      { data && data.map((d, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{mt:2, mb:2, mr:5}}  >
            <MediaCard 
            data={d}/>
        </Grid>
      ))}      
      </Grid>
   </Container>
  )
}


export default NewsCards