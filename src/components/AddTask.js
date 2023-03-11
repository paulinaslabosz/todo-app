import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  date = new Date().toISOString().slice(0, 10);

  state = {
    text: '',
    priority: false,
    dateValue: this.date,
  };

  changeInput = (e) => {
    const name = e.target.name;
    if (name === 'text' || name === 'dateValue') {
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

  handleTask = (e) => {
    e.preventDefault();
    const { text, priority, dateValue } = this.state;
    const add = this.props.add(text, priority, dateValue);
    if (add) {
      this.setState({
        text: '',
        priority: false,
        dateValue: this.date,
      });
    }
  };

  render() {
    let maxDate = this.date.slice(0, 4) * 1 + 1;
    maxDate = maxDate + '-12-31';
    const { text, priority, dateValue } = this.state;
    return (
      <form onSubmit={this.handleTask}>
        <div className='inlineWrapper'>
          <label htmlFor='addTask'>
            <input
              type='text'
              placeholder='dodaj zadanie'
              id='addTask'
              value={text}
              name='text'
              onChange={this.changeInput}
            />
          </label>

          <label htmlFor='checkbox' className='priority'>
            <input
              type='checkbox'
              id='checkbox'
              checked={priority}
              name='priority'
              onChange={this.changeInput}
            />
            Priorytet
          </label>
        </div>
        <label htmlFor='date'>
          Do kiedy zrobić:{' '}
          <input
            type='date'
            id='date'
            name='dateValue'
            value={dateValue}
            onChange={this.changeInput}
            min={this.date}
            max={maxDate}
          />
        </label>

        <button>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
