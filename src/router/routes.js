import React from 'react';
import { Switch } from 'react-router-dom';
import App from '../components/app/App';
import { ContactRoute } from '../components/pages/contact-page/index';
import { ToDoRoute } from '../components/pages/to-do-page/index';

export default (

<App>
    <Switch>
        { ContactRoute }
        { ToDoRoute }
    </Switch>
</App>

);
