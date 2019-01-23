import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { AddToDoReducer } from '../components/add-form/index';


export default combineReducers({

    routing: routerReducer,
    ...AddToDoReducer

});