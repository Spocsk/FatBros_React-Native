import { useState, useEffect } from 'react';
import { API_BASE_URL, API_BEARER_TOKEN } from '@env'

export default function useTvShows() {

    const [results, setResults] = useState([])
    
    const fetchData = async () => {
        return fetch(`${API_BASE_URL}/tv/top_rated?language=fr-FR`,{ 
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