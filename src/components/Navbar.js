import React from 'react';

import './styles/Navbar.css';
import logo from '../imgs/logo.svg';

class  Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
            <div className="container-fluid">
                <a className="Navbar__brand" href="/">
                    <img class="Navbar__brand-logo"src={logo} alt="logo"></img>
                    <span className="font-weight-light">CompanyName</span>
                    <span className="font-weight-light">Conf</span>
                </a>
                </div>
            </div>
            );
    }    
}

export default Navbar;