import React from 'react';
import { Navigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { destroyUserData } from '../../app/slices/auth/authSlice'
import { setAlertOff } from '../../app/slices/auth/alertSlice';

const Logout = () => {
  const dispatch = useDispatch()
  dispatch(destroyUserData())
  setTimeout(() => {
    dispatch(setAlertOff(false))
  }, 50)
  return <Navigate to="/" />
}

export default Logout
