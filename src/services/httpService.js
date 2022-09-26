import axios from 'axios'

const httpService = async (method, url, body) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    let headers = {}
    if (token) {
      headers = {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      }
    } else {
      headers = {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    const { data } = await axios({
      method: `${method}`,
      baseURL: 'http://localhost:3001',
      url: `${url}`,
      data: body,
      headers: {...headers},
    })
    return data
  } catch (error) {
    return error
  }
}

export default httpService
