import React from 'react';
import '../App.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div id="title">Reliable, efficient delivery</div>
                <div id="subtitle">Powered by Technology</div>
                <p id="slogan">Our Artificial Intelligence powered tools use millions of project data points 
                to ensure that your project is successful</p>
                <div id="contentBreak"></div>
            </div>
        );
    }

}

export default Header;