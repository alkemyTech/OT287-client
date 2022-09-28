import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth/authSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
  },
})
