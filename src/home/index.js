import React from 'react';
import useFetch from '../hooks/fetch';

export default function Home(props){
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
        }

        return (
            <div class="snapshot-container">
                {data.map((goal) => (               
                    <h1> {goal.id}</h1>
                ))}
            </div>
            
        )
}