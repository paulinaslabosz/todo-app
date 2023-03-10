import React from 'react';
import './DoneTasks.css';
import DoneTask from './DoneTask';

const DoneTasks = (props) => {
  const doneTasks = props.tasks.filter((task) => task.active !== true);
  const sortTasks = doneTasks.sort((a, b) =>
    b.doneDate.localeCompare(a.doneDate)
  );
  const doneTask = sortTasks.map((task) => (
    <DoneTask
      key={task.id}
      id={task.id}
      title={task.title}
      date={task.date}
      doneDate={task.doneDate}
      deleteTask={props.deleteTask}
    />
  ));
  return (
    <div>
      <h2 className='done_header'>
        Zadania zrobione <em>({doneTasks.length})</em>{' '}
      </h2>
      <h3 className='done_description'>Wyświetlanie 5 ostatnich zadań</h3>
      <ul>{doneTask.slice(0, 5)}</ul>
    </div>
  );
};

export default DoneTasks;
