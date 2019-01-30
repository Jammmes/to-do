import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import { ToDoReducer } from '../components/to-do-components/reducers';
import { ModalReducer } from '../components/modal/index'; 
import { ContactReducer } from '../components/contact-components/reducers';

export default combineReducers({

    routing: routerReducer,
    ...ToDoReducer,
    ...ModalReducer,
    ...ContactReducer

});