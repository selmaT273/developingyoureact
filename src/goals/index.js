import React from 'react';
import useFetch from '../hooks/fetch';
import './goals.scss';
import CreateGoal from '../creategoal';
import {  Link } from 'react-router-dom';


export default function Goals(props) {
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
    }
    console.log(data);

    const noramlizedDate = Date(data.startDate);
    console.log(noramlizedDate);
    
    return (
        <>
        <CreateGoal />
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
                    <td key={goal.id}><Link exact to={`/Goals/${goal.id}`}> {goal.title}</Link></td>
                    <td>{Date(goal.startDate)}</td>
                    <td>{goal.endDate}</td>
                    <td>{goal.category}</td>
                    <td>{goal.completed.toString()}</td>
                </tr>        
            ))}
            </tbody>
        </table>
        </>
    )
}