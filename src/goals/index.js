import React from 'react';
import ProgressBar from '../charts/progressbar';
import useFetch from '../hooks/fetch';
import './goals.scss';

export default function Goals(props) {
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
    }
    console.log(data);

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
                    <td>{goal.startDate}</td>
                    <td>{goal.endDate}</td>
                    <td>{goal.category}</td>
                    <td>{goal.completed.toString()}</td>
                </tr>        
            ))}
            </tbody>
        </table>
        <div className="progress-bar">
            {data.map((goal) => (
                <ProgressBar goal={goal} />
            ))}
        </div>
        </>
    )
}