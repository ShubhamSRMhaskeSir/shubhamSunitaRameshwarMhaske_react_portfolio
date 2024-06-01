import React from 'react'
import './about.css'
import S from '../../assets/s.jpg'
 import { FaAward } from 'react-icons/fa'
 import { FaUsers } from 'react-icons/fa'
 import { FaFolderPlus } from 'react-icons/fa'
 const About = () => {
     return ( <section id = 'about' >
         <h5> Get to know </h5> 
         <h2> About Me </h2>

         <div className = "container about__container" >
            <div className = "about__me" >
                <div className = "about__me-images" >
                    <img src = {S} alt = "s" />
                </div> 
            </div> 

         <div className = "about__content" >
         <div className = "about__cards" >
         <article className = 'about__card' >
         <FaAward className = 'about__icons' />
         <h5> Experience </h5> 
         <small > 6 Month Experience </small> 
         </article>

         <article className = 'about__card' >
         <FaUsers className = 'about__icons' />
         <h5> Users </h5> 
         <small > 100 + WorldWide </small> 
         </article>

         <article className = 'about__card' >
         <FaFolderPlus className = 'about__icons' />
         <h5> Project </h5> 
         <small > 6 + completed </small> 
         </article>
         </div>

         <p> This all about My Personal and Professional experience 
            and MY all the Project which i have done is all mention here 
            and holl the details about the my clients.
            </p>

         <a href = "#contact"
         className = 'btn btn-primary' > Let 's Talk</a> 
         </div>

         </div>  
         </section>
     )
 }


 export default About