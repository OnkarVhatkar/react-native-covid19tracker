import axios from './helper'
import { API } from '../constants'

export const getCovidData = () => {
  return axios
    .get(API.SERVER_URL)
    .then((res) => res.data)
    .catch((error) => {
      console.log('err')
      console.log(JSON.stringify(error))
    })
}
