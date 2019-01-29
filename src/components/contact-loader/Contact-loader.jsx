import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import { connect } from 'react-redux';
import { loadContacts } from './actions';

class ContactLoader extends PureComponent {

    static propTypes = {
        loadContacts: PropTypes.func,
        contacts: PropTypes.object.isRequired
    }
 
    constructor(props) {
        super(props);
        this.url = 'https://randomuser.me/api/?results=10';
    }

    render() {
        const {onLoadContacts} = this.props;
        return (
            <Button onClick = {() => onLoadContacts(this.url)} icon="cloud-download">Load contacts</Button>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        contacts: state.contact
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLoadContacts: url => dispatch(loadContacts(url))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactLoader);