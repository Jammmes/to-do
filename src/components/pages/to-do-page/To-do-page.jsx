import React, { PureComponent } from 'react';

import './to-do-page.css';
import { ToDoListContainer, AddToDoFormContainer } from '../../containers/index';

class ToDoPage extends PureComponent {

    static path = '/';

    render() {
        return (
            <div className="ToDoPage">
                <AddToDoFormContainer />
                <ToDoListContainer />
            </div>
        )
    }
}

export default ToDoPage;