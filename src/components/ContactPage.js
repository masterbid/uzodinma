import React from 'react'
import { Container } from 'reactstrap'
import './ContactPage.css'

const ContactPage = () =>{
    return(
        <Container className="mt-5">
            <div class="contactUs">
                <ul>
                    <li>
                        <div class="contact"> 
                            <h4>CONTACT US</h4>   
                            <p>Call Us Today! (+234) 8033489796, (+234) 8182392013  <br/>
                                Send Us a mail at: samsonye11@yahoo.com </p>
                        </div>
                    </li>
                    <li>
                        <div class="contact1">
                            <h4>RIVERS STATE, NIGERIA</h4>
                            <p>UZODINMA, SAMONYE & CO.
                                (CHARTERED ACCOUNTANTS)
                                24 IKWERRE ROAD
                                PORT HARCOURT
                                RIVERS STATE
                            </p>
                            <h5>HEAD OFFICE</h5>
                        </div>   
                    </li>
                    
                    
                </ul>   
        </div>
        
        </Container>
    )
}

export default ContactPage