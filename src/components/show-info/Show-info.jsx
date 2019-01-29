import React, { Component } from 'react';

import PropTypes from 'prop-types';
import Button  from 'antd/lib/button';
import 'antd/lib/button/style/css';
import { connect } from 'react-redux';
import { openModal } from '../modal/index';

class ShowInfo  extends Component {

    static propTypes = {
        openModal: PropTypes.func
    }

    openModal() {
        this.props.openModal();
    }
    
    render() { 
        const { onOpenModal} = this.props;
        return (
            <Button onClick = {onOpenModal} icon="star"/>
          );
    }
}


const mapStateToProps = (state) => {
    return {
        modal: state.modal
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onOpenModal: () => dispatch( openModal() )
    }
}

 
export default connect(mapStateToProps, mapDispatchToProps)(ShowInfo);