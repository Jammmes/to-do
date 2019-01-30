import React, { Component } from 'react';

import { connect } from 'react-redux';

function withConnectToStore (WrappedComponent, mapStateToProps) {
    return connect(mapStateToProps)(
        class  extends Component {
            render() { 
                return <WrappedComponent {...this.props} />;
            }
        }
    )
}
 
export default withConnectToStore;