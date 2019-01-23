import React, { Component } from 'react';

import './to-do-page.css';
import { addForm  as AddForm } from '../../index';
import { toDoList as ToDoList } from '../../index';


export class ToDoPage extends Component {

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
