import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { ToDoReducer } from '../components/to-do-item/index';
import { ModalReducer } from '../components/modal/index'; 
import { ContactReducer } from '../components/pages/contact-page/index';

export default combineReducers({

    routing: routerReducer,
    ...ToDoReducer,
    ...ModalReducer,
    ...ContactReducer

});