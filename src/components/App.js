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
    list: [],
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

  handleChange = (e) => {
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
      const list = [...this.state.list];
      const title = this.state.task;
      const date = this.state.date;
      const id = this.state.list.length + 1;
      const priority = this.state.priority;
      const task = { id, title, date, priority };
      const newList = list.concat(task);
      this.setState({
        list: newList,
        task: '',
        date: this.getDate(),
        priority: false,
      });
    } else {
      alert('Nie można dodać zadania bez nazwy');
    }
  };
  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask
            task={this.state.task}
            priority={this.state.priority}
            change={this.handleChange}
            date={this.state.date}
            test={this.state.test}
            addTask={this.handleAddTask}
          />
          <TasksList list={this.state.list} />
          <DoneTasks />
        </div>
      </>
    );
  }
}

export default App;
