import React, { Component } from 'react';

import PropTypes from 'prop-types';
import  Button  from 'antd/lib/button';
import  Card  from 'antd/lib/card';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import './contact-page.css';
import { connect } from 'react-redux';
import { openModal } from '../../modal/index';
import ContactList from '../../contact-list/index';
import { contactsIsLoading } from './actions';
import { contactsLoadError } from './actions';
import { contactsLoadSuccess } from './actions';

export class ContactPage extends Component {

    static path = '/contact';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    constructor(props){
        super(props);
        this.url = 'https://randomuser.me/api/?results=10';
    }

    onOpenModal() {
        this.props.dispatch( openModal() );
    }

    onLoadContacts(url){
        this.props.dispatch( contactsIsLoading(true) );
        fetch(url)
        .then( (response) => {
            if (!response.ok) {
                throw Error (response.status);
            }
            this.props.dispatch ( contactsIsLoading(false) );
            return response;
        } )
        .then( (response) => response.json() )
        .then ( (contacts) => this.props.dispatch( contactsLoadSuccess(contacts) ) )
        .catch( () => this.props.dispatch( contactsLoadError(true) )  );
    }

    render() {
        return (
            <div className="ContactPage">
                <Card>
                    <p>CONTACTS:</p>
                    <Button onClick = {this.onOpenModal.bind(this)} icon="star"/>
                    <Button onClick = {this.onLoadContacts.bind(this, this.url)} icon="cloud-download">Load contacts</Button>
                    <ContactList></ContactList>
                </Card>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        contacts: state.contacts
    }
}

export default connect(mapStateToProps)(ContactPage);
