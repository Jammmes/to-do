import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import  ContactItem  from '../contact-item/index';
import Preloader from '../preloader/index';

class ContactList extends PureComponent {

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
 
function mapStateToProps (state) {
    return {
        list: state.contact
     }
}

export default connect(mapStateToProps)(ContactList);

