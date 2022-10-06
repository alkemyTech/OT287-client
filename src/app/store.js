import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'
import alertReducer from './slices/auth/alertSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    alert: alertReducer,
  },
})
