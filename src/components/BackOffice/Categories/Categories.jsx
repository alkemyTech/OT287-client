import React from 'react'
import PropTypes from 'prop-types';
import { Alert, AlertTitle } from '@mui/material'
import Items from '../Items'

const Categories = ({
  error, data, cardFields, nestedRoutes,
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
    <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes} />
  )
}

Categories.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.number,
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
    imageUrl: null,
  }).isRequired,
  error: PropTypes.string,
}

Categories.defaultProps = {
  error: null,
}

export default Categories
