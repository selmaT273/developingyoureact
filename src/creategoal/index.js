import React from 'react';

export default function CreateGoal(props){


    return (
        <>
            <h3>Create Your Goal!</h3>
            <form onSubmit={""}>
                <label>Title: </label>
                <input 
                    name="title" 
                    placeholder="Goal title" 
                    onChange={""} />
                <label>Start Value: </label>
                <input 
                    name="startValue" 
                    placeholder="What's your current rate?" 
                    onChange={""} />
                <label>Goal Value: </label>
                <input 
                    name="endValue" 
                    placeholder="What's your desired rate?" 
                    onChange={""} />
            </form>
        </>
    )
}