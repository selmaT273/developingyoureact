import React from 'react';
import useFetch from '../hooks/fetch';
import './home.scss';
import CreateInstance from '../createinstance/'
import { useState } from 'react';
import ProgressBar from '../charts/progressbar';
import {  Link } from 'react-router-dom';



export default function Home(props){
    const {data} = useFetch('https://developingyouapi.azurewebsites.net/api/goals');
    const [currentGoal, setCurrentGoal] = useState(null);

    
    
    
    

    if (!data) {
        return <p class="mainLoader">Loading...</p>
        }

        return (
            <div className="home-container">
                <h1>Active Goals</h1>
                {data.map((goal) => (        
                    <div key={goal.id} className="snapshot-container">       
                    <span className="goal-title"><Link exact to={`/Goals/${goal.id}`}><h2 key={goal.id}> {goal.title}</h2></Link></span>
                    <button key={goal.id} onClick={()=> setCurrentGoal(goal)}> + </button>
                    <span className="progress-bar"><ProgressBar goal={goal} /></span>
                    <div className="badges-wrapper"><img className="badges" alt="chase" src={require('../img/badge1.png')} />
                    <img className="badges" alt="chase" src={require('../img/badge2.png')} />
                    <img className="badges" alt="chase" src={require('../img/badge3.png')} />
                    </div>
                    </div>
                ))}

                {currentGoal && 
                <CreateInstance goal={currentGoal} onClose={()=> setCurrentGoal(null)} />}
            </div>
        )
}