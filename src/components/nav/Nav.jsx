import React from 'react'
import './nav.css'
import {AiTwotoneHome} from "react-icons/ai"
import {FaUserGraduate} from "react-icons/fa"
import {FaBookReader} from "react-icons/fa"
import {RiServiceFill} from "react-icons/ri"
import {MdOutlineConnectWithoutContact} from "react-icons/md"
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href= "#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}><AiTwotoneHome></AiTwotoneHome></a>
      <a href= "#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FaUserGraduate></FaUserGraduate></a>
      <a href= "#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaBookReader></FaBookReader></a>
      <a href= "#services" onClick={() => setActiveNav('#services')} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill></RiServiceFill></a>
      <a href= "#contact" onClick= {() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdOutlineConnectWithoutContact></MdOutlineConnectWithoutContact></a>
    </nav>
  )
}

export default Nav;