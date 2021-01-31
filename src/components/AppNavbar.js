import React, {Component } from 'react'
import {  NavLink } from 'react-router-dom'
import './AppNavbar.css'
import UZODINMA_LOGO from '../img/UZODINMA LOGO 2-page0001.jpg'

import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap'

class AppNavbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render(){
        return(
            <div>
                <Navbar dark className="header" expand="sm">
                    <Container>
                        
                        <NavLink className="brand" to="/">
                            <div className="brand_logo_con">
                                <img className="brand_logo" src={UZODINMA_LOGO} alt="UZODINMA LOGO"></img>
                            </div>
                            <div>
                                <h5>UZODINMA SAMONYE & CO. <br />
                                <small>(Chartered Accountants)</small>
                                </h5> 
                            </div>
                        </NavLink>
                       
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className=" ml-auto" navbar>
                                
                                <NavItem> 
                                    <NavLink to="/" className="head_link">Home</NavLink> 
                                </NavItem>
                                <NavItem> 
                                    <NavLink to="/about" className="head_link">About</NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/services" className="head_link">Services</NavLink>
                                </NavItem> 
                                <NavItem>
                                   <NavLink to="/team" className="head_link">Team</NavLink> 
                                </NavItem>
                                <NavItem>
                                    <NavLink to="/contact" className="head_link">Contact</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default AppNavbar