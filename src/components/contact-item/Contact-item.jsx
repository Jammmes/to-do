import React, { Component } from 'react';
import './contact-item.css';


class ContactItem extends Component {

    render() { 
        return (
            <div className = "contact-item">
               <b>Name:</b>{this.props.contact.name.first}, <b>Email: </b> {this.props.contact.email}
            </div>
        );
    }
}
 
export default ContactItem;