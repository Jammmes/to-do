import React, { PureComponent } from 'react';
import './contact-item.css';


class ContactItem extends PureComponent {

    render() { 
        return (
            <div className = "contact-item">
                <b className = "contact-item__caption">Name:</b>{this.props.contact.name.first} {this.props.contact.name.last},
                <b className = "contact-item__caption">Email: </b> {this.props.contact.email},
                <b className = "contact-item__caption">Phone: </b> {this.props.contact.phone},
            </div>
        );
    }
}
 
export default ContactItem;