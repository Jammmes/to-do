export const ADD_TODO = 'ADD_TODO';

export function addToDo(id, name) {
    return {
        id: id,
        type: ADD_TODO,
        name: name,
        finish: false
    }
}