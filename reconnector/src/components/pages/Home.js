import React, {Component, useEffect, useState} from "react"
import Navbar from '../Navbar';
import ContactList from "../Contact";

import M from "materialize-css"

const Home = () => {


    var [userInfo, setUserInfo] = useState(null)

    var [fname , setFname] = useState('')
    var [lname , setLname] = useState('')
    var [company , setCompany] = useState('')
    var [jobTitle , setJobTitle] = useState('')
    var [fname , setFname] = useState('')
    var [email , setEmail] = useState('')
    var [linkedin , setLinkedin] = useState('')
    var [number , setNumber] = useState (0)
    var [frequency , setFrequency] = useState ('')
    var [times , setTimes] = useState (0)
    var [notes , setNotes] = useState ('')


    useEffect(()=> {
        var action_btn = document.querySelectorAll('.fixed-action-btn');
        var instances1 = M.FloatingActionButton.init(action_btn, {});

        var add_contact_modal = document.querySelectorAll('.modal');
        var instances2 = M.Modal.init(add_contact_modal, {dismissible :false});

        var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});

    })

    const addContact = () => {

    }
    return(
        <div>
            <Navbar />
            <span style={{padding: '10px'}}/>
            <div className="container blue-grey-text text-darken-2">
                <div className="">
                    <ContactList/>
                </div>
            </div>

            <div className="fixed-action-btn">
                <a className="btn-floating btn-large waves-effect waves-circle waves-light modal-trigger red accent-2" href="#add_modal" >
                    <i className="large material-icons">add</i>
                </a>
            </div>

             {/*add contact Modal Structure */}

            <div id="add_modal" class="modal modal-fixed-footer white-text cyan darken-2 text-darken-2">
                <div class="modal-content">
                    <h4 className="center-align white-text">Add Contact</h4>
                    {/*<p className="center-align">text</p>*/}
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s12 m6 ">
                                    <i className="material-icons red-text text-lighten-2 prefix">account_circle</i>
                                    <input id="first_name" type="text" className="validate" value={fname} onChange={e => setFname(e.target.value)}/>
                                    <label className="white-text" htmlFor="first_name">First Name</label>
                                </div>
                                <div className="input-field col s6">
                                    <input id="last_name" type="text" className="validate" value={lname} onChange={e => setLname(e.target.value)}/>
                                        <label className="white-text" htmlFor="last_name">Last Name</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 m6 ">
                                    <i className="material-icons red-text text-lighten-2 prefix">domain</i>
                                    <input id="company" type="text" className="validate" value={company} onChange={e => setCompany(e.target.value)}/>
                                    <label className="white-text" htmlFor="company">Company</label>
                                </div>
                                <div className="input-field col s12 m6 ">
                                    <i className="material-icons red-text text-lighten-2 prefix">work</i>
                                    <input id="job" type="text" className="validate" value={jobTitle} onChange={e => setJobTitle(e.target.value)}/>
                                    <label className="white-text" htmlFor="job">Job title</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons red-text text-lighten-2 prefix">email</i>
                                    <input id="email" type="email" className="validate" value={email} onChange={e => setEmail(e.target.value)}/>
                                    <label className="white-text" htmlFor="email">Email</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12 m6 ">
                                    <i className="material-icons red-text text-lighten-2 prefix">web</i>
                                    <input id="linkedin" type="text" className="validate" value={linkedin} onChange={e => setLinkedin(e.target.value)}/>
                                    <label className="white-text" htmlFor="linkedin">linkedin</label>
                                </div>
                                <div className="input-field col s12 m6 ">
                                    <i className="material-icons red-text text-lighten-2 prefix">phone</i>
                                    <input id="phone_number" type="text" className="validate white-text" value={number} onChange={e => setNumber(e.target.value)}/>
                                    <label className="white-text" htmlFor="phone_number">Phone number</label>
                                </div>
                            </div>

                            <div className="row">

                                <h6 className="white-text">Frequency</h6>
                                <div className="col s12 white-text">every</div>
                                <div className="input-field col s12 white-text">
                                    <i className="material-icons red-text text-lighten-2 prefix">perm_contact_calendar</i>
                                    <select onChange={e => setFrequency(e.target.value)}>
                                        <option value="" disabled defaultValue>Choose your option</option>
                                        <option value="W">week</option>
                                        <option value="M">months</option>
                                    </select>
                                </div>
                                <div className="col s12 white-text">for</div>
                                <div className="input-field col s12">
                                    <i className="material-icons red-text text-lighten-2 prefix">access_time</i>
                                    <input id="times" type="text" className="validate white-text" value={times} onChange={e => setTimes(e.target.value)}/>
                                    <label className="white-text" htmlFor="times">times</label>
                                </div>
                            </div>

                            <div className="row">
                                <div className="input-field col s12">
                                    <i className="material-icons red-text text-lighten-2 prefix">event_note</i>
                                    <textarea id="notes" className="materialize-textarea" value={notes} onChange={e => setNotes(e.target.value)} />
                                    <label className="white-text" htmlFor="notes">Notes</label>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="red accent-2 modal-footer">
                    <a onClick={addContact} className="white-text modal-close waves-effect btn-flat">Add</a>
                    <a href="#!" className="white-text modal-close waves-effect btn-flat">Cancel</a>
                </div>
            </div>

        </div>
    )

}


export default Home