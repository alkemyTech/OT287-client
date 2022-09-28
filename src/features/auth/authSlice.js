import { createSlice } from '@reduxjs/toolkit'

const userData = JSON.parse(localStorage.getItem('user'))

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    userData,
  },
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload
      localStorage.setItem('user', JSON.stringify(state.userData))
    },
    destroyUserData: (state) => {
      state.userData = null
      localStorage.removeItem('user')
    },
  },
})

export const { setUserData, destroyUserData } = authSlice.actions

export default authSlice.reducer
