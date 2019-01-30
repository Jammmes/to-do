import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';

class ContactLoader extends PureComponent {

    static propTypes = {
        loadContacts: PropTypes.func,
        contacts: PropTypes.object.isRequired
    }
 
    constructor(props) {
        super(props);
        this.url = 'https://randomuser.me/api/?results=10';
    }

    render() {
        const {onLoadContacts} = this.props;
        return (
            <Button onClick = {() => onLoadContacts(this.url)} icon="cloud-download">Load contacts</Button>
        );
    }
}

export default ContactLoader;