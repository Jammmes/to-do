import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import ContactItem  from '../contact-item/index';
import Preloader from '../preloader/index';

export class ContactList extends PureComponent {

    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        list: PropTypes.object.isRequired
    }

    render() { 
        if (!this.props.list.contacts.length && this.props.list.isLoading) return <Preloader />;
        return (
            <div>
                {
                    this.props.list.contacts.map( contact => <ContactItem  key = { contact.login.uuid } contact = { contact }/> )
                }
            </div>
        )
    }
}

export default ContactList;