import React from 'react'
import { Link } from 'react-router-dom'
import './social.css'
const Social = () => {
    return(
        <div className="social">
            <ul className="my-4 sci">
                <li className="mr-3 ml-0">
                    <Link to="#"><i className="fab fa-facebook mr-2"></i>facebook</Link>
                </li>
                <li className="mr-3">
                    <Link to="#"><i className="fab fa-twitter mr-2"></i>twitter</Link>
                </li>
                <li className="mr-3">
                    <Link to="#"><i className="fab fa-skype mr-2"></i>skype</Link>
                </li>
                <li className="mr-3">
                    <Link to="#"><i className="fab fa-instagram mr-2"></i>instagram</Link>
                </li>
                <li className="mr-3">
                    <Link to="#"><i className="fab fa-youtube mr-2"></i>youtube</Link>
                </li>
            </ul>
        </div>
        
    )
}

export default Social