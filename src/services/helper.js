import axios from 'axios'
import { API } from '../constants'

const axiosInstance = axios.create({
  baseURL: API.SERVER_URL,
  headers: {
    'Content-Type': API.CONTENT_TYPE,
    'x-rapidapi-key': API.RAPI_API_KEY,
  },
})

export default axiosInstance
