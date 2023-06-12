import React, { useState } from 'react';
import { Tasks, ActiveNavButton } from '../context';
import App from './App';
import './Root.css';
function Root() {
  const [tasks, setTasks] = useState([]);
  const [activeNav, setActiveNav] = useState(false);
  return (
    <Tasks.Provider value={{ tasks, setTasks }}>
      <ActiveNavButton.Provider value={{ activeNav, setActiveNav }}>
        <div className='background'>
          <App />
        </div>
      </ActiveNavButton.Provider>
    </Tasks.Provider>
  );
}

export default Root;
