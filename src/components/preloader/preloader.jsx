import React, { PureComponent } from 'react';
import './preloader.css';

class Preloader extends PureComponent {
    render() { 
        return (
            <div className = "preloader">
                <div className="preloader__img"></div>
            </div>
        );
    }
}
 
export default Preloader;