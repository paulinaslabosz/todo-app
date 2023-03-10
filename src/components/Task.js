import React from 'react';
import './Task.css';

const Task = (props) => {
  return (
    <li className='task_grid'>
      <span
        className='task_title'
        style={props.priority ? { color: 'red' } : null}
      >
        {props.title}
      </span>
      <span className='task_date'>
        {' '}
        Do: <strong>{props.date}</strong>
      </span>
      <span className='button_container'>
        <button
          onClick={() => props.taskButton(props.id, 'done')}
          className='task_button'
        >
          ✔️
        </button>
        <button
          onClick={() => props.taskButton(props.id, 'delete')}
          className='task_button'
        >
          ❌
        </button>
      </span>
    </li>
  );
};

export default Task;
