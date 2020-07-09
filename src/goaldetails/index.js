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
                <tr key={data.id}>
                    <td>{data.title}</td>
                    <td>{Date(data.startDate)}</td>
                    <td>{Date(data.endDate)}</td>
                    <td>{data.category}</td>
                    <td>{data.completed.toString()}</td>
                </tr>        
            </tbody>
        </table>
        <h3>Instances Log</h3>
        <table className="goaldetails">
            <thead>
                <td>
                    Start Time
                </td>
                <td>
                    End Time
                </td>
                <td>
                    Comments
                </td>
            </thead>
                <tbody>
                        {data.instances.map((instance) => (
                            <tr key={instance.id}>
                            <td>{Date(instance.startTime)}</td>  
                            <td>{Date(instance.endTime)}</td>
                            <td>{instance.comment}</td>
                            </tr>
                        ))}
                </tbody>
        </table>
        </>

    )
}