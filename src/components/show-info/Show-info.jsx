import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import Button  from 'antd/lib/button';
import 'antd/lib/button/style/css';

class ShowInfo  extends PureComponent {

    static propTypes = {
        onOpenModal: PropTypes.func.isRequired,
        modal: PropTypes.object.isRequired
    }
  
    render() { 
        const { onOpenModal} = this.props;
        return (
            <Button onClick = {onOpenModal} icon="star"/>
        );
    }
}

export default ShowInfo;