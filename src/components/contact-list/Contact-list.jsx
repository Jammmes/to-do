import React, { Component } from 'react';
import { connect } from 'react-redux';
import  ContactItem  from '../contact-item/index';


class ContactList extends Component {

    render() { 
        if (!this.props.list.contacts.length) return '';
        return (
            <div>
                {
                    this.props.list.contacts.map( contact => <ContactItem  key = { contact.login.uuid } contact = { contact }/> )
                }
            </div>
        )
    }
}
 
function mapStateToProps (state) {
    return {
        list: state.contact
     }
}

export default connect(mapStateToProps)(ContactList);

