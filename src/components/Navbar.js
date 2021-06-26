import React from 'react';
import {Link} from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../imgs/logo.svg';

class  Navbar extends React.Component {
    render(){
        return (
            <div className="Navbar">
            <div className="container-fluid">
                <Link className="Navbar__brand" to="/">
                    <img className="Navbar__brand-logo"src={logo} alt="logo"></img>
                    <span className="font-weight-light">CompanyName</span>
                    <span className="font-weight-light">Conf</span>
                </Link>
                </div>
            </div>
            );
    }    
}

export default Navbar;