import React from 'react';
import './DoneTasks.css';
import DoneTask from './DoneTask';

const DoneTasks = (props) => {
  const doneTask = props.doneTasks.map((task) => (
    <DoneTask key={task.id} id={task.id} title={task.title} />
  ));
  return (
    <div>
      <h2 className='done_header'>Zadania zrobione</h2>
      <h3 className='done_description'>Wyświetlanie 5 ostatnich zadań</h3>
      <ul>{doneTask}</ul>
    </div>
  );
};

export default DoneTasks;
