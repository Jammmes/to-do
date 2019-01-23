import React, { Component } from 'react';

import './to-do-page.css';
import { AddForm } from '../../index';
import { ToDoList } from '../../index';


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
