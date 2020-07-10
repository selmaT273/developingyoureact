import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/fetch';
import './goaldetails.scss';

export default function GoalDetails(props) {
    const {id} = useParams();
    const { data } = useFetch(`https://developingyouapi.azurewebsites.net/api/goals/${id}`);

    if (!data) {
        return <p>Loading...</p>
    }

    if (!data.id) {
        return <p> Not Found </p>
    }

    return (
        <>
        <h3>
            Details
        </h3>
                <table className="goaldetails-table">
                <thead>
                    <tr>
                        <th>
                            Goal Name
                        </th>
                        <th>
                            Start Date
                        </th>
                        <th>
                            End Date
                        </th>
                        <th>
                            Active
                        </th>
                    </tr>
                </thead>
                <tbody>         
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{Date(data.startDate).slice(0, 15)}</td>
                    <td>{Date(data.endDate).slice(0, 15)}</td>
                    <td>
                        {(data.completed === true) ? 
                        (<img src={require("../img/check.png")} alt="Goal completed" height="30px" width="30px" />) : 
                        (<img src={require("../img/false.png")} alt="Goal not completed" height="30px" width="30px" />)}
                    </td>
                </tr>        
            </tbody>
        </table>
        <h3>Instances Log</h3>
        <table className="goaldetails">
            <thead>
                <tr>
                    <th>
                        Start Time
                    </th>
                    <th>
                        End Time
                    </th>
                    <th>
                        Comments
                    </th>
                </tr>
            </thead>
                <tbody>
                        {data.instances.map((instance) => (
                            <tr key={instance.id}>
                            <td>{Date(instance.startTime).slice(0, 15)}</td>  
                            <td>{Date(instance.endTime).slice(0, 15)}</td>
                            <td>{instance.comment}</td>
                            </tr>
                        ))}
                </tbody>
        </table>
        </>

    )
}