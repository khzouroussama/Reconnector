import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component {
    handleChange = (e) => {
        console.log(e);
    }
    handleSubmit = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className="container">
                <h1>This is the sign Up page</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field col s6 l6">
                    <input type="text" name="first_name" id="first_name" className="validate" onChange={this.handleChange} />
                    <label htmlFor="first_name">First Name</label>
                  </div>
                  <div className="input-field col s6 l6">
                    <input type="text" name="last_name" id="last_name" className="validate" onChange={this.handleChange} />
                    <label htmlFor="last_name">Last Name</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="email" name="email" id="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="password" name="password" id="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="password" >Password</label>
                  </div>
                  <button type="submit" className="waves-effect waves-light btn">Submit</button>
                  <Link to="/login" type="submit" className="waves-effect waves-light btn">Login</Link >
                </form>
            </div>
        )
    }
}
