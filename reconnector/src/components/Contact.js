import React, {useEffect} from "react"


import M from "materialize-css"

const Contact = (props) => {
    useEffect(()=> {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    })
    return (
            <li style={{marginBottom : '5px'}}>
                <div className="collapsible-header">
                    <i className="material-icons">account_circle</i>
                    <b className="teal-text text-darken-3">Mohamed Oussama</b>
                    <span className="new badge" data-badge-caption=""> 3 days ago</span>
                </div>
                <div className="collapsible-body">

                    <div className="row">
                        <div className="col s6">
                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-3-text">Company</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">Microsoft</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Job title</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">Software Engineer</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Email</h6>

                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">oussama@gmail.com</h5>
                                </div>
                            </div>
                           
                        </div>

                        <div className="col s5">
                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Linkedin</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">/in/oussama</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Number</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">0263189866</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Frequency</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">1x a month</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col s1">
                            <span>
                                <a className="right btn-floating waves-effect teal"><i className="material-icons">edit</i></a>
                           </span>
                        </div>


                    </div>


                    <div className="row">
                        <div className="col s12 center-align">
                            <div className="divider"></div>

                            <h6 className="white-text">Notes</h6>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        </div>
                    </div>
                </div>
            </li>
    )
}

const ContactList = (props) => {
    const Contacts = [

    ]
    return (
            <ul className="collapsible popout">
                <Contact/>
                <Contact/>
                <Contact/>
            </ul>
    )

}

export default ContactList ;