import React from 'react';

import { Switch, Route } from 'react-router-dom';
import App from '../components/app/App';
import  ErrorPage  from '../components/pages/error-page/index';
import { ContactRoute } from '../components/pages/contact-page/index';
import { ToDoRoute } from '../components/pages/to-do-page/index';

export default (

<App>
    <Switch>
        { ToDoRoute }
        { ContactRoute }
        <Route component = { ErrorPage } />
    </Switch>
</App>

);
