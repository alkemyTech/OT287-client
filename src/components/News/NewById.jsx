import React from 'react';
import PropTypes from 'prop-types'
import './newById.css'

const NewById = ({ data }) => (
  <div className="newByIdContainer">
    <h1 className="newByIdTitle">{data.name}</h1>
    <hr />
    <img
      className="newByIdImg"
      src={data.image}
      alt={data.name}
    />
    <p className="newByIdParagraph">{data.content}</p>
  </div>
);

NewById.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    categoryId: PropTypes.number,
    name: PropTypes.string,
    content: PropTypes.string,
    image: PropTypes.string,
  }).isRequired,
}

export default NewById;
