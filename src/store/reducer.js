import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { AddToDoReducer } from './reducers';


export default combineReducers({

    routing: routerReducer,
    ...AddToDoReducer

});