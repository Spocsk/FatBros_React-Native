import axios from "axios";
import {
    API_TMDB_BEARER_PARAM,
    API_TMDB_QUERY_PARAMS,
} from '@env'

export default axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {API_TMDB_BEARER_PARAM},
  params: {API_TMDB_QUERY_PARAMS}
});
