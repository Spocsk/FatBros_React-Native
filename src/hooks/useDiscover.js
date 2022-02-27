import { useState } from 'react';
import { getDiscover } from '../api/tmdb';
import { useQuery } from 'react-query'

export default function useDiscover() {
    const [results, setResults] = useState({})
    const { isLoading, isError, data } = useQuery('discover_movies', getDiscover)

    if(!isLoading && !isError) {
      return data
    }
}