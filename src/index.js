import React from 'react';
import ReactDOM from 'react-dom';
import './components/app/index.css';
import configureStore from './store/store';
import { Provider} from 'react-redux';
import { BrowserRouter }from 'react-router-dom';
import routes from './router/routes';

const store = configureStore();

ReactDOM.render(
<Provider store = {store}>
    <BrowserRouter>
        { routes }
    </BrowserRouter>
</Provider>
, document.getElementById('root'));

