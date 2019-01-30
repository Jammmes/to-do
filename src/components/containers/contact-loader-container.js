import { connect } from 'react-redux';

import ContactLoader from '../../components/contact-loader/index';
import { loadContacts } from '../../components/contact-loader/index';


export const ContactLoaderContainer = connect(
    state => ({
        contacts: state.contact
    }),
    dispatch => ({
        onLoadContacts: (url) => dispatch( loadContacts(url) )
    })
)(ContactLoader);