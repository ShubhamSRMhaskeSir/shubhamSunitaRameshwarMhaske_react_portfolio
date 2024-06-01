import React from 'react'
import './header.css'
import CTA from './CTA'
import SHUBHAM from '../../assets/shubham.png'
import HeaderSocial from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className = "container header_container">
        <h5>Hello I 'am</h5>
        <h1>Shubham Sunita Rameshwar Mhaske</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocial/>
        

        <div className='me'>
          <img src = {SHUBHAM} alt="shubham"/>
        </div>

        <a href="#contact" className = 'scroll__down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header;


