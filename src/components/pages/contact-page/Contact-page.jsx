import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Button  from 'antd/lib/button';
import Card  from 'antd/lib/card';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import './contact-page.css';
import { connect } from 'react-redux';
import ContactList from '../../contact-list/index';
import { loadContacts } from './actions';
import  ShowInfo  from '../../show-info/index';

export class ContactPage extends Component {

    static path = '/contact';

    static propTypes = {
        loadContacts: PropTypes.func
    }

    constructor(props){
        super(props);
        this.url = 'https://randomuser.me/api/?results=10';
    }

    loadContacts(url){
        this.props.loadContacts(url);
    }

    render() {
        const {
            onLoadContacts
        } = this.props
    
        return (
            <div className="ContactPage">
                <Card>
                    <p>CONTACTS:</p>
                    <ShowInfo/>
                    <Button onClick = {() => onLoadContacts(this.url)} icon="cloud-download">Load contacts</Button>
                    <ContactList/>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadContacts: (url) => dispatch( loadContacts(url) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactPage);
