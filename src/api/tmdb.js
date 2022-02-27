import axios from 'axios'
import {
    API_BASE_URL,
    API_BEARER_TOKEN
} from '@env'

export function fetchDiscoverMovies() {
  return axios.get(`${API_BASE_URL}/discover/movie`, {
    headers: {
      Authorization: 'bearer ' + API_BEARER_TOKEN
  }
  })
}