import React from 'react';
import Task from './Task';
import './TasksList.css';

const TasksList = (props) => {
  const activeList = props.tasks.filter((task) => task.active === true);
  const sortList = activeList.sort((a, b) => a.title.localeCompare(b.title));
  const tasks = sortList.map((task) => (
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
      <ul>{tasks.length !== 0 ? tasks : <p>No tasks</p>}</ul>
    </div>
  );
};

export default TasksList;
