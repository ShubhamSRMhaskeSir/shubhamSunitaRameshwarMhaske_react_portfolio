import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
    return ( < section id = "experience" >
        <h5 > What Skills I Have </h5> 
        <h2 > My Experience </h2>

        <div className = "container experience__container" >
        <div className = "experience__frontend" >
        <h3 > Frontend Developement </h3>  
        <div className = "experience__content" >
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div >
        <h4 > HTML5 </h4>  
        <small className = 'text-light' > Intermediate </small>  
        </div> 
        </article>  
        <article className = 'experience__details'>
        <BsPatchCheckFill />
        <div>
        <h4> CSS3 </h4>  <small className = 'text-light' > Intermediate </small>  
        </div> 
        </article>  
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4> JavaScript </h4>  
        <small className = 'text-light' > Beginner </small>  
        </div > 
        </article>  
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4> Bootstrap </h4>  
        <small className = 'text-light' > Beginner </small>   
        </div>
         </article>  
         <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4> React </h4>  
        <small className = 'text-light' > Beginner </small>  
        </div> 
        </article>   
        </div> 
        </div> { / * END OF FRONTEND * / }

        <div className = "experience__backend" >
        <h3 > Backend Developement </h3>  
        <div className = "experience__content" >
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4 > MySQL </h4>  
        <small className = 'text-light' > Intermediate </small>  
        </div>
        </article>  
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4> Python </h4>  
        <small className = 'text-light' > Beginner </small>  
        </div> 
        </article>  
        <article className = 'experience__details'>
        <BsPatchCheckFill />
        <div>
        <h4> PHP </h4>  
        <small className = 'text-light' > Beginner </small>  
        </div>
        </article>  
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>

        </div>  
        </article > 
        <article className = 'experience__details' >
        <BsPatchCheckFill />
        <div>
        <h4> C++ </h4>  
        <small className = 'text-light'> Beginner </small>  
        </div>
        </article>   
        </div> 
        </div>  
        </div > 
        </section>
    )
}

export default Experience