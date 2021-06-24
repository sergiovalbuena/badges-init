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
                <img className="Badge__avatar" src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1>Sergio <br></br>Valbuena</h1>
                </div>
                <div className="Badge__section-info">
                    <h3>Frontend Designer and Developer</h3>
                    <div>@twitter.name</div>
                </div>
                <div className="Badge__footer">
                    #platziconf
                </div>

            </div>
        )
    }

}

export default Badge;