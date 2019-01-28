import React, { Component } from 'react';


class ContactItem extends Component {
    render() { 
        return (
            <div>
                <div>
                    {this.props.name.first}
                </div>
            </div>
          );
    }
}
 
export default ContactItem;