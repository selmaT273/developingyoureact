import React from 'react';
import useAuth from '../contexts/auth';
import Modal from '../components/modal';


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

        console.log(instance);
    
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
    <Modal  onClose={onClose}> <h2 className="instanceTitle">{goal.title}</h2>
        <div>
            <form onSubmit={handleSubmit}>

               <label className="start" > 
                   Start Time:
               <input name= "startTime"  type="datetime-local"/>
               </label>

               <label className="end"> 
                   End Time:
               <input name= "endTime" type="datetime-local"/>
               </label>

               <label className="commenting" > 
                  Comment(s):
               <input name= "comment" type="text"/>
               </label>

            
            <label>
            <input type="submit" value="Add New Instance"/>
            </label>
            </form>
        </div>
    </Modal>
)

}

export default CreateInstance;