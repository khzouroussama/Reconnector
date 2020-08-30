import React, {useEffect, useState} from "react"
import M from "materialize-css"
import app from "../firebase";
import * as firebase from 'firebase';

const Contact = (props) => {
    useEffect(()=> {
        var elems = document.querySelectorAll('.collapsible');
        var instances = M.Collapsible.init(elems, {});
    })
    return (
            <li style={{marginBottom : '5px'}}>
                <div className="collapsible-header">
                    <i className="material-icons">account_circle</i>
                    <b className="teal-text text-darken-3">{ props.f_name } { props.l_name}</b>
                    <span className="new badge" data-badge-caption=""> {props.days} days ago</span>
                </div>
                <div className="collapsible-body cyan darken-1">

                    <div className="row">
                        <div className="col s6">
                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-3-text">Company</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.company_name}</h5>  
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Job title</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.job_title}</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Email</h6>

                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.contact_email}</h5>
                                </div>
                            </div>
                           
                        </div>

                        <div className="col s5">
                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Linkedin</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.contact_linkedin}</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Number</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.contact_number}</h5>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col s3">
                                    <h6 className="grey-darken-text">Frequency</h6>
                                </div>
                                <div className="col s9">
                                    <h5 className="white-text left-align">{props.contact_frequency_number}x a {props.contact_frequency_unit}</h5>
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
                            <p>
                                {props.notes}
                            </p>
                        </div>
                    </div>
                </div>
            </li>
    )
}

const ContactList = (props) => {
    
    var [f_name, set_f_name] = useState('')
    var [l_name, set_l_name] = useState('')
    var [company_name, set_company_name] = useState('')
    var [contact_email, set_contact_email] = useState('')
    var [contact_frequency_number, set_contact_frequency_number] = useState('')
    var [contact_frequency_unit, set_contact_frequency_unit] = useState('')
    var [contact_linkedin, set_contact_linkedin] = useState('')
    var [contact_number, set_contact_number] = useState('')
    var [job_title, set_job_title] = useState('')
    var [notes, set_notes] = useState('')
    // firebase.firestore().collection('contacts').onSnapshot(snapshot => {
    //     snapshot.forEach(doc => {
    //     set_f_name(doc.data().f_name)
    //     set_l_name(doc.data().l_name)
    //     set_company_name(doc.data().company_name)
    //     set_contact_email(doc.data().contact_email)
    //     set_contact_frequency_number(doc.data().contact_frequency_number)
    //     set_contact_frequency_unit(doc.data().contact_frequency_unit)
    //     set_contact_linkedin(doc.data().contact_linkedin)
    //     set_contact_number(doc.data().contact_number)
    //     set_job_title(doc.data().job_title)
    //     set_notes(doc.data().notes)
    //     });
    // });
    return (
        
        <ul className="collapsible popout">
            {/*<Contact */}
            {/*    f_name={f_name} */}
            {/*    l_name={l_name} */}
            {/*    company_name={company_name} */}
            {/*    contact_email={contact_email} */}
            {/*    contact_frequency_number={contact_frequency_number} */}
            {/*    contact_frequency_unit={contact_frequency_unit} */}
            {/*    contact_linkedin={contact_linkedin} */}
            {/*    contact_number={contact_number} */}
            {/*    job_title={job_title} */}
            {/*    notes={notes} */}
            {/*/>*/}
            <Contact
                f_name = "John"
                l_name ="Steven"
                company_name="Microsoft"
                contact_email="Steven@gmail.com"
                contact_frequency_number="2"
                contact_frequency_unit="month"
                contact_linkedin="/in/JSteven"
                contact_number="646832392394"
                job_title="Software Engineer"
                notes = "We met at a Hackathon and he introduced me to other web developers!"
            />
            <Contact
                f_name = "Cruz"
                l_name ="Steven"
                company_name="Google"
                contact_email="Steven@google.com"
                contact_frequency_number="4"
                contact_frequency_unit="week"
                contact_linkedin="/in/Cruz"
                contact_number="408-244-5464"
                job_title="Product Manager"
                notes = "I contacted him through my school networking website. "
            />
            <Contact
                f_name = "Bill"
                l_name ="Gates"
                company_name="Microsoft"
                contact_email="bill-gates@gmail.com"
                contact_frequency_number="1"
                contact_frequency_unit="year"
                contact_linkedin="/in/billgates"
                contact_number="408-244-45621"
                job_title="CEO"
                notes = "We are best friends since Middle School "
            />
        </ul>
    )

}

export default ContactList ;