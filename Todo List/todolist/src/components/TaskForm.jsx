import React, { useState } from 'react';

const  TaskForm =(props) =>{
  const  [taskName, setTaskName] = useState("");
  function handleSubmit(e){
      e.preventDefault();
      props.onSubmit(taskName);
      setTaskName("");
      }
  const handleText = (e)=>{
      setTaskName(e.target.value);
      
  }
  return ( 
  <form onSubmit={handleSubmit}>
      <p>Task Name</p>
      <input type="text" name="task"  onChange={handleText} value={taskName}/>
      <input type="submit" value="add"/>
    </form>)
};
export default TaskForm;
