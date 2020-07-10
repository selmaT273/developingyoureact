import { useState, useEffect, useCallback } from 'react';
import useAuth from '../contexts/auth'

function useFetch(url) {
    const [data, setData] = useState(null);
    const { user } = useAuth();

    const goFetch = useCallback(async function goFetch(){
        let options = { headers: {} };
        if (user) {
            options.headers['Authorization'] = `Bearer ${user.token}`;
        }

        let response = await fetch(url, options);
        let json = await response.json();
        setData(json);
    }, [url, user]);

    useEffect(() => {
        if (!user){
            setData([]);
            return;
        }
        goFetch();
    }, [goFetch, user]);

    return {
        data,
        refresh: goFetch,
    };
}

export default useFetch;