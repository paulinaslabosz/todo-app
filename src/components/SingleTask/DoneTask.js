import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './DoneTask.css';

const DoneTask = (props) => {
  return (
    <li className='doneTask_item'>
      <div className='doneTask_wrapper'>
        <span className='task_title'>{props.title}</span>
        <em>Done: {props.doneDate}</em>
      </div>

      <span>
        <button
          onClick={() => props.deleteTask(props.id)}
          className='done_button'
        >
          <FontAwesomeIcon icon={faTrash} style={{ color: '#0d2959' }} />
        </button>
      </span>
    </li>
  );
};

export default DoneTask;
