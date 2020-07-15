import axios from './helper'
import { API } from '../constants'

export const getCovidData = () => {
  return axios
    .get(API.SERVER_URL)
    .then((res) => res.data)
    .catch((error) => {
      return Promise.reject(error.response)
    })
}
