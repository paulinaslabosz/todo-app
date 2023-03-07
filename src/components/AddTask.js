import React from 'react';
import './AddTask.css';
const AddTask = () => {
  return (
    <form>
      <div className='inlineWrapper'>
        <label htmlFor='addTask'>
          <input type='text' placeholder='dodaj zadanie' id='addTask' />
        </label>

        <label htmlFor='checkbox' className='priority'>
          <input type='checkbox' id='checkbox' />
          Priorytet
        </label>
      </div>
      <label htmlFor='date'>
        Do kiedy zrobić: <input type='date' id='date' />
      </label>

      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;
