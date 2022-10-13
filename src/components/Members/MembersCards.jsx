import React from 'react'
import PropTypes from 'prop-types';
import {
  Grid, Container, Box, CardActionArea,
} from '@mui/material'
import MediaCard from './MediaCard'

const MembersCards = ({
  data, error, errorMessage, handleMemberBanner, location,
}) => (
  <Container maxWidth="0px" style={{ padding: '0px' }}>
    {error && (
    <Box component="span" color="red">{error === 409 ? 'Error server conexion' : errorMessage}</Box>
    )}
    <Grid container spacing={3}>
      { data && data.map((d) => (

        <Grid item xs={12} sm={6} md={4} lg={2} key={d.id} sx={{ mt: 2, mb: 10, textAlign: '-webkit-center' }}>
          {location === '/sobre-nosotros'
            ? (
              <CardActionArea onClick={() => handleMemberBanner(d)}>
                <MediaCard
                  data={d}
                />
              </CardActionArea>
            )
            : (
              <MediaCard
                data={d}
              />
            )}

        </Grid>
      ))}
    </Grid>
  </Container>
)

MembersCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
  })),
  error: PropTypes.string,
  errorMessage: PropTypes.string,
  location: PropTypes.string,
  handleMemberBanner: PropTypes.func,

}

MembersCards.defaultProps = {
  handleMemberBanner: null,
  location: null,
  data: null,
  error: null,
  errorMessage: null,
}
export default MembersCards
