import React from 'react';
import Task from './Task';
import DoneTask from './DoneTask';
import './TasksList.css';

const TasksList = (props) => {
  const doneTasks = props.tasks
    .filter((task) => task.active === false)
    .map((task) => (
      <DoneTask
        key={task.id}
        id={task.id}
        title={task.title}
        date={task.date}
        priority={task.priority}
        active={task.active}
        changeStatus={props.changeStatus}
        deleteTask={props.deleteTask}
        doneDate={task.doneDate}
      />
    ));
  const activeTasks = props.tasks
    .filter((task) => task.active === true)
    .sort((a, b) => a.title.localeCompare(b.title))
    .map((task) => (
      <Task
        key={task.id}
        id={task.id}
        title={task.title}
        date={task.date}
        priority={task.priority}
        active={task.active}
        changeStatus={props.changeStatus}
        deleteTask={props.deleteTask}
      />
    ));

  return (
    <div className='todo_list'>
      <h2 className='todo_header'>Tasks to do:</h2>
      <ul>{activeTasks.length !== 0 ? activeTasks : <p>No tasks</p>}</ul>
      <ul>{doneTasks}</ul>
    </div>
  );
};

export default TasksList;
