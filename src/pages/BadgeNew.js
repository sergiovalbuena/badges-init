import React from 'react';

import '../components/styles/Badge.css'
import header from '../imgs/badge-header.svg';
import Navbar from '../components/Navbar';
import Badge from '../components/Badge';


class  BadgeNew extends React.Component {
    render(){
        return (
            <div>
                <Navbar />
                <div className="BadgeNew__hero">
                    <img className="img-fluid" src={header} alt="logo"></img>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge firstName="Sergio" lastName="Valbuena" twitter="@name.twitter" jobTitle="FrontEnd Designer & Development" avatarUrl=""/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }    
}

export default BadgeNew;