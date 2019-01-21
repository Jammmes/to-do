import React from 'react';
import ReactDOM from 'react-dom';
import './components/app/index.css';
import App from './components/app/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
