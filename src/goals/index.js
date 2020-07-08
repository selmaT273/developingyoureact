import React from 'react';

import useFetch from '../hooks/fetch';

export default function Goals(props) {
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
    }
    console.log(data);

    return (
        <ul>
            {data.map((goal) => (               
                <li key={goal.id}>
                    {goal.title} {goal.startDate}
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