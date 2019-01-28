import { ADD_TODO } from '../add-form/actions';
import { DELETE_TODO } from './actions';
import { TOGGLE_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'Unfinished task',
            completed: false
        },
        {
            id: 2,
            name: 'Finished task',
            completed: true
        }
    ]
}

function toDoReducer(state = initialState, action = {}) {

    switch (action.type) {

        case ADD_TODO:
            let newState = {...state};
            const newToDo = { id: action.id, name: action.name, completed: false };
            newState.todos.push(newToDo);
            return newState;

        case DELETE_TODO:
           let newTodos = state.todos.filter( item => item.id !== action.id );
           return {...state, todos:newTodos};
           
        case TOGGLE_TODO:
            const todos =  state.todos.map( item => {
                if (item.id === action.id) {
                    return {id: item.id, name: item.name, completed: !item.completed}
                } else {
                    return item
                }
            });
            return {...state, todos};

        default:
        return state;
    }
}

export const ToDoReducer = {
    toDoStore: toDoReducer
};


