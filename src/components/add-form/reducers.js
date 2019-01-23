import { ADD_TODO } from './actions';

const initialState = {
    todos: [
        {
            id: 1,
            name: 'To do init'
        }
    ]
}

function addToDoReducer(state = initialState, action) { 
    // console.log('Look from reducer: state: ', state);
    switch (action.type) {
        case ADD_TODO:
            let newState = {...state};
            let newToDo = { id: action.id, name: action.name }
            newState.todos.push(newToDo);

            return newState;

        default:
        return state;
    }
}

export const AddToDoReducer = {
    addToDo: addToDoReducer
};


