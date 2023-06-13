import React, { useContext } from 'react';
import DoneTask from '../SingleTask/DoneTask';
import Nav from '../Navigation/Nav';
import Task from '../SingleTask/Task';
import ActiveTasks from './ActiveTasks';
import './TasksList.css';
import { Tasks } from '../../context';

const TasksList = () => {
  const { tasks, setTasks } = useContext(Tasks);

  // functions for tasks

  const changeTaskStatus = (id) => {
    const currentTasks = Array.from(tasks);
    const finishDate =
      new Date().toISOString().slice(0, 10) +
      ' ' +
      new Date().toLocaleTimeString();
    currentTasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = finishDate;
      }
    });
    setTasks(currentTasks);
  };

  const deleteTask = (id) => {
    let activeTasks = tasks;
    activeTasks = activeTasks.filter((task) => task.id !== id);
    setTasks(activeTasks);
  };

  // done and active tasks arrays
  const activeTasks = tasks
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
        changeStatus={changeTaskStatus}
        deleteTask={deleteTask}
      />
    ));

  const doneTasks = tasks
    .filter((task) => task.active === false)
    .map((task) => (
      <DoneTask
        key={task.id}
        id={task.id}
        title={task.title}
        date={task.date}
        priority={task.priority}
        active={task.active}
        changeStatus={changeTaskStatus}
        deleteTask={deleteTask}
        doneDate={task.doneDate}
      />
    ));

  return (
    <div className='todo_list'>
      <h2 className='todo_header'>Tasks to do:</h2>
      <Nav />
      {activeTasks.length !== 0 ? (
        <ActiveTasks
          tasks={activeTasks}
          changeStatus={changeTaskStatus}
          deleteTask={deleteTask}
        />
      ) : (
        <p>No tasks</p>
      )}
      {doneTasks.length !== 0 ? (
        <>
          <h2 className='todo_header'>Done tasks:</h2>
          <ul>{doneTasks}</ul>
        </>
      ) : null}
    </div>
  );
};

export default TasksList;
