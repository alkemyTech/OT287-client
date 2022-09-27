import React from 'react'
import MediaCard from './MediaCard'
import { Container } from '@mui/system'
import { Grid } from '@mui/material'

const NewsCards = ({data}) => {
   
  return (
   <Container>
      <Grid container>       
      { data && data.map((d, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{mt:12, mb:12}} >
          <MediaCard data={d}/>
        </Grid>
      ))}      
      </Grid>
   </Container>
  )
}


export default NewsCards