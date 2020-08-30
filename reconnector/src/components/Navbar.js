import React, {Component} from 'react';


class NavBar extends Component{
    render(){
        return(

            <nav className="blue lighten-2">
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo center">Reconnector</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="/"><i className="material-icons">exit_to_app</i></a></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar


