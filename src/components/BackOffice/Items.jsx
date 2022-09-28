import React from 'react'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import ItemCard from './ItemCard'

const Items = ({ array, cardFields, nestedRoutes }) => (
  <Box sx={{ m: '1rem', mt: '6rem', width: '100%' }}>
    <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
      { array && array.map((el) => (
        <Grid xs={12} sm={6} md={4} key={el.id}>
          <ItemCard data={el} fields={cardFields} nestedRoutes={nestedRoutes} />
        </Grid>
      ))}
    </Grid>
  </Box>
)

Items.propTypes = {
  array: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  })).isRequired,
  cardFields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
};

export default Items
