import React from 'react';
import './Task.css';
const Task = (props) => {
  return (
    <li>
      <span style={props.priority ? { color: 'red' } : null}>
        {props.title}
      </span>
      <span className='task_date'>
        {' '}
        Do: <strong>{props.date}</strong>
      </span>
      <span className='button_container'>
        <button
          onClick={() => props.doneTask(props.id, 'done')}
          className='task_button'
        >
          ✔️
        </button>
        <button
          onClick={() => props.doneTask(props.id, 'delete')}
          className='task_button'
        >
          ❌
        </button>
      </span>
    </li>
  );
};

export default Task;
