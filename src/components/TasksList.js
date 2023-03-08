import React from 'react';
import Task from './Task';
import './TasksList.css';
const TasksList = () => {
  return (
    <>
      <h2 className='todo_header'>Zadania do zrobienia</h2>
      <ul>
        <Task />
      </ul>
    </>
  );
};

export default TasksList;
