import React, { Component } from 'react';
import './app.css';
import MainPage from '../main-page/Main-page.jsx';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
        </header>
        <MainPage/>
      </div>
    );
  }
}

export default App;
