import React, { PureComponent } from 'react';

import Card  from 'antd/lib/card';
import 'antd/lib/card/style/css';
import './contact-page.css';
import { ShowInfoContainer,
    ContactListContainer,
    ContactLoaderContainer } from '../../containers/index';

export class ContactPage extends PureComponent {

    static path = '/contact';

    render() {

        return (
            <div className="ContactPage">
                <Card>
                    <p>CONTACTS:</p>
                    <ShowInfoContainer/>
                    <ContactLoaderContainer/>
                    <ContactListContainer/>
                </Card>
            </div>
        )
    }
}

export default ContactPage;
