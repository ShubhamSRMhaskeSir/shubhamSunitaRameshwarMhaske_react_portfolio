import React from 'react'
import './contact.css'
import { MdMarkEmailRead } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { FaWhatsappSquare } from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_11f4yc8', 'template_ijs8o1e', form.current, 'w6K5L4hRLz60d2Y-p')

        e.target.reset()

    };


    return (<section id = 'contact'>
        <h5> Get In Touch </h5> 
        <h2> Contact Me </h2>

        <div className = "container contact__container" >
        <div className = "contact__options" >
        <article className = "contact__option" >
        <MdMarkEmailRead className = 'contact__option-icon' />
        <h4 > Email </h4> 
        <h5 > shubhammhaske131@gmail.com </h5> 
        <a href = "https://mail.google.com/mail/u/1/#inbox?compose=new" target = "_blank" rel = "noreferrer" > Send a message </a> 
        </article> 
        <article className = "contact__option" >
        <RiMessengerLine className = 'contact__option-icon' />
        <h4 > Message </h4> 
        <h5 > Shubham Mhaske </h5> 
        <a href = "https://mbasic.facebook.com/home.php" target = "_blank" rel = "noreferrer" > Send a message </a> 
        </article> 
        <article className = "contact__option" >
        <FaWhatsappSquare className = 'contact__option-icon' />
        <h4 > WhatsApp </h4> 
        <h5 > 9665101062 </h5> 
        <a href = "https://api.whatsapp.com/send?phone+9665101062"
        target = "_blank"
        rel = "noreferrer" > Send a message </a> 
        </article> 
        </div> { /* END OF CONTACT OPTIONS */ } 
        <form ref = { form } onSubmit = { sendEmail } >
        <input type = "text"  name = "name"   placeholder = "Your Full Name"reuired />
        <input type = "email" name = "email" placeholder = "Your Email'reuired" />
        <textarea name = "message"rows ="7" placeholder = "Your Message'reuired" ></textarea> 
        <button type = "submit" className = "btn btn-primary" > send Message </button> 
        </form> 
        </div> 
        </section>
    )
}

export default Contact