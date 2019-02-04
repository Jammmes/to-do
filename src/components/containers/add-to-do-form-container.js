import { connect } from 'react-redux';

import AddToDoForm from '../to-do-components/add-to-do-form/index';

export const AddToDoFormContainer = connect(
    state => 
        ({
            toDoStore: state.toDoStore
        }),
        null
)(AddToDoForm)