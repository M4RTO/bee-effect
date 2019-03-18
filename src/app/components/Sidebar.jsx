import React, { Component } from 'react';
import { Collapse } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// this is used to create scrollbars on windows devices like the ones from apple devices

// backgroundImage for Sidebar
//import image from '../assets/img/full-screen-image-3.jpg';
// image for avatar in Sidebar
// logo for sidebar
//import logo from "../assets/img/cangre.png";

import pagesRoutes from '../routes.js';

//const bgImage = {backgroundImage: "url("+image+")"};

class Sidebar extends Component{
    constructor(props){
        super(props);
        this.state = {
            openAvatar: false,
        //    isWindows: (navigator.platform.indexOf('Win') > -1 ? true : false),
          //  width: window.innerWidth
        };
    }
    // verifies if routeName is the one active (in browser input)
    activeRoute(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? 'active' : '';
    }
    // if the windows width changes CSS has to make some changes
    // this functions tell react what width is the window
    updateDimensions(){
        //this.setState({width:window.innerWidth});
    }
    componentDidMount() {
        this.updateDimensions();
        // add event listener for windows resize
        window.addEventListener("resize", this.updateDimensions.bind(this));
        // if (window.matchMedia(`(min-width: 960px)`).matches) {
        //     ps.initialize(this.refs.sidebarWrapper, { wheelSpeed: 2, suppressScrollX: true });
        // }
    }

    // function that creates perfect scroll bar for windows users (it creates a scrollbar that looks like the one from apple devices)
    // isMac(){
    //     let bool = false;
    //     if (Navigator.platform.toUpperCase().indexOf('MAC') >= 0 || Navigator.platform.toUpperCase().indexOf('IPAD') >= 0) {
    //         bool = true;
    //     }
    //     return bool;
    // }
    render(){
        return (

            <div className="sidebar" data-color="black">
                <div className="sidebar-background"></div>
                <div className="logo">

                    <a className="simple-text logo-mini">
                        <div className="logo-img">
                            <img src={''} />
                        </div>
                    </a>
                    <a className="simple-text logo-normal">
                        KrabPack
                    </a>

                </div>
                <div className="sidebar-wrapper" ref="sidebarWrapper">

                    <ul className="nav">
                        {
                            pagesRoutes.filter(prop => prop.name !== '').map((prop,key) => {
                                var st = {};
                                st[prop["state"]] = !this.state[prop.state];
                                if(prop.collapse){
                                    return (
                                        <li key={key}>
                                            {
                                                 ( <a onClick={ ()=> this.setState(st)}>
                                                <i className={prop.icon}></i>
                                                <p>{prop.name}
                                                <b className={this.state[prop.state] ? "caret rotate-180":"caret"}></b>
                                                </p>
                                                </a>)
                                            }
                                            <Collapse in={this.state[prop.state]}>
                                                <ul className="nav">
                                                    {
                                                        prop.views.map((prop,key) => {


                                                          return( <li key={key}>
                                                              <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                                  <span className="sidebar-mini">{prop.mini}</span>
                                                                  <span className="sidebar-normal">{prop.name}</span>
                                                              </NavLink>
                                                          </li>)


                                                        }
                                                        )
                                                    }
                                                </ul>
                                            </Collapse>
                                        </li>
                                    )
                                } else {
                                    if(prop.redirect){
                                        return null;
                                    }
                                    else{

                                       if(prop.name !== undefined ) {
                                           return (
                                               <li key={key}>
                                                   <NavLink to={prop.path} className="nav-link" activeClassName="active">
                                                       <i className={prop.icon}></i>
                                                       <p>{prop.name}</p>
                                                   </NavLink>
                                               </li>
                                           )
                                       }else {
                                        return (<li key={key}></li>)
                                       }
                                    }
                                }
                            })
                        }
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sidebar;
