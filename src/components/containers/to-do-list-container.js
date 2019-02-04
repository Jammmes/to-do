import { connect } from 'react-redux';
import ToDoList from '../to-do-components/to-do-list/index';

export const ToDoListContainer = connect(
    state =>
        ({
            items: state.toDoStore
        }),
        null
)(ToDoList)