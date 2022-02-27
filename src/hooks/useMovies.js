import { useState, useEffect } from 'react';
import { API_BASE_URL, API_BEARER_TOKEN } from '@env'

export default function useMovies() {

    const [results, setResults] = useState([])
    
    const fetchData = async () => {
        return fetch(`${API_BASE_URL}/discover/movie`,{ 
            headers: new Headers({
            'Authorization': `bearer ${API_BEARER_TOKEN}`
        })})
        .then(response => response.json())
        .then(data => setResults(data.results))
    }

    useEffect(() => {
        fetchData()
    }, [])
    
    return results;
}