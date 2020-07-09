import React from 'react';
import useFetch from '../hooks/fetch';
import './goals.scss';
import CreateGoal from '../creategoal';

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
                    Completed
                </td>
            </thead>
            <tbody>
            {data.map((goal) => (               
                <tr key={goal.id}>
                    <td>{goal.title}</td>
                    <td>{Date(goal.startDate).slice(0, 15)}</td>
                    <td>{Date(goal.endDate).slice(0, 15)}</td>
                    <td>{goal.category}</td>
                    <td>
                        {(goal.completed === true) ? 
                        (<img src={require("../img/check.png")} alt="Goal completed" />) : 
                        (<img src={require("../img/false.png")} alt="Goal not completed" />)}
                    </td>
                </tr>        
            ))}
            </tbody>
        </table>
        </>
    )
}