import React, { PureComponent } from 'react';

import './app-header.css';
import { Link } from 'react-router-dom'

class AppHeader extends PureComponent {

    render() {
        return (
            <div className = "app-header">
                <Link to="/">Application (react, redux, router, antd).</Link>
                <Link to="/contact">Our contacts</Link>                
            </div>
        )
    }
}

export default AppHeader;