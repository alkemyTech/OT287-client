import React from 'react'
import PropTypes from 'prop-types';

import { Grid, Box } from '@mui/material'
import ActivitiesCard from './ActivitiesCard'

const Activities = ({ data, error }) => (

  <>
    {error && (
    <Box component="span" color="red">{error === 409 ? 'Error server conexion' : error}</Box>
    )}
    <Grid container display="flex" justifyContent="center" sx={{ width: { xs: '300px', sm: '100%' } }}>
      { data && data.map((d) => (
        <Grid item display="flex" justifyContent="center" m={2} xs={10} sm={8} md={6} lg={4} xl={4} key={d.id}>
          <ActivitiesCard
            data={d}
          />
        </Grid>
      ))}
    </Grid>

  </>
)



Activities.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    image: PropTypes.string,
    content: PropTypes.string,
  }),
  error: PropTypes.string,
}

Activities.defaultProps = {
  data: null,
  error: null,
}

export default Activities
