import { connect } from 'react-redux';

import { deleteToDo, toggleToDo} from '../to-do-components/actions';
import ToDoItem from '../to-do-components/to-do-item/index'

export const ToDoItemContainer = connect(
    state => ({
        todo: state.toDoStore
    }),
    dispatch => ({
        onToggle: (id)=> dispatch( toggleToDo(id)),
        onDelete: (id) => dispatch(deleteToDo(id))
    })
)(ToDoItem);