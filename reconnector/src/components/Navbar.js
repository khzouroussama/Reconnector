import React, {Component} from 'react';


class NavBar extends Component{
    render(){
        return(
        <nav>
            <div class="nav-wrapper">
            <a href="/home" class="brand-logo">Reconnector</a>
            <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html"><i class="large material-icons">exit_to_app</i></a></li>
            </ul>
            </div>
        </nav>
        )
    }
}

export default NavBar


