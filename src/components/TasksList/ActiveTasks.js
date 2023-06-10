import React, { useContext } from 'react';
import Task from '../SingleTask/Task';
import { Context } from '../../context';

function ActiveTasks(props) {
  const context = useContext(Context);

  const priorityTasks = context
    .filter((task) => task.active === true && task.priority === true)
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
    <>
      <ul>{props.tasks}</ul>
      <ul>{priorityTasks}</ul>
    </>
  );
}

export default ActiveTasks;
