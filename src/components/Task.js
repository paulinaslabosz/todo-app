import React from 'react';
import './Task.css';
const Task = (props) => {
  return (
    <li>
      {props.title}
      <span className='task_date'>
        {' '}
        Do: <strong>{props.date}</strong>
      </span>
      <button className='task_button'>✔️</button>
      <button className='task_button'>❌</button>
    </li>
  );
};

export default Task;
