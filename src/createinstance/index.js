import React from 'react';

const CreateInstance = (props) => {
    const {goal, onClose} = props;

return (
    <div> <h2>{goal.title}</h2> <button onClick={onClose}>x</button>
        <div>
            <form onSubmit={""}>

               <label > 
                   Start Time:
               <input className= "startTime" type="datetime-local"/>
               </label>

               <label > 
                   End Time:
               <input className= "endTime" type="datetime-local"/>
               </label>

               <label > 
                  Comment(s):
               <input className= "comment" type="text"/>
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