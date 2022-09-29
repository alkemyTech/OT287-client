import React from 'react'
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { useNavigate } from "react-router-dom"

const ItemCard = ({ data, fields, nestedRoutes }) => {
  const navigate = useNavigate()

  return (<Card sx={{ borderRadius: '8px' }}>
    { data[fields.imageUrl] && (
      <CardMedia
        component="img"
        height="140"
        image={data[fields.imageUrl]}
        alt={data[fields.title]}
      />
    )}
    <CardContent>
      <Typography variant="h6" sx={{ mt: 0 }}>
        { data[fields.title] }
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ height: '2.3rem', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        { data[fields.content] }
      </Typography>
    </CardContent>
    <CardActions sx={{ justifyContent: 'right' }}>
      <Button 
          color="warning" 
          size="small" 
          startIcon={<EditIcon />} 
          sx={{ color: '#666666' }}
          onClick={() => navigate(`/back-office/${nestedRoutes.edit}`)}  
        >edit</Button>
      <Button 
        color="error" 
        size="small" 
        startIcon={<DeleteIcon />}
        onClick={() => navigate(`/back-office/${nestedRoutes.delete}`)}
      >delete</Button>
    </CardActions>
  </Card>)
}

ItemCard.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  nestedRoutes: PropTypes.shape({
    edit: PropTypes.string,
    delete: PropTypes.string,
  }).isRequired,
}

export default ItemCard
