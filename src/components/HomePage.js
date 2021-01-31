import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Button } from 'reactstrap'
import './HomePage.css'

const HomePage = () => {
    return(
        <div>
            <div className="homepage">
                <Container className="bannerText">
                    <section>
                        <div className="bannerTextContent" >
                            <h2>Providing All Round Accounting Solution</h2>
                            <p className="mt-3">We assure you of our timely, professional and satisfactory completion of any assignment given to us.
                            We are here for you, No matter the accounting needs. </p>
                            <Link className="mr-3 mt-5" to="/services"><Button id="read-more">Find Out More</Button></Link>  
                        </div>
                        
                        
                        {/* <img src="/img/oil-and-gas-sector.svg" class="worker" /> */}
                    </section>
                </Container>
                
            </div>
            <Container className="bannerBody mt-5">
                <h4 className="hp_services_header">Services</h4>
                <div className="hp_services_body mt-3">
                    <div className="hp_services_items">
                        <i className="fas fa-book-reader"></i>
                        <h5 className="mt-4">Auditing And Assurance Services</h5>
                        <p>To carry out annual audits and corporate reporting services to our clients to provide assurance that their systems are operating effectively within a well controlled environment. </p>
                    </div>
                    <div className="hp_services_items">
                        <i className="fas fa-coins"></i>
                        <h5 className="mt-4">Accountancy Services</h5>
                        <p>We also provide various accounting services by well trained accounting professionals to our clients</p>
                    </div>
                    <div className="hp_services_items">
                        <i className="fas fa-chart-pie"></i>
                        <h5 className="mt-4">Taxation and Regulatory Services</h5>
                        <p>We provide various tax services to our clients aimed at reducing tax burden; as well as ensuring appropriate tax compliance.</p>
                    </div>
                    <div className="hp_services_items">
                        <i className="fas fa-file-alt"></i>
                        <h5 className="mt-4">Corporate & Documentation Services</h5>
                        <p>We provide various documentation services to our clients ensuring stress free and accurate documentation.</p>
                    </div>
                </div>
            </Container>
            <div className="industries">
                <Container className="mt-5 ">
                    <h4 className="hp_services_header">Industries</h4>
                    <div className="hp_services_body mt-3">
                        <div className="hp_services_items">
                            <i className="fas fa-wallet"></i>
                            <h5>Financial Sector</h5>
                            <p>We provide professional consulting services to financial institutions such as Banks of all kinds and other finance houses. </p>
                        </div>
                        <div className="hp_services_items">
                            <i className="fas fa-oil-can"></i>
                            <h5>Oil and Gas</h5>
                            <p>We also provide various accounting services, auditing, taxation and regulatory services to oil and gas companies and other oil servicing companies</p>
                        </div>
                        <div className="hp_services_items">
                            <i className="fas fa-users"></i>
                            <h5>Government and Public Sector</h5>
                            <p>Government establishments and the public sector are not left out as we aim at serving the general public.</p>
                        </div>
                        <div className="hp_services_items">
                            <i className="fas fa-industry"></i>
                            <h5>Consumer and Industrial Products</h5>
                            <p>Consumer and Industrial products sector are also covered by us from producer/manufacturers, wholesalers and retailers businesses. </p>
                        </div>
                        <div className="hp_services_items">
                            <i className="fas fa-fire"></i>
                            <h5>Energy Utilities and Mining</h5>
                            <p>We provide professional accountanting services and comnsultancy for clients in the Energy utilities and Mining sectors from the Energy generation, energy transmission and energy distribution and also mining of raw material such as coal, iron, tin etc</p>
                        </div>
                        <div className="hp_services_items">
                            <i className="fas fa-tractor"></i>
                            <h5>Agribusiness</h5>
                            <p>We provide various tax services, accounting service for agricultural business from small scale, medium scale to large scale businesses.</p>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
 
export default HomePage