import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Button  from 'antd/lib/button';
import 'antd/lib/button/style/css';
import { connect } from 'react-redux';
import { openModal } from '../modal/index';

class ShowInfo  extends PureComponent {

    static propTypes = {
        openModal: PropTypes.func
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