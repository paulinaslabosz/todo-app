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

  // getDate() {
  //   const currentDate = new Date();
  //   let year = currentDate.getFullYear();
  //   let month = currentDate.getMonth() + 1;
  //   let day = currentDate.getDate();

  //   if (day < 9) {
  //     day = '0' + day;
  //   }
  //   if (month < 9) {
  //     month = '0' + month;
  //   }
  //   const date = year + '-' + month + '-' + day;

  //   return date;
  // }

  // getDoneDate() {
  //   const currentDate = new Date();
  //   let year = currentDate.getFullYear();
  //   let month = currentDate.getMonth() + 1;
  //   let day = currentDate.getDate();
  //   let hour = currentDate.getHours();
  //   let minutes = currentDate.getMinutes();
  //   let seconds = currentDate.getMinutes();
  //   if (day < 9) {
  //     day = '0' + day;
  //   }
  //   if (month < 9) {
  //     month = '0' + month;
  //   }
  //   if (hour < 9) {
  //     hour = '0' + hour;
  //   }
  //   if (minutes < 9) {
  //     minutes = '0' + minutes;
  //   }
  //   if (seconds < 9) {
  //     month = '0' + seconds;
  //   }
  //   const date =
  //     year +
  //     '-' +
  //     month +
  //     '-' +
  //     day +
  //     ' ' +
  //     hour +
  //     ':' +
  //     minutes +
  //     ':' +
  //     seconds;
  //   console.log('apdejt');
  //   return date;
  // }

  // componentDidUpdate() {
  //   if (this.state.doneDate === '') {
  //     this.setState({
  //       doneDate: this.getDoneDate(),
  //     });
  //   }
  // }

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
    console.log('działa');
    const tasks = Array.from(this.state.tasks);
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
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
          <DoneTasks
            tasks={this.state.tasks}
            deleteTask={this.deleteTask}
            // doneDate={this.state.doneDate}
          />
        </div>
      </>
    );
  }
}

export default App;
