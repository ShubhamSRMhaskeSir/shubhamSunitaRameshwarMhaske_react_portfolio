import React from 'react'
import './footer.css'
import { ImFacebook2 } from 'react-icons/im'
import { FaInstagramSquare } from 'react-icons/fa'
import { FaTwitterSquare} from 'react-icons/fa'

const Footer = () => {
    return ( 
        <footer>
            <a href="#footar" className='footer__logo'> Shubham </a>

            <ul className='permalinks'>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#testimonials">Testimonials</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://facebook.com"><ImFacebook2/></a>
                <a href="https://instagram.com"><FaInstagramSquare/></a>
                <a href="https://twiteer.com"><FaTwitterSquare/></a>
            </div>

            <div className="footer__copyright">
                <small> SHUBHAM Portfolio. All right Reserved</small>
            </div>
        </footer>  
    )
}

export default Footer