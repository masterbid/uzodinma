import React from 'react'
import { Container } from 'reactstrap'
import Social from './social'
import './footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return(
        <footer>
            <Container>
                <div className="footer-menu">
                    <div className="footer-menu-items">
                        <p className="footer-menu-items-header">Quick Link</p>
                        <ul className="footer-menu-items-links">
                            <Link to="/"><li className="footer-menu-items-link">Home</li></Link>
                            <Link to="/about"><li className="footer-menu-items-link">About</li></Link>
                            <Link to="/team"><li className="footer-menu-items-link">Teams</li></Link>
                            <Link to="/services"><li className="footer-menu-items-link">Services</li></Link>
                            <Link to="/projects"><li className="footer-menu-items-link">Clients</li></Link>
                        </ul>
                    </div>
                    <div className="footer-menu-items">
                        <p className="footer-menu-items-header" >Social Links</p>
                        <Social />
                    </div>
                    <div className="footer-menu-items">
                        <p className="footer-menu-items-header">Contact Us</p>
                        <p className="footer-menu-items-txt">
                            UZODINMA, SAMONYE & CO. <br />
                            (CHARTERED ACCOUNTANTS)<br />
                            24 IKWERRE ROAD <br />
                            PORT HARCOURT <br />
                            RIVERS STATE
                        </p>
                    </div>
                </div>
                <div className="footer">Copyright &copy; 1997 - 2019. Uzodinma Samonye All Rights Reserved.  </div>
            </Container>
        </footer>
    )
}

export default Footer