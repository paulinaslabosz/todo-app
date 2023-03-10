import React, { Component } from 'react';
import AddTask from './AddTask';
import './App.css';
// import DoneTasks from './DoneTasks';
import TasksList from './TasksList';

class App extends Component {
  counter = 0;
  state = {
    tasks: [],
    doneTasks: [],
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

  // handleTaskButton = (id, name) => {
  //   if (name === 'done') {
  //     const doneTask = this.state.tasksList.filter((task) => task.id === id);
  //     const tasksList = this.state.tasksList.filter((task) => task.id !== id);
  //     this.setState((prevState) => ({
  //       doneTasks: prevState.doneTasks.concat(doneTask),
  //       tasksList,
  //     }));
  //   }
  //   if (name === 'delete') {
  //     const tasksList = this.state.tasksList.filter((task) => task.id !== id);
  //     this.setState({
  //       tasksList,
  //     });
  //   }
  //   if (name === 'deleteDone') {
  //     const doneTasks = this.state.doneTasks.filter((task) => task.id !== id);
  //     this.setState({
  //       doneTasks,
  //       doneDate: '',
  //     });
  //   }
  // };

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
      console.log(task);
    } else alert('Za mało znaków!');

    return true;
  };

  render() {
    return (
      <>
        <div className='wrapper'>
          <AddTask tasks={this.state.tasks} add={this.addTask} />

          <TasksList
            tasks={this.state.tasks}
            // taskButton={this.handleTaskButton}
          />
          {/* <DoneTasks
            doneTasks={this.state.doneTasks}
            doneDate={this.state.doneDate}
            taskButton={this.handleTaskButton}
          />  */}
        </div>
      </>
    );
  }
}

export default App;
