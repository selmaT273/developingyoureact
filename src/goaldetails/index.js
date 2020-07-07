import React from 'react';

import useFetch from '../hooks/fetch';

export default function GoalDetails(props) {
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <ul>
            {data.map((goal) => (
                <li>{goal.title}</li>
            ))}
        </ul>
    )
}