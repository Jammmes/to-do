import React, { Component } from 'react';

// import List from 'antd/lib/list';
import 'antd/lib/list/style/css';
import { connect } from 'react-redux';
// import  ContactItem  from '../contact-item/index';


class ContactList extends Component {

    render() { 
        if (!this.props.list.contacts.length) return '';
        return (
            // <List
            //     size="small"
            //     bordered
            //     dataSource = { this.props.list.contacts }
            //     renderItem = { contact => (<List.contact>
            //         {/* <ContactItem  key = { contact.login.uuid } contact = { contact }/> */}
            //     </List.contact>) }
            // />
        this.props.list.contacts.map( item => (
        <div key = {item.login.uuid}>
            <span> {item.name.first} </span>
            <span>' : '</span>
            <span> {item.email} </span>
        </div>

     ) )
           // {this.props.list.contacts.name.first}
           // <div>{this.props.list.contacts.name.first}</div>
        );
    }
}
 
function mapStateToProps (state) {
    return {
        list: state.contact
     }
}

export default connect(mapStateToProps)(ContactList);

