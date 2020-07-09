import React from 'react';
import useFetch from '../hooks/fetch';
import './home.scss';
import CreateInstance from '../createinstance/'
import { useState } from 'react';
import ProgressBar from '../charts/progressbar';




export default function Home(props){
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');
    const [currentGoal, setCurrentGoal] = useState(null);

    
    
    
    


    if (!data) {
        return <p>Loading...</p>
        }

        return (
            <div className="home-container">
                <h1>Active Goals</h1>
                {data.map((goal) => (        
                    <div key={goal.id} className="snapshot-container">       
                    <h2 key={goal.id}> {goal.title}</h2>
                    <span className="progress-bar"><ProgressBar goal={goal} /></span>
                    <button key={goal.id} onClick={()=> setCurrentGoal(goal)}> + </button>
                    </div>
                ))}

                {currentGoal && 
                <CreateInstance goal={currentGoal} onClose={()=> setCurrentGoal(null)} />}
            </div>
        )
}