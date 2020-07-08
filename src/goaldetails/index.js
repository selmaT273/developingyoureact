import React from 'react';

import useFetch from '../hooks/fetch';

export default function GoalDetails(props) {
    const { data } = useFetch('https://developingyouapi.azurewebsites.net/api/goals');

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <h1>{goal.title}</h1>
        <ul>
            <li>{goal.startDate}</li>
            <li>{goal.endDate}</li>
            <li>{goal.category}</li>
            {data.map((goal) => (
                <li key={goal.id}>
                    <ul>
                        {goal.instances.map((instance) => (
                            <li key={instance.id}>{instance.startTime}  {instance.comment}</li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}