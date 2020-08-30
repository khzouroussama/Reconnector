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
                    <span className="new badge" data-badge-caption="">last called : 3 days ago</span>
                </div>
                <div className="collapsible-body">
                    <div className="row">
                        <div className="col s6 ">
                            <h6 className="teal-text">Company</h6>
                            <p className="center-align">Microsoft</p>

                            <h6 className="teal-text">Job title</h6>
                            <p className="center-align">Software engineer</p>

                            <h6 className="teal-text">E-mail</h6>
                            <p className="center-align">oussama@gmail.com</p>
                        </div>
                        <div className="col s6 ">
                            <h6 className="teal-text">Linkedin</h6>
                            <p className="center-align">/in/oussama</p>

                            <h6 className="teal-text">Phone number</h6>
                            <p className="center-align">0263189866</p>

                            <h6 className="teal-text">Frequency</h6>
                            <p className="center-align">every week for the next 5 weeks</p>
                        </div>
                        <div className="col s12 center-align">
                            <div className="divider"></div>

                            <h6 className="teal-text">Notes</h6>
                            <p>Bla Bla</p>
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