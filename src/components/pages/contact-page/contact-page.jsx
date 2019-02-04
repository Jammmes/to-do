import React, { PureComponent } from 'react';

import Card  from 'antd/lib/card';
import 'antd/lib/card/style/css';
import './contact-page.css';
import ContactList from '../../contact-list/index';
import  ShowInfo  from '../../show-info/index';
import ContactLoader from '../../contact-loader/index';

export class ContactPage extends PureComponent {

    static path = '/contact';

    render() {

        return (
            <div className="ContactPage">
                <Card>
                    <p>CONTACTS:</p>
                    <ShowInfo/>
                    <ContactLoader/>
                    <ContactList/>
                </Card>
            </div>
        )
    }
}


export default ContactPage;
