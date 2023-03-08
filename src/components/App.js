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
  render() {
    console.log(this.getDate());
    return (
      <>
        <div className='wrapper'>
          <AddTask
            task={this.state.task}
            priority={this.state.priority}
            change={this.handleChange}
            date={this.state.date}
            test={this.state.test}
          />
          <TasksList />
          <DoneTasks />
        </div>
      </>
    );
  }
}

export default App;
