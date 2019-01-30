export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

export function deleteToDo(id) {
    return {
        id: id,
        type: DELETE_TODO
    }
}

export function toggleToDo(id) {
    return {
        id: id,
        type: TOGGLE_TODO
    }
}

export function addToDo(id, name) {
    return {
        id: id,
        type: ADD_TODO,
        name: name,
        finish: false
    }
}