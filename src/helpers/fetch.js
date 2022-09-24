import axios from 'axios'

const fetchEndpoint = async (method, url, body) => {
  try {
    const token = JSON.parse(localStorage.getItem('token'));
    const { data } = await axios({
      method: `${method}`,
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

export default fetchEndpoint
