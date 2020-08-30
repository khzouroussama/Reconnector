import React, { Component } from "react"
import './Landing.css'
import Navbar from '../Navbar';



// Import Materialize
import M from "materialize-css"

class Landing extends Component{
    render(){
        return(
            <section>
                <Navbar />
                <div className="container Landing">
                    <div className="cyan darken-2 white-text">
                        <h1> Reconnector </h1>
                        <h5> Build relationships. Keep in touch. Never forget.  </h5>
                        <a href="/register" class="waves-effect waves-light red accent-2 btn-large"> Register </a>
                    </div>
                </div>

<<<<<<< HEAD
                <div>
                    <div class="white red-text accent-2 row">
                        <div class="container">
                            <div class="col s4">
                                <h3> Add new connections</h3>
                                <h5> Build your network with a click of a button </h5>
                            </div>
                            <div class="col s8">
                                <h2> picture </h2> 
                            </div>
                        </div>
                    </div>

                    <div class="white-text row">
                        <div class="container">
                            <div class="col s4">
                                <h3> View connections</h3>
                                <h5> Simple UI to see your all your past connections </h5> 

                            </div>
                            <div class="col s8">
                                <ul class="black-text collapsible">
                                    <li>
                                    <div class="collapsible-header"><i class="material-icons">person</i> Bill Gates </div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                    </li>
                                    <li>
                                    <div class="collapsible-header"><i class="material-icons">person</i> Barack Obama </div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                    </li>
                                    <li>
                                    <div class="collapsible-header"><i class="material-icons">person</i> Selena Gomez </div>
                                    <div class="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                                    </li>
                                </ul>       
                            </div>
                        </div>
                    </div>

                    <div class="white red-text accent-2 row">
                        <div class="container">
                            <div class="col s4">
                                <h3> Set Reminders!</h3>
                                <h5> Keep in touch with past connections </h5>
                            </div>
                            <div class="col s8">
                                <h2> picture </h2> 
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container row">
                    <a href="/register" class="waves-effect waves-light red accent-2 btn-large"> Register </a> 
                </div>


               
                
=======
>>>>>>> 27fb083119ce874e54754e574ab8564576109fef
            </section>
        )
    }
}


export default Landing 