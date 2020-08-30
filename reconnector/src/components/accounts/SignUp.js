import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './SignUp.css'

export default class SignIn extends Component {
    handleChange = (e) => {
        console.log(e);
    }
    handleSubmit = (e) => {
        console.log(e);
    }
    render() {
        return (
            <div className="container white-text">
                <h1 className="center"> Register </h1>
                
                <form className="container col s8" onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="input-field col s6">
                      <input type="text" name="first_namd" id="first_name" className="validate" onChange={this.handleChange} />
                      <label htmlFor="first_name">First Name</label>
                    </div>
                    <div className="input-field col s6">
                      <input type="text" name="last_name" id="last_name" className="validate" onChange={this.handleChange} />
                      <label htmlFor="last_name">Last Name</label>
                    </div>
                  </div>

                 
                  <div className="input-field col s4">
                    <input type="email" name="email" id="email" className="validate" onChange={this.handleChange} />
                    <label htmlFor="email" data-error="wrong" data-success="right">Email</label>
                  </div>
                  <div className="input-field col s8">
                    <input type="password" name="password" id="password" className="validate" onChange={this.handleChange} />
                    <label htmlFor="password" >Password</label>
                  </div>
                  <Link to="/login" type="submit" className="right waves-effect waves-light red accent-2 btn"> Register </Link >
                </form>
            </div>
        )
    }
}
