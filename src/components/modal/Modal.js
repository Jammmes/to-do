import React, { Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Card, Button } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';

class Modal extends Component {
    state = {  }

    static PropTypes = {
        modal: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    render() {
        const {isOpen} = this.props.modal;
        if (!isOpen) return null;

        return ( 
        <Card 
            title="Card title"
            bordered={false}
            style={{ width: 300 }}
            extra={<Button icon="close-circle"/>}
        >
            <p>Card content</p>
            <p>Card content</p>
            <p>Card content</p>
        </Card>

        );
    }
}
 
function mapStateToProps(state) {
    return { modal: state.modal };
}



export const modal = connect(mapStateToProps)(Modal);