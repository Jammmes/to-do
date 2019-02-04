import { connect } from 'react-redux';

import ContactLoader from '../../components/contact-components/contact-loader/index';
import { loadContacts } from '../contact-components/actions';

export const ContactLoaderContainer = connect(
    state => ({
        contacts: state.contact
    }),
    dispatch => ({
        onLoadContacts: (url) => dispatch( loadContacts(url) )
    })
)(ContactLoader);