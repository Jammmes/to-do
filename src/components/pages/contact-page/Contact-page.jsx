import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Card } from 'antd';
import 'antd/lib/button/style/css';
import 'antd/lib/card/style/css';
import './contact-page.css';
import { connect } from 'react-redux';
import { openModal } from '../../modal/index';


export class ContactPage extends Component {

    static path = '/contact';

    static propTypes = {
        dispatch: PropTypes.func.isRequired
    }

    onOpenModal() {
        this.props.dispatch( openModal());
    }

    render() {
        return (
            <div className="ContactPage">
                <Card>
                    CONTACTS:
                    <Button onClick = {this.onOpenModal.bind(this)} icon="star"/>
                </Card>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {}
}

export const contactPage = connect(mapStateToProps)(ContactPage);
