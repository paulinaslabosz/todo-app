import React from 'react';
import './DoneTask.css';

const DoneTask = (props) => {
  const doneDate = props.doneDate;
  // console.log(doneDate);
  return (
    <li className='doneTask_grid'>
      <span className='task_title'>{props.title}</span>
      <span className='date_grid'>
        <em>
          Zrobić do: <br />
        </em>
        {props.date}
      </span>
      <span>
        <button
          onClick={() => props.deleteTask(props.id)}
          className='done_button'
        >
          ❌
        </button>
      </span>
      <div className='done_confirm'>
        <em>Potwierdzenie wykonania: {doneDate}</em>
      </div>
    </li>
  );
};

export default DoneTask;
