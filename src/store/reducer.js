import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { AddToDoReducer } from './reducers';
import { ModalReducer } from '../components/modal/index'; 


export default combineReducers({

    routing: routerReducer,
    ...AddToDoReducer,
    ...ModalReducer

});