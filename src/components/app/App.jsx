import React, { Component } from 'react';
import './app.css';
import { ToDoPage } from '../index';
import { DevTools } from '../../utils/index';

class App extends Component {

  static path = '/';

  render() {

    return (
      <div className="app">
        { process.env.NODE_ENV !== 'production' ? <DevTools /> : null }
        <header className="app-header">
        </header>
        <ToDoPage/>
      </div>
    );
  }
}

export default App;
