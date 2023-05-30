import React from 'react';
import './Task.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';
const Task = (props) => {
  return (
    <li className='task_item'>
      <span
        className='task_title'
        style={props.priority ? { color: 'red' } : null}
      >
        {props.title}
      </span>

      <span className='button_container'>
        <button
          onClick={() => props.changeStatus(props.id)}
          className='task_button'
        >
          <FontAwesomeIcon icon={faCheck} style={{ color: '#0d2959' }} />
        </button>
        <button
          onClick={() => props.deleteTask(props.id)}
          className='task_button'
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: '#0d2959' }} />
        </button>
      </span>
    </li>
  );
};

export default Task;
