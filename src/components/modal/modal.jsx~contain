import React, { PureComponent} from 'react';

import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from 'antd/lib/button';
import 'antd/lib/button/style/css';
import './modal.css';

export class Modal extends PureComponent {
    
    componentWillMount(){
        this.rootModal = document.createElement('div');
        document.body.appendChild(this.rootModal);
    }

    componentWillUnmount(){
        document.body.removeChild(this.rootModal);
    }

    static propTypes = {
        modal: PropTypes.object.isRequired,
        onClose: PropTypes.func.isRequired
    }

    render() {
        const {isOpen} = this.props.modal;
        const {onClose} = this.props;
        
        if (!isOpen) return null;

        return  ReactDOM.createPortal( 
        <div className = "modal-back">
            <div className ='modal-window'>
                <p>{ this.props.children }</p>
                <Button icon="close-circle" onClick = {()=>onClose()}/>
            </div>
        </div>,
        this.rootModal
        );
    }
}

export default Modal;