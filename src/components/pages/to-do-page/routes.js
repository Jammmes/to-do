import React from 'react';
import { Route } from 'react-router-dom';
import ToDoPage from './To-do-page.jsx'

export const ToDoRoute  = (
    <Route component = { ToDoPage } exact path = { ToDoPage.path } />
);

