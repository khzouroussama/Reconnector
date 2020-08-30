import React, { Component } from "react"
import './Landing.css'


// Import Materialize
import M from "materialize-css"

class Landing extends Component{
    render(){
        return(
            <section>
                <div className="container Landing">
                    <div className="cyan darken-2 white-text">
                        <h1> Reconnector </h1>
                        <h5> Easily build your network and keep in touch! </h5>
                        <a href="/register" class="waves-effect waves-light red accent-2 btn-large"> Register </a>
                    </div>
                </div>

            </section>
        )
    }
}


export default Landing 