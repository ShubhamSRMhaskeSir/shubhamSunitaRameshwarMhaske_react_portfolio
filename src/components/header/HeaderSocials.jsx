import React from "react";
import { BsLinkedin } from "react-icons/bs"
import { FaGithub } from "react-icons/fa"
import { BiMailSend } from "react-icons/bi"


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/feed/"><BsLinkedin></BsLinkedin></a>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/shubhamsrmhaske/C2C_COREJAVA.git"><FaGithub></FaGithub></a>
      <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/u/0/#inbox"><BiMailSend></BiMailSend></a>
    </div>
  )
}

export default HeaderSocials;