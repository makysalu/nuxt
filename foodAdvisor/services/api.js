import axios from 'axios'
import API_URL from '~/services/apiConfig'



async function apiCall(url) {
  const config = {
    method: 'get',
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }
  const urlCall = API_URL + url
  try {
    const response = await axios.get(urlCall, config)
    return response
  } catch (error) {
    console.log(error)
  }
}

async function apiPost(url, payload) {
    const config = {
      method: 'get',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: payload
    }
    const urlCall = API_URL + url
    try {
      const response = await axios.post(urlCall, config)
      return response
    } catch (error) {
      console.log(error)
    }
  }

  async function apiPut(url, payload) {
    const config = {
      method: 'get',
      mode: 'cors',
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      body: payload
    }
    const urlCall = API_URL + url
    try {
      const response = await axios.put(urlCall, config)
      console.log(response)
      return response
    } catch (error) {
      console.log(error)
    }
  }

const api = {}

api.getRestaurants = () => {
  return apiCall('restaurants')
}
api.postSubcribeUser = payload => {
    return apiPost('users', payload)
  }
api.putSumRestaurantLikes = payload => {
  const restaurantId = payload.id
  const url = 'restaurants/'+restaurantId
  return apiPut(url, payload.data)
}
api.getRestaurantsByCategory = ({category}) => {
  return apiGet('restaurants?category=' + category)
}
api.getOneRestaurant = ({ slug }) => {
  return apiGet('restaurants?slug=' + slug)
}
export default api