import React, { Component } from 'react';
import './app-header.css';

import { Link } from 'react-router-dom'



export class AppHeader extends Component {

    render() {
        return (
            <div className = "app-header">
                <Link to="/">Application (react, redux, router, antd).</Link>
                <Link to="/contact">Our contacts</Link>                
            </div>
        )
    }
}

