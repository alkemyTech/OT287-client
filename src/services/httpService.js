import axios from 'axios'

const httpService = async (method, url, body) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: `${method}`,
      baseURL: 'http://localhost:3001',
      url: `${url}`,
      data: body,
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${token}`,
      },
    })
    return data
  } catch (error) {
    return error
  }
}

export default httpService
