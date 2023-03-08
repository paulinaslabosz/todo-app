import React from 'react';
import './Task.css';
const Task = (props) => {
  return (
    <li>
      <span>{props.title}</span>
      <span className='task_date'>
        {' '}
        Do: <strong>{props.date}</strong>
      </span>
      <span className='button_container'>
        <button className='task_button'>✔️</button>
        <button className='task_button'>❌</button>
      </span>
    </li>
  );
};

export default Task;
