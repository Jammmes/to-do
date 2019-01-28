import React, { Component} from 'react';

import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import { closeModal } from './index'
import 'antd/lib/button/style/css';
import './modal.css';

export class Modal extends Component {
    
    componentWillMount(){
        this.rootModal = document.createElement('div');
        document.body.appendChild(this.rootModal);
    }

    componentWillUnmount(){
        document.body.removeChild(this.rootModal);
    }

    static propTypes = {
        modal: PropTypes.object.isRequired,
        dispatch: PropTypes.func.isRequired
    }

    onClose(){
        this.props.dispatch( closeModal());
    }

    render() {
        const {isOpen} = this.props.modal;
        if (!isOpen) return null;

        return  ReactDOM.createPortal( 
        <div className = "modal-back">
            <div className ='modal-window'>
                <p>{ this.props.children }</p>
                
                <Button icon="close-circle" onClick = { this.onClose.bind(this) }/>
            </div>
        </div>,
        this.rootModal
        );
    }
}
 
function mapStateToProps(state) {
    return { modal: state.modal };
}

export default connect(mapStateToProps)(Modal);