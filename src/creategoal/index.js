import React from 'react';

export default class CreateGoal extends React.Component{
    constructor(props){
        super(props);

    }

    handleSubmit(){

    }

    render(){
        return (
            <>
                <h3>Create Your Goal!</h3>
                <form onSubmit={this.handleSubmit}>
                    <label for="goal-title">Title: </label>
                    <input 
                        name="goal-title" 
                        placeholder="Goal title" 
                        onChange={""} />
    
                    <label for="start-date">Start Date: </label>
                    <input 
                        name="start-date" 
                        type="datetime-local" />
    
                    <label for="end-date">End Date: </label>
                    <input 
                        name="end-date" 
                        type="datetime-local" />
    
                    <label for="start-value">Start Value: </label>
                    <input 
                        name="start-value" 
                        placeholder="What's your current rate?" 
                        onChange={""} />
    
                    <label for="target-value">Target Value: </label>
                    <input 
                        name="target-value" 
                        placeholder="What's your desired rate?" 
                        onChange={""} />
    
                    <select>
    
                    </select>
    
                </form>
            </>
        )
    }
    
}