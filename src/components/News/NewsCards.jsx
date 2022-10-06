import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Box } from '@mui/material'
import MediaCard from './MediaCard'

const NewsCards = ({ data, error, errorMessage }) => (

  <>
    {error && (
    <Box component="span" color="red">{error === 409 ? 'Error server conexion' : errorMessage}</Box>
    )}
    <Grid container display="flex" justifyContent="center" sx={{ width: { xs: '300px', sm: '100%' }, position: { xs: 'relative', sm: 'static' }, right: { xs: '75px' } }}>
      { data && data.map((d) => (
        <Grid item display="flex" justifyContent="center" m={2} xs={10} sm={8} md={6} lg={4} xl={4} key={d.id}>
          <MediaCard
            data={d}
          />
        </Grid>
      ))}
    </Grid>

  </>
)

NewsCards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    createdAt: PropTypes.string,
    content: PropTypes.string,
  })),
  error: PropTypes.string,
  errorMessage: PropTypes.string,

};

NewsCards.defaultProps = {
  data: null,
  error: null,
  errorMessage: null,
}

export default NewsCards
