import React from 'react';
import Task from './Task';
import './TasksList.css';
const TasksList = () => {
  return (
    <>
      <header>Zadania do zrobienia</header>
      <ul>
        <Task />
      </ul>
    </>
  );
};

export default TasksList;
