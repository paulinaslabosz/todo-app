import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <div>
          <form>
            <input type='text' placeholder='dodaj zadanie' />
            <label htmlFor='checkbox'>
              <input type='checkbox' id='checkbox' />
              Priorytet
            </label>
            <label htmlFor='date'>
              Do kiedy zrobić: <input type='date' id='date' />
            </label>
            <button>Dodaj</button>
          </form>
        </div>
      </>
    );
  }
}

export default App;
