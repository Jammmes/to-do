import { connect } from 'react-redux';

import ContactList from '../../components/contact-list/index';


export const ContactListContainer = connect(
    state => ({
        list: state.contact
    }),null
)(ContactList);
