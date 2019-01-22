const DELETE_TODO = 'DELETE_TODO';
const FINISH_TODO = 'FINISH_TODO';
const RETURN_TODO = 'RETURN_TODO';

export function deleteToDo(id) {
    return {
        id: id,
        type: DELETE_TODO
    }
}

export function finishToDo(id) {
    return {
        id: id,
        type: FINISH_TODO
    }
}

export function returnToDo(id) {
    return {
        id: id,
        type: RETURN_TODO
    }
}