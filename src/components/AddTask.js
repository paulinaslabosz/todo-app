import React from 'react';
import './AddTask.css';

const AddTask = (props) => {
  return (
    <form onSubmit={props.addTask}>
      <div className='inlineWrapper'>
        <label htmlFor='addTask'>
          <input
            type='text'
            placeholder='dodaj zadanie'
            id='addTask'
            value={props.task}
            name='task'
            onChange={props.changeInput}
          />
        </label>

        <label htmlFor='checkbox' className='priority'>
          <input
            type='checkbox'
            id='checkbox'
            checked={props.priority}
            name='priority'
            onChange={props.changeInput}
          />
          Priorytet
        </label>
      </div>
      <label htmlFor='date'>
        Do kiedy zrobić:{' '}
        <input
          type='date'
          id='date'
          name='date'
          value={props.date}
          onChange={props.changeInput}
          min={props.date}
        />
      </label>

      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;
