import React from 'react';
import useFetch from '../hooks/fetch';
import './home.scss';

export default function Home(props){
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');


    if (!data) {
        return <p>Loading...</p>
        }

        return (
            <div className="home-container">
                {data.map((goal) => (        
                    <div key={goal.id} className="snapshot-container">       
                    <h2 key={goal.id}> {goal.title}</h2>
                    </div>
                ))}
            </div>
            
        )
}