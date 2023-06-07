import React, { useState, useContext } from 'react';
import Task from './Task';
import DoneTask from './DoneTask';
import Menu from './Menu';
import Nav from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TasksList.css';
import { Context } from '../context';

const TasksList = (props) => {
  const [isActive, setActive] = useState(false);
  const [context, setContext] = useContext(Context);

  // functions for tasks
  const changeTaskStatus = (id) => {
    const tasks = Array.from(context);
    const finishDate =
      new Date().toISOString().slice(0, 10) +
      ' ' +
      new Date().toLocaleTimeString();
    context.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = finishDate;
      }
    });
    setContext(tasks);
  };

  const deleteTask = (id) => {
    let tasks = context;
    tasks = tasks.filter((task) => task.id !== id);
    setContext(tasks);
  };

  // done and active task arrays
  const doneTasks = context
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

  const activeTasks = context
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

  return (
    <div className='todo_list'>
      {isActive ? (
        <>
          <FontAwesomeIcon
            onClick={() => setActive(!isActive)}
            icon={faXmark}
            className='todo_menu'
          />
          <Menu />
        </>
      ) : (
        <FontAwesomeIcon
          onClick={() => setActive(!isActive)}
          icon={faBars}
          size='lg'
          className='todo_menu'
        />
      )}

      <h2 className='todo_header'>Tasks to do:</h2>
      <Nav />
      <ul>{activeTasks.length !== 0 ? activeTasks : <p>No tasks</p>}</ul>
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
