import React, { useState, useContext } from 'react';
import DoneTask from '../SingleTask/DoneTask';
import Menu from '../Navigation/Menu';
import Nav from '../Navigation/Nav';
import Task from '../SingleTask/Task';
import ActiveTasks from './ActiveTasks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TasksList.css';
import { Tasks } from '../../context';

const TasksList = () => {
  const [isActive, setActive] = useState(false);
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
