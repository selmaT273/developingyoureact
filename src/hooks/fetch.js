import { useState, useEffect } from 'react';

function useFetch(url) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function goFetch(){
            let response = await fetch(url);
            let json = await response.json();
            setData(json);
        }

        goFetch();
    }, [url]);

    return [
        data,
    ];
}

export default useFetch;