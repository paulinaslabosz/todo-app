import React, { useState } from 'react';
import Task from './Task';
import DoneTask from './DoneTask';
import Menu from './Menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import './TasksList.css';

const TasksList = (props) => {
  const [isActive, setActive] = useState(false);

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
