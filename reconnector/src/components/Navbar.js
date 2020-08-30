import React, {Component, useContext} from 'react';
import app from '../firebase';
// import { isLoggedIn, signOut, signIn } from './accounts/auth';
// import $ from 'jquery'
import {AuthContext} from './accounts/auth'
import { Redirect } from 'react-router-dom';

function NavBar (){
    
    const { currentUser } = useContext(AuthContext);
        return(
        <section> 
            <nav>
                <div className="container">
                    <div className="nav-wrapper">
                    <a href="/home" className="brand-logo">Reconnector</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">

                        {/* show when logged in */}

                        {!currentUser ?<li><a onClick={() => {app.auth().signOut()}}> Logout <i className="large left material-icons">exit_to_app</i></a></li> : <li><a onCLick={<Redirect to='/login' />}>Login <i className="large left material-icons">login</i> </a></li>}

                    </ul>
                    </div>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {/* show when logged in */}
                <li><a onClick={() => app.auth().signOut()}>Logout<i className="large material-icons">exit_to_app</i></a></li>

                {/* show when logged out */}
                <li><a href="/login">Login<i className="large left material-icons">login</i> </a></li>

            </ul>
        </section>
       
        
        )
    
}


export default NavBar


