import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import DoneTasks from './DoneTasks';
import TasksList from './TasksList';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask />
          <TasksList />
          <DoneTasks />
        </div>
      </>
    );
  }
}

export default App;
