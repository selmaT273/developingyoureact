import React from 'react';

import useFetch from '../hooks/fetch';

export default function GoalDetails(props) {
    const { data } = useFetch('https://developingyouapi.azurewebsites.net/api/goals');

    if (!data) {
        return <p>Loading...</p>
    }

    return (
        <>
        <table className="goals-table">
            <thead>
                <td>
                    Goal Name
                </td>
                <td>
                    Start Date
                </td>
                <td>
                    End Date
                </td>
                <td>
                    Category
                </td>
                <td>
                    Active
                </td>
            </thead>
            <tbody>
            {data.map((goal) => (               
                <tr key={goal.id}>
                    <td>{goal.title}</td>
                    <td>{Date(goal.startDate)}</td>
                    <td>{goal.endDate}</td>
                    <td>{goal.category}</td>
                    <td>{goal.completed.toString()}</td>
                </tr>        
            ))}
            </tbody>
        </table>
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
        </>
    )
}