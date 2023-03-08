import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
import DoneTasks from './DoneTasks';
import TasksList from './TasksList';

class App extends Component {
  state = {
    task: '',
    priority: false,
    date: this.getDate(),
    tasksList: [],
    doneTasks: [],
  };

  getDate() {
    const currentDate = new Date();
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth() + 1;
    let day = currentDate.getDate();

    if (day < 9) {
      day = '0' + day;
    }
    if (month < 9) {
      month = '0' + month;
    }
    const date = year + '-' + month + '-' + day;

    return date;
  }

  handleChangeInput = (e) => {
    const name = e.target.name;
    if (name === 'task' || name === 'date') {
      const value = e.target.value;
      this.setState({
        [name]: value,
      });
    } else if (name === 'priority') {
      const checked = e.target.checked;
      this.setState({
        [name]: checked,
      });
    }
  };

  handleAddTask = (e) => {
    e.preventDefault();
    if (this.state.task !== '') {
      const tasksList = [...this.state.tasksList];
      const title = this.state.task;
      const date = this.state.date;
      const id = this.state.tasksList.length + 1;
      const priority = this.state.priority;
      const task = { id, title, date, priority };
      const updateList = tasksList.concat(task);
      this.setState({
        tasksList: updateList,
        task: '',
        date: this.getDate(),
        priority: false,
      });
    } else {
      alert('Nie można dodać zadania bez nazwy');
    }
  };

  handleTaskButton = (id, name) => {
    if (name === 'done') {
      const doneTask = this.state.tasksList.filter((task) => task.id === id);
      const tasksList = this.state.tasksList.filter((task) => task.id !== id);
      this.setState((prevState) => ({
        doneTasks: prevState.doneTasks.concat(doneTask),
        tasksList,
      }));
    }
    if (name === 'delete') {
      const tasksList = this.state.tasksList.filter((task) => task.id !== id);
      this.setState({
        tasksList,
      });
    }
  };

  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask
            task={this.state.task}
            priority={this.state.priority}
            changeInput={this.handleChangeInput}
            date={this.state.date}
            addTask={this.handleAddTask}
          />
          <TasksList
            tasksList={this.state.tasksList}
            taskButton={this.handleTaskButton}
          />
          <DoneTasks doneTasks={this.state.doneTasks} />
        </div>
      </>
    );
  }
}

export default App;
