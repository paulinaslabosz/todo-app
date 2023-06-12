import React, { useContext } from 'react';
import Task from '../SingleTask/Task';
import { Tasks, ActiveNavButton } from '../../context';

function ActiveTasks(props) {
  const tasks = useContext(Tasks);
  const activeTasks = tasks.tasks;
  const { activeNav } = useContext(ActiveNavButton);

  const priorityTasks = activeTasks
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
      <ul>{activeNav ? priorityTasks : props.tasks}</ul>
    </>
  );
}

export default ActiveTasks;
