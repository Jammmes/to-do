import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { ToDoReducer } from './reducers';
import { ModalReducer } from '../components/modal/index'; 


export default combineReducers({

    routing: routerReducer,
    ...ToDoReducer,
    ...ModalReducer

});