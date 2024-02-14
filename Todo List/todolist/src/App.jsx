import { useState } from 'react'

import './App.css'
import TaskForm from './components/TaskForm';
import TodoList from './components/TodoList';

function App() {
  const [tasks ,setTasks] =useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks,  taskName ]);
  };

  const deleteTask = (i) => {
    const updateTasks = [...tasks];
    updateTasks.splice(i,1);
    setTasks(updateTasks);
  }

  return (
    <>
      <TaskForm onSubmit ={addTask} />
      <TodoList tasks={tasks} delete={deleteTask}/>
    </>
  )
}

    

export default App;
