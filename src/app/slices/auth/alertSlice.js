import { createSlice } from '@reduxjs/toolkit'

export const alertSlice = createSlice({
  name: 'alert',
  initialState: {
    alertStatus: false,
  },
  reducers: {
    setAlertOn: (state) => {
      state.alertStatus = Boolean(JSON.parse(localStorage.getItem('user')))
    },
    setAlertOff: (state) => {
      state.alertStatus = Boolean(JSON.parse(localStorage.getItem('user')))
    },
  },
})

export const { setAlertOn, setAlertOff } = alertSlice.actions

export default alertSlice.reducer
