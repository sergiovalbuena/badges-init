import React from 'react';

import imgHeader from '../imgs/badge-header.svg';

class Badge extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={imgHeader} alt="logo"></img>
                </div>

                <div>
                <img src="https://www.gravatar.com/avatar?d=identicon" alt="Avatar"></img>
                    <h1>Sergio <br></br>Valbuena</h1>
                </div>
                <div>
                    <p>Frontend Designer and Developer</p>
                    <p>@twitter.name</p>
                </div>
                <div>
                    #platziconf
                </div>

            </div>
        )
    }

}

export default Badge;