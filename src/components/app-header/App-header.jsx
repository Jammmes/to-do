import React, { Component } from 'react';
import { Divider } from 'antd';
import 'antd/lib/divider/style/css';
import './app-header.css';

export class AppHeader extends Component {

    render() {
        return (
            <div className = "app-header">
                Application (react, redux, router, antd)
                <Divider />
            </div>
        )
    }
}

