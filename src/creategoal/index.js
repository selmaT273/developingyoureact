import React from 'react';

export default function CreateGoal(props){


    return (
        <>
            <h3>Create Your Goal!</h3>
            <form onSubmit={""}>
                <label for="goal-title">Title: </label>
                <input 
                    name="goal-title" 
                    placeholder="Goal title" 
                    onChange={""} />
                <label for="start-value">Start Value: </label>
                <input 
                    name="start-value" 
                    placeholder="What's your current rate?" 
                    onChange={""} />
                <label for="target-value">Goal Value: </label>
                <input 
                    name="target-value" 
                    placeholder="What's your desired rate?" 
                    onChange={""} />
            </form>
        </>
    )
}