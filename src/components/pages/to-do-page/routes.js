import React from 'react';
import { Route } from 'react-router-dom';
import ToDoPage from './to-do-page.jsx'

export const ToDoRoute  = (
    <Route component = { ToDoPage } exact path = { ToDoPage.path } />
);

