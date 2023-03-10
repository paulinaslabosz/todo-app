import React from 'react';
import Task from './Task';
import './TasksList.css';

const TasksList = (props) => {
  const sortList = props.tasks.sort((a, b) => a.title.localeCompare(b.title));
  const listOfTasks = sortList.map((task) => (
    <Task
      key={task.id}
      id={task.id}
      title={task.title}
      date={task.date}
      priority={task.priority}
      // taskButton={props.taskButton}
    />
  ));
  return (
    <>
      <h2 className='todo_header'>Zadania do zrobienia</h2>
      <ul>{props.tasks.length !== 0 ? listOfTasks : <p>Brak zadań</p>}</ul>
    </>
  );
};

export default TasksList;
