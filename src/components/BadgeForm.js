import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e => {
        console.log({
            name: e.target.name,
            value: e.target.value,
        });
    };
    handleClick = e => {
        console.log("Button was clicked")
    };
    handleSubmit = e => {
        e.preventDefault();
        console.log("Form was submited")
    };
    
    render(){
        return(
            <div>
                <h1>New Attendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>First Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"></input>
                    </div>

                    <button onClick={this.handleClick} className="btn btn-primary">ENVIAR</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;