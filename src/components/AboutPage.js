import React from 'react'
import './AboutPage.css'
import { Container } from 'reactstrap'

const AboutPage = () => {
    return (
        <div className="aboutPage p-5">
            <Container>
                <div id="about">
                    <h2>What are we about?</h2><br />
                    
                    <p>Uzodinma, Samonye & Co (Chartered Accountants, Tax and Management Consultants) is a professional firm of Chartered Accountants, appropriately licensed in 1997 by the Institute of Chartered Accountants of Nigeria to practice professional accountancy in the Federal Republic of Nigeria. The firm presently operates from its Corporate Office, located at 24 Ikwerre Road, Sam Mbata Building Complex, Port Harcourt, Rivers State. It also maintains branch offices in Lagos, Abuja,  Akwa Ibom, Abia and Enugu state. The Firm is made up of experienced and professionally qualified Chartered Accountants; who have agreed to work as partners tmanage the firm. Prior to their practice; the partners, had served in various management positions in industry and banks before their decision to go into private practice. It has a team of qualified and experienced staff that are used to carry out its services nationwide. The group aspires to be recognized as an International Firm of Accountants, Tax and Management Consultants, to provide excellent practice internationally.
                    </p>
                </div>
        
                <div id="CS">
                    
                    <div id="goal">
                        <h2>Company Statement</h2><br />
                        <h3>MISSION</h3>
                        <p>” To be a foremost indigenous practicing firm with qualified and experienced partners and staff, modern technology and networks, to provide high level professional services to clients in order to add value, secure assets, improve efficiency, productivity and profitability; within a framework of established and acceptable standard practice.”
                        </p>
                        <h3>VISION</h3>
                        <p>” To professionally manage an indigenous Accountancy Firm of note that will satisfy the interest of local and international clients.”</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default AboutPage