import React, { PureComponent } from 'react';

import './to-do-page.css';
import  AddForm  from '../../add-form/index';
import ToDoList from '../../to-do-list/index';

class ToDoPage extends PureComponent {

    static path = '/';

    render() {
        return (
            <div className="ToDoPage">
                <AddForm />
                <ToDoList />
            </div>
        )
    }
}

export default ToDoPage;