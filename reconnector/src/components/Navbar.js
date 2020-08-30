import React, {Component} from 'react';
import $ from 'jquery'



class NavBar extends Component{
    render(){
        return(
        <section> 
            <nav>
                <div class="nav-wrapper">
                <a href="/home" class="brand-logo">Reconnector</a>
                <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul id="nav-mobile" class="right hide-on-med-and-down">

                    {/* show when logged in */}
                    <li><a href="/logout"><i class="large material-icons">exit_to_app</i></a></li>


                    {/* show when logged out */}
                    <li><a href="/login"> Login <i class="large left material-icons">login</i> </a></li>

                </ul>
                </div>
            </nav>
            <ul class="sidenav" id="mobile-demo">
                {/* show when logged in */}
                <li><a href="/logout">Logout<i class="large material-icons">exit_to_app</i></a></li>

                {/* show when logged out */}
                <li><a href="/login">Login<i class="large left material-icons">login</i> </a></li>

            </ul>
        </section>
       
        
        )
    }
    
}


export default NavBar


