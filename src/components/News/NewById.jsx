import React from 'react';
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import './newById.css'
 
 

const NewById = ({ data }) => (
  <Box>
     <Box className="newByIdContainer" sx={{ borderRadius:'20px', maxWidth:'50%', padding:'0px'}}>
       <img
         className="newByIdImg"
         src={`/images/${data.image}`}
         alt={data.name}
         style={{borderRadius: '20px'}}
       />
     </Box>
     <Box sx={{textAlign: 'center'}}>
        <h1 className="newByIdTitle" style={{color:'#000000' }} >{data.name}</h1>
        <p className="newByIdParagraph" style={{color:'#000000' }}>{data.content}</p>
     </Box>
  </Box>
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
