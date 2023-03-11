import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import DoneTasks from './DoneTasks';
import TasksList from './TasksList';

class App extends Component {
  counter = 0;
  state = {
    tasks: [],
  };

  addTask = (text, priority, date) => {
    if (text.length > 2) {
      const task = {
        id: this.counter,
        title: text,
        date,
        priority,
        active: true,
        doneDate: null,
      };
      this.setState((prevState) => ({
        tasks: [...prevState.tasks, task],
      }));
      this.counter++;
    } else alert('Za mało znaków!');

    return true;
  };

  changeTaskStatus = (id) => {
    const tasks = Array.from(this.state.tasks);
    const finishDate =
      new Date().toISOString().slice(0, 10) +
      ' ' +
      new Date().toISOString().slice(11, 19);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = finishDate;
      }
    });
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter((task) => task.id !== id);
    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask tasks={this.state.tasks} add={this.addTask} />

          <TasksList
            tasks={this.state.tasks}
            changeStatus={this.changeTaskStatus}
            deleteTask={this.deleteTask}
          />
          <DoneTasks tasks={this.state.tasks} deleteTask={this.deleteTask} />
        </div>
      </>
    );
  }
}

export default App;
