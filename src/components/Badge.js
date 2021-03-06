import React from 'react';

import "./styles/Badge.css";
import imgHeader from '../imgs/badge-header.svg';

class Badge extends React.Component {
    render() {

        return (
            <div className="Bagde">
                <div className="Badge__header">
                    <img src={imgHeader} alt="logo"></img>
                </div>

                <div className="Badge__section-name">
                <img className="Badge__avatar" src={this.props.avatarUrl} alt="Avatar"></img>
                    <h1>{this.props.firstName} <br></br>{this.props.lastName}</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>{this.props.twitter}</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        )
    }

}

export default Badge;