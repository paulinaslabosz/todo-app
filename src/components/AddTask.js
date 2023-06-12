import React, { useContext, useState } from 'react';
import { Tasks } from '../context';
import './AddTask.css';

function AddTask() {
  const { tasks, setTasks } = useContext(Tasks);
  const [content, setContent] = useState('');
  const [priority, setPriority] = useState(false);
  // const date = new Date().toISOString().slice(0, 10);

  // adding new task
  const addTask = (content, priority) => {
    if (content.length > 2) {
      const id = Math.floor(Math.random() * 9999);
      const task = {
        id: id,
        title: content,
        priority,
        active: true,
        doneDate: null,
      };
      setTasks(() => [...tasks, task]);
    } else alert('Za mało znaków!');
    return true;
  };

  const handleTask = (e) => {
    e.preventDefault();
    const add = addTask(content, priority);
    if (add) {
      setContent('');
      setPriority(false);
    }
  };

  // handle inputs
  const changeInput = (e) => {
    const name = e.target.name;
    if (name === 'text') {
      const value = e.target.value;
      setContent(value);
    } else if (name === 'priority') {
      const checked = e.target.checked;
      setPriority(checked);
    }
  };

  return (
    <form onSubmit={handleTask}>
      <div className='inlineWrapper'>
        <label htmlFor='addTask'>
          <input
            type='text'
            placeholder='add task'
            id='addTask'
            value={content}
            name='text'
            onChange={changeInput}
            className='input_addTask'
          />
        </label>

        <label htmlFor='checkbox' className='priority'>
          <input
            type='checkbox'
            id='checkbox'
            checked={priority}
            name='priority'
            onChange={changeInput}
          />
          Priority
        </label>
      </div>

      <button>Add task</button>
    </form>
  );
}

export default AddTask;
