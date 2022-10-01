import axios from 'axios'

const httpService = async (method, url, body) => {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    let headers = {}
    if (user.token) {
      headers = {
        'Content-type': 'application/json; charset=UTF-8',
        Authorization: `Bearer ${user.token}`,
      }
    } else {
      headers = {
        'Content-type': 'application/json; charset=UTF-8',
      }
    }
    const { data } = await axios({
      method: `${method}`,
      baseURL: `${process.env.REACT_APP_API_DOMAIN}`,
      url: `${url}`,
      data: body,
      headers: {
        ...headers,
      },

    })
    return data
  } catch (error) {
    return error
  }
}

export default httpService
