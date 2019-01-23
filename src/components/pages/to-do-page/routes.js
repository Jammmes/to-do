import React from 'react';
import { Route } from 'react-router';
import { ToDoPage } from './To-do-page.jsx'

export const ToDoRoute  = (
    <Route component = { ToDoPage } path = { ToDoPage.path } />
);

