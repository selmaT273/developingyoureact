import React from 'react';
import useFetch from '../hooks/fetch';
import './goals.scss';
import CreateGoal from '../creategoal';
import {  Link } from 'react-router-dom';


export default function Goals(props) {
    const {data, refresh} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');

    if (!data) {
        return <p>Loading...</p>
    }

    const refreshOnSubmit = () => {
        refresh();
    }
    
    return (
        <>
        <CreateGoal refreshPage={refreshOnSubmit} />
        <h3>Goals</h3>
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
                    Completed
                </td>
            </thead>
            <tbody>
            {data.map((goal) => (               
                <tr key={goal.id}>
                    <td key={goal.id}><Link exact to={`/Goals/${goal.id}`}> {goal.title}</Link></td>
                     <td>{Date(goal.startDate).slice(0, 15)}</td>
                    <td>{Date(goal.endDate).slice(0, 15)}</td>
                    <td>
                        {(goal.completed === true) ? 
                        (<img src={require("../img/check.png")} alt="Goal completed" height="30px" width="30px" />) : 
                        (<img src={require("../img/false.png")} alt="Goal not completed" height="30px" width="30px" />)}
                    </td>
                </tr>        
            ))}
            </tbody>
        </table>
        </>
    )
}