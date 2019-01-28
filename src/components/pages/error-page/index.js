import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class ErrorPage extends Component {
    render() { 
        return (
            <h2>
                Error 404, перейти на <Link to = '/'> главную</Link>
            </h2>
        );
    }
}

export default ErrorPage;