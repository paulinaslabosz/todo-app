import React, { useState } from 'react';
import { Context } from '../context';
import App from './App';
import './Root.css';
function Root() {
  const [tasks, setTasks] = useState([]);
  return (
    <Context.Provider value={[tasks, setTasks]}>
      <div className='background'>
        <App />
      </div>
    </Context.Provider>
  );
}

export default Root;
