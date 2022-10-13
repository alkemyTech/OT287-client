import React from 'react'
import PropTypes from 'prop-types'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'
import EditIcon from '@mui/icons-material/Edit'
import { useNavigate } from 'react-router-dom'
import DeleteModal from '../Layout/DeleteModal'

const ItemCard = (props) => {
  const {
    data, fields, nestedRoutes, handleModal, setHandleModal, setElementToDelete, elementToDelete,
    deleteElement, deletedSuccess, setDeletedSuccess, errorStatus,
  } = props
  const navigate = useNavigate()

  return (
    <Card sx={{ borderRadius: '8px' }}>
      { data[fields.imageUrl] && (
      <CardMedia
        component="img"
        height="150"
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
          sx={{ color: '#DB5752', border: '1px solid #DB5752' }}
          onClick={() => navigate(`/back-office/${data.id}/${nestedRoutes.edit}`)}
        >
          edit
        </Button>
        <Button
          color="error"
          size="small"
          startIcon={<HighlightOffIcon />}
          sx={{ color: 'white', backgroundColor: '#DB5752', mr: '5px' }}
          onClick={() => {
            setHandleModal(true)
            setElementToDelete(data)
          }}
        >
          delete
        </Button>
      </CardActions>
      <DeleteModal
        openModal={handleModal}
        setHandleModal={setHandleModal}
        elementToDelete={elementToDelete}
        deleteElement={deleteElement}
        deletedSuccess={deletedSuccess}
        errorStatus={errorStatus}
        setElementToDelete={setElementToDelete}
        setDeletedSuccess={setDeletedSuccess}
      />
    </Card>
  )
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
  deletedSuccess: PropTypes.bool.isRequired,
  setDeletedSuccess: PropTypes.func.isRequired,
  errorStatus: PropTypes.string.isRequired,
}

export default ItemCard
