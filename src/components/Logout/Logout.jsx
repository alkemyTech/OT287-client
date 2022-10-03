import React from 'react';
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { destroyUserData } from '../../app/slices/auth/authSlice'

const Logout = () => {
  const dispatch = useDispatch()

  dispatch(destroyUserData())
  return <Navigate to="/" />
}

export default Logout
