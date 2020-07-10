import React from 'react';
import { AuthContext } from '../contexts/auth';
import './creategoal.scss';

export default class CreateGoal extends React.Component{
    static contextType = AuthContext;

    handleSubmit = async event => {
        event.preventDefault();
        const { goalTitle, startDate, endDate, startValue, targetValue } = event.target.elements;
        const { user } = this.context;
        const goal = {
            title: goalTitle.value,
            startDate: startDate.value,
            endDate: endDate.value,
            startValue: parseInt(startValue.value),
            targetValue: parseInt(targetValue.value),
        };

        await fetch('https://developingyouapi.azurewebsites.net/api/goals', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${user.token}`
            },
            body: JSON.stringify(goal),
        });

        this.props.refreshPage();
    }

    render(){
        return (
            <>
                <div className="createGoal">
                    <h3>Create Your Goal!</h3>
                    <form onSubmit={this.handleSubmit}>
                        <label for="goalTitle">Title: 
                        <input 
                            name="goalTitle" 
                            placeholder="Goal title" />
                        </label>
        
                        <label for="startDate">Start Date: 
                        <input 
                            name="startDate" 
                            type="datetime-local" />
                        </label>
        
                        <label for="endDate">End Date: 
                        <input 
                            name="endDate" 
                            type="datetime-local" />
                        </label>
        
                        <label for="startValue">Start Value: 
                        <input 
                            name="startValue" 
                            placeholder="What's your current rate?" />
                        </label>
        
                        <label for="targetValue">Target Value: 
                        <input 
                            name="targetValue" 
                            placeholder="What's your desired rate?" />
                        </label>
        
                        <button>Create</button>
                    </form>
                </div>
            </>
        )
    }
    
}