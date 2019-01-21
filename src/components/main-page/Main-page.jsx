import React, { Component } from 'react';

import './main-page.css';
import Header from '../header/Header.jsx';
import AddForm from '../add-form/Add-form.jsx';
import ToDoList from '../to-do-list/To-do-list.jsx';
import Footer from '../footer/Footer.jsx';

class MainPage extends Component {

    render() {
        return (
            <div className="MainPage">
                <Header />
                <AddForm />
                <ToDoList />
                <Footer />
            </div>
        )
    }
}

export default MainPage;