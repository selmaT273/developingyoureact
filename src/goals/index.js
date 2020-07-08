import React from 'react';

import useFetch from '../hooks/fetch';

export default function Goals(props) {
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
    }
    console.log(data);

    return (
        <table>
            <thead>
                <td>
                    Goal Name
                </td>
                <td>
                    Start Date
                </td>
                <td>
                    EndDate
                </td>
                <td>
                    Category
                </td>
                <td>
                    Completion Status
                </td>
            </thead>
            <tbody>
            {data.map((goal) => (               
                <tr key={goal.id}>
                    <td>{goal.title}</td>
                    <td>{goal.startDate}</td>
                    <td>{goal.endDate}</td>
                    <td>{goal.category}</td>
                    <td>{goal.completed.toString()}</td>
                </tr>        
            ))}
            </tbody>
        </table>
        
    )
}