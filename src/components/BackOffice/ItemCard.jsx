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
import DeleteModal from './Categories/DeleteModal'

import { useNavigate } from "react-router-dom"

const ItemCard = (props) => {
  const {
    data, fields, nestedRoutes, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSucces, setDeletedSucces, errorStatus,
  } = props
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
        onClick={() => {
          console.log(data)
          setHandleModal(true)
          setElementToDelete(data)
        }}
      >delete</Button>
    </CardActions>
    <DeleteModal
        openModal={handleModal}
        setHandleModal={setHandleModal}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSucces={deletedSucces}
        errorStatus={errorStatus}
        setElementToDelete={setElementToDelete}
        setDeletedSucces={setDeletedSucces}
      />
  </Card>)
}

ItemCard.propTypes = {
  fields: PropTypes.shape({
    title: PropTypes.string,
    content: PropTypes.string,
    imageUrl: PropTypes.string,
  }).isRequired,
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
  nestedRoutes: PropTypes.shape({
    edit: PropTypes.string,
    delete: PropTypes.string,
  }).isRequired,
  handleModal: PropTypes.bool.isRequired,
  setHandleModal: PropTypes.func.isRequired,
  setElementToDelete: PropTypes.func.isRequired,
  elementToDelete: PropTypes.oneOfType([PropTypes.object]).isRequired,
  deleteElement: PropTypes.func.isRequired,
  deletedSucces: PropTypes.bool.isRequired,
  setDeletedSucces: PropTypes.func.isRequired,
  errorStatus: PropTypes.string.isRequired,
}

export default ItemCard
