import React, { Component } from "react"
import {Link} from "react-router-dom";
import './Landing.css'
import Navbar from '../Navbar';
import ContactList from "../Contact";


// Import Materialize
// import M from "materialize-css"

class Landing extends Component{
    render(){
        return(
            <section>
                <Navbar />
                <div className="container Landing">
                    <div className="cyan darken-2 white-text">
                        <h1> Reconnector </h1>
                        <h5> Build relationships. Keep in touch. Never forget.  </h5>
                        <Link to="/register" className="waves-effect waves-light red accent-2 btn-large"> Register </Link>
                    </div>
                </div>

                <div className="infoSection">
                    <div className="white red-text accent-2 row">
                        <div className="section container">
                            <div className="col s4">
                                <h3> Add new connections</h3>
                                <h5> Build your network with a click of a button </h5>
                            </div>
                            <div className="col s8">
                                <form className="col s12">
                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons red-text text-lighten-2 prefix">account_circle</i>
                                            <input id="disabled" type="text" className="validate"/>
                                            <label htmlFor="teal-text first_name">First Name</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <input id="last_name" type="text" className="validate"/>
                                                <label htmlFor="last_name">Last Name</label>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="input-field col s6">
                                            <i className="material-icons red-text text-lighten-2 prefix">domain</i>
                                            <input id="company" type="text" className="validate"/>
                                            <label htmlFor="company">Company</label>
                                        </div>
                                        <div className="input-field col s6">
                                            <i className="material-icons red-text text-lighten-2 prefix">work</i>
                                            <input id="job" type="text" className="validate"/>
                                            <label htmlFor="job">Job title</label>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="white-text row">
                        <div className="section container">
                            <div className="col s4">
                                <h3> View connections</h3>
                                <h5> Simple UI to see your all your past connections </h5> 

                            </div>
                            <div className="col s8">
                                < ContactList />
                            </div>
                        </div>
                    </div>

                    <div className="white red-text accent-2 row">
                        <div className="container">
                            <div className="col s4">
                                <h3> Set Reminders!</h3>
                                <h5> Keep in touch with past connections </h5>
                            </div>
                            <div className="col s8">
                                <form className="col s12">
                                    <div className="row">

                                        <div className="col s12">every</div>

                                        <div className="input-field col s12">
                                            <i className="material-icons red-text text-lighten-2 prefix">perm_contact_calendar</i>
                                            <input placeholder="month" id="times" type="text" className="validate"/>
                                            {/* <label htmlFor="times">times</label> */}
                                        </div>

                                        <div className="col s12">for</div>

                                        <div className="input-field col s12">
                                            <i className="material-icons red-text text-lighten-2 prefix">access_time</i>
                                            <input placeholder="2x" id="times" type="text" className="validate"/>
                                            {/* <label htmlFor="times">times</label> */}

                                        </div>

                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                </div>


                <div className="container row rfooter">
                    <a href="/register" className="waves-effect waves-light red accent-2 btn-large"> Register </a>
                </div>


               
                
            </section>
        )
    }
}


export default Landing 