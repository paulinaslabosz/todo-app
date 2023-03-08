import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import TasksList from './TasksList';
class App extends Component {
  state = {};
  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask />
          <TasksList />
        </div>
      </>
    );
  }
}

export default App;
