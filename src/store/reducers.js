import { ADD_TODO } from '../components/add-form/actions';
import { DELETE_TODO } from '../components/to-do-item/actions';
import { TOGGLE_TODO } from '../components/to-do-item/actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'To do init',
            completed: false
        }
    ]
}

function addToDoReducer(state = initialState, action) { 
    // console.log('Look from reducer: state: ', state);
    switch (action.type) {
        case ADD_TODO:
            let newState = {...state};
            let newToDo = { id: action.id, name: action.name, completed: true }
            newState.todos.push(newToDo);
            return newState;
        case DELETE_TODO:
            let todos = state.todos.filter( item => item.id !== action.id );
            let afterDeleteState = {...state, todos}
            return afterDeleteState;
        case TOGGLE_TODO:
            return state;
        default:
        return state;
    }
}

export const AddToDoReducer = {
    addToDo: addToDoReducer
};


