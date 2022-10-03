import React from 'react'
import PropTypes from 'prop-types';
import Items from '../Items'

const Categories = ({ data, cardFields, nestedRoutes }) => (
  <Items array={data} cardFields={cardFields} nestedRoutes={nestedRoutes} />
)

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
}

export default Categories
