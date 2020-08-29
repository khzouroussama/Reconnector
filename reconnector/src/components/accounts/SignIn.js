import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        return (
            <div className="">
                <h1>This is the sign In page</h1>
                <form className="" onSubmit={alert("Submit")}>
                    <div className="inputField">
                        <input type="email" id="email" onChange="" />
                        <br/>
                    </div>
                    <div className="inputField">
                        <input type="password" id="password" onChange="" />
                        <br/>
                    </div>
                    <button className="">Submit</button>
                </form>
            </div>
        )
    }
}
