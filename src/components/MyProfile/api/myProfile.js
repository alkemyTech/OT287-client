import axios from 'axios'

axios.defaults.headers.common.Authorization = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiZmlyc3ROYW1lIjoiZWxpIiwibGFzdE5hbWUiOiJiIiwiZW1haWwiOiJlbGlAZ21haWwuY29tIiwiaW1hZ2UiOm51bGwsInBhc3N3b3JkIjoiRWxpODg4ODgiLCJyb2xlSWQiOjIsImRlbGV0ZWRBdCI6bnVsbCwiY3JlYXRlZEF0IjoiMjAxMi0xMi0yNVQwMDowMDowMC4wMDBaIiwidXBkYXRlZEF0IjoiMjAxMi0xMi0yNVQwMDowMDowMC4wMDBaIiwiaWF0IjoxNjYzODUyNDEwfQ.OZG6p_bJGgA90Kmxd89T0cEnceVDWBCBdsCXNhTwbGM'

const getApiUser = async () => axios.get('http://localhost:3000/auth/me')

const deleteApiUser = async (userId) => axios.delete(`http://localhost:3000/users/${userId}`)

export { deleteApiUser, getApiUser }
