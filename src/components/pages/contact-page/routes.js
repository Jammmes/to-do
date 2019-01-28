import React from 'react';
import { Route } from 'react-router-dom';
import ContactPage from './Contact-page.jsx'

export const ContactRoute  = (
    <Route component = { ContactPage } path = { ContactPage.path } />
);

