import React from 'react';

const AddTask = () => {
  return (
    <form>
      <input type='text' placeholder='dodaj zadanie' />
      <label htmlFor='checkbox'>
        <input type='checkbox' id='checkbox' />
        Priorytet
      </label>
      <label htmlFor='date'>
        Do kiedy zrobić: <input type='date' id='date' />
      </label>
      <button>Dodaj</button>
    </form>
  );
};

export default AddTask;
