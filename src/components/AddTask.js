import React, { Component } from 'react';
import './AddTask.css';

class AddTask extends Component {
  state = {
    text: '',
    priority: false,
    dateValue: '',
  };

  changeInput = (e) => {
    const name = e.target.name;
    if (name === 'text' || name === 'date') {
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
        dateValue: '',
      });
    }
  };

  render() {
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
            name='date'
            value={dateValue}
            onChange={this.changeInput}
          />
        </label>

        <button>Dodaj</button>
      </form>
    );
  }
}

export default AddTask;
