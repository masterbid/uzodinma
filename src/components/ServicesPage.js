import React from 'react'
import './ServicesPage.css'
import { Container } from 'reactstrap'

const Services = () => {
    return (
        <Container className="mt-5">
            <h1>Services we render?</h1>
            <div class="services"> 

                <div className="service"> 
                    <h3>Auditing And Assurance Services</h3><br />
                    <p>To carry out annual audits and corporate reporting services to our clients to provide assurance that their systems are operating effectively within a well controlled environment. Our Audit and Assurance Services include: 
                        <ul>
                            <li>Preparation and publication of Annual Reports.</li>
                            <li>Establishment of internal control procedures.</li>
                            <li>Carrying out financial and other investigations. </li>
                            <li>Expediting</li>
                            <li>Financial Accounting.</li>
                            <li>Financial Statement audit</li>
                            <li>Internal auditing.</li>
                            <li>Regulatory compliance and reporting</li>
                            <li>Corporate Reporting improvements.</li>
                        </ul>      
                    </p>
                </div>
                <div className="service service-right">
                    <h3>Accountancy Services</h3><br />
                    <ul>
                        <li>System Design and Installation</li>
                        <li>Bank Reconciliation Services.</li>
                        <li>Forecasting of Financial Statements and Reports.</li>
                        <li>Fixed Assets Valuation and Accounting.</li>
                        <li>Issuance of Accountants Reports for listing purposes.</li>
                        <li>Salary Administration.</li>
                        <li>Computer Systems Design, Development and Implementation</li>
                        <li>Record Keeping and Maintenance</li>
                        <li>General Accountancy Services.</li>
                    </ul> 
                </div>
                <div className="service">
                    <h3> Taxation and Regulatory Services</h3><br />
                    <p>We provide various tax services to our clients aimed at reducing     tax burden; as well as ensuring appropriate tax compliance.
                    </p>
                    <ul>
                        <li>Tax Planning Services</li>
                        <li>With Holding Tax Administration </li>
                        <li>Companies Income Tax Management and Administration</li>
                        <li>Personal Income Tax Administration</li>
                        <li>PAYE, VAT, Withholding Tax Administration</li>
                        <li>Petroleum Profit Tax Administration and Management</li>
                        <li>General Tax Consultancy.</li>
                        <li>Transfer pricing.</li>
                        <li>Tax Training and structuring.</li>
                        <li>Tax Dispute resolution</li>
                        <li>Compliance and tax audit support services</li>
                        <li>Tax reporting and strategy.</li>
                    </ul>
                </div>        
                <div className="service">
                    <h3> Corporate & Documentation Services</h3><br />
                    <p>We provide various documentation services to our clients ensuring stress free and accurate documentation.
                    </p>
                    <ul>
                        <li>Company Registration and Incorporation</li>
                        <li>Filing of Annual Returns of Companies</li>
                        <li>DPR Registration and Renewal of Permits</li>
                        <li>Other Statutory documentation- NSITF, ITF, Pension etc</li>
                        <li>Secretarial Services (covering AGM, Board and Management Meetings)</li>
                        <li>Club, Society Registrations</li>
                        <li>Provision of in- house trainings</li>
                        <li>Organization of Seminars and Workshops</li>
                        <li>General Corporate Services</li>
                    </ul>
                </div>        
            </div> 
        </Container>
    )
}

export default Services