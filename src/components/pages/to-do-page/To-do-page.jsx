import React, { PureComponent } from 'react';

import './to-do-page.css';
import  AddToDoForm  from '../../to-do-components/add-to-do-form/index';
import ToDoList from '../../to-do-components/to-do-list/index';

class ToDoPage extends PureComponent {

    static path = '/';

    render() {
        return (
            <div className="ToDoPage">
                <AddToDoForm />
                <ToDoList />
            </div>
        )
    }
}

export default ToDoPage;