import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class SignIn extends Component {

    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    loginWithGoogle = (e) => {
        // firebase.auth()
        console.log(e);
    }
    render() {
        return (
            <div className="container">
                <h1>This is the sign In page</h1>
                <form onSubmit={this.handleSubmit}>
                  <div className="input-field col s12">
                    <input type="email" id="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                  <div className="input-field col s12">
                    <input type="password" id="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="password" >Password</label>
                  </div>
                  <button type="submit" className="waves-effect waves-light btn">Submit</button>
                  <Link to="/register" type="submit" className="waves-effect waves-light btn">Register</Link>
                </form>
                <h1>Or</h1>
                <button onClick={this.loginWithGoogle}></button>
            </div>
        )
    }
}
