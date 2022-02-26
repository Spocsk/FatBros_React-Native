import { useEffect, useState } from 'react';
import tmdb from '../api/tmdb';

export default function useResults() {
    const [results, setResults] = useState({})
    const searchApi = async () => {
        try {
          const response = await tmdb.get('/movie/550');
          setResults(response.data);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        searchApi()
    }, []);

    return results;
}