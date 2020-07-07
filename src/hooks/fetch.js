import { useState, useEffect } from 'react';
import useAuth from '../contexts/auth'

function useFetch(url) {
    const [data, setData] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        async function goFetch(){
            let options = { headers: {} };
            if (user) {
                options.headers['Authorization'] = `Bearer ${user.token}`;
            }

            let response = await fetch(url, options);
            let json = await response.json();
            setData(json);
        }

        goFetch();
    }, [url, user]);

    return {
        data,
    };
}

export default useFetch;