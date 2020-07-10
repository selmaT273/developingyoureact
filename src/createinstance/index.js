import React from 'react';
import useAuth from '../contexts/auth';


const CreateInstance = (props) => {
    const {goal, onClose} = props;
    const {user} = useAuth();
    const handleSubmit = async e => {
        e.preventDefault();
        const {startTime, endTime, comment} = e.target.elements;

        const instance = {
            startTime: startTime.value,
            endTime: endTime.value,
            comment: comment.value
        }
    
      const response = await fetch(`https://developingyouapi.azurewebsites.net/api/goals/${goal.id}/instances`, {
            method: 'POST',
            headers:{
                 'Content-Type': 'application/json',
                 'Authorization': `Bearer ${user.token}`
                },
            body: JSON.stringify(instance),
        })
        if(response.ok){
            onClose(); 
            return;
        }
        else{
            alert('Instance did not post')
        }
        
        

        

    
    }

return (
    <div> <h2>{goal.title}</h2> <button onClick={onClose}>x</button>
        <div>
            <form onSubmit={handleSubmit}>

               <label > 
                   Start Time:
               <input name= "startTime"  type="datetime-local"/>
               </label>

               <label > 
                   End Time:
               <input name= "endTime" type="datetime-local"/>
               </label>

               <label > 
                  Comment(s):
               <input name= "comment" type="text"/>
               </label>

            
            <label>
            <input type="submit" value="Add New Instance"/>
            </label>
            </form>
        </div>
    </div>
)

}

export default CreateInstance;