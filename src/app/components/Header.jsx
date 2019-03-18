
import React, { Component } from 'react';
import {Link} from "react-router-dom";
import Menu from "./Menu";


class Header extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (

            <header className='header'>
                <Link to='/' className='logo'></Link>
                <nav className='navbar navbar-expand-lg '>
                    <button id="minimizeSidebar" className="btn btn-default btn-fill btn-round btn-icon">
                        <i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>
                        <i className="fa fa-navicon visible-on-sidebar-mini"></i>
                    </button>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#collapsibleNavbar">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/*<div className="collapse navbar-collapse" id="collapsibleNavbar">*/}
                        {/*<ul className="navbar-nav">*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href="#">Link</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href="#">Link</a>*/}
                            {/*</li>*/}
                            {/*<li className="nav-item">*/}
                                {/*<a className="nav-link" href="#">Link</a>*/}
                            {/*</li>*/}
                        {/*</ul>*/}
                    {/*</div>*/}
                </nav>
                <Menu />
            </header>
        );
    }
}

export default Header;
