import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'


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
            <div className="container white-text">
                <h1 className="center">Login</h1>
                <form className="container col s8" onSubmit={this.handleSubmit}>

                <div className="row">
                    <div className="input-field col s6">
                        <input type="email" id="email" className="validate" onChange={this.handleChange} />
                        <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                    </div>
                </div>
                 
                <div className="row">
                    <div className="input-field col s6">
                        <input type="password" id="password" className="validate" onChange={this.handleChange} />
                        <label htmlFor="password" >Password</label>
                    </div>
                </div>
                  
                  <Link to="/register" type="submit" className="waves-effect waves-light btn"> Login </Link>
                </form>
                <h1>Or</h1>
                <button onClick={this.loginWithGoogle}></button>
            </div>
        )
    }
}
