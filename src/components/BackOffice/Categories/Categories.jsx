import React from 'react'
import PropTypes from 'prop-types'
import { Alert, AlertTitle, Typography } from '@mui/material'
import Items from '../Items'

const Categories = ({
  error, data, cardFields, nestedRoutes, ...props
}) => {
  if (error) {
    return (
      <Alert severity="error" sx={{ mt: 2 }}>
        <AlertTitle>Error</AlertTitle>
        { error }
      </Alert>
    )
  }

  return (
    <>
      <Typography
        component="h1"
        variant="h5"
        sx={{ marginX: { lg: '10px', xs: '10px' }, marginY: { lg: '40px', xs: '10px' }, fontWeight: 'bold' }}
      >
        Lista de Categorias
      </Typography>
      <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes} {...props} />

    </>
  )
}

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  })).isRequired,
  nestedRoutes: PropTypes.shape({
    create: PropTypes.string,
    edit: PropTypes.string,
    delete: PropTypes.string,
  }).isRequired,
  cardFields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  error: PropTypes.string,
}

Categories.defaultProps = {
  error: null,
}

export default Categories
