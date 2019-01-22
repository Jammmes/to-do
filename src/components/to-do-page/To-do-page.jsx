import React, { Component } from 'react';

import './to-do-page.css';
import { Header } from '../index';
import { AddForm } from '../index';
import { ToDoList } from '../index';
import { Footer } from '../index';

export class ToDoPage extends Component {

    render() {
        return (
            <div className="ToDoPage">
                <Header />
                <AddForm />
                <ToDoList />
                <Footer />
            </div>
        )
    }
}
