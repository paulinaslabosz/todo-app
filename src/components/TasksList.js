import React from 'react';
import Task from './Task';
import './TasksList.css';
const TasksList = (props) => {
  const sortList = props.list.sort((a, b) => a.title.localeCompare(b.title));

  const list = sortList.map((task) => (
    <Task
      key={task.id}
      title={task.title}
      date={task.date}
      priority={task.priority}
    />
  ));
  return (
    <>
      <h2 className='todo_header'>Zadania do zrobienia</h2>
      <ul>{props.list.length !== 0 ? list : <p>Brak zadań</p>}</ul>
    </>
  );
};

export default TasksList;
