import React from 'react';
import AddTask from './AddTask';
import './App.css';
import TasksList from './TasksList/TasksList';

function App() {
  return (
    <>
      <div className='app'>
        <AddTask />
        <TasksList />
      </div>
    </>
  );
}

export default App;
