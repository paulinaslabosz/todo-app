import React from 'react';
import './Task.css';
const Task = () => {
  return (
    <li>
      Zadanie <span>data </span> <button className='task_button'>✔️</button>
      <button className='task_button'>❌</button>
    </li>
  );
};

export default Task;
