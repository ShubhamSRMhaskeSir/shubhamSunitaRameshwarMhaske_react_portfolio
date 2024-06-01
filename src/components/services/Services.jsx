import React from 'react'
import './services.css'
import { GiCheckMark } from 'react-icons/gi'

const Services = () => {
    return ( <section id = 'services' >
        <h5> What I Offer </h5> 
        <h2> Services </h2>    

        <div className = "container services__container" >
        <article className = "services" >
        <div className = "service__head" >
        <h3> UI / UX Design </h3> 
        </div>

        <ul className = 'service__list' >
        <li>
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        <li >
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        <li>
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        </ul> 
        </article> 
        { /*------------- END OF UI/UX---------- */ } 
        <article className = "services" >
        <div className = "service__head" >
        <h3> WEB DEVELOPMENT </h3> 
        </div>

        <ul className = 'service__list' >
        <li>
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        <li>
        <GiCheckMark className = 'service__list-icon' />        
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        </ul> 
        </article> 
        
        { /*-------------  End Of WEB DEVELOPMENT---------- */ } 
        <article className = "services" >
        <div className = "service__head" >
        <h3> Content Creation </h3>
        </div>

        <ul className = 'service__list' >
        <li>
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        <li>
        <GiCheckMark className = 'service__list-icon' />
        <p> All the ui / ux design website is availaible </p> 
        </li> 
        </ul> 
        </article> 
        
        { /*------------- End of  Content Creation---------- */ }

        </div> 
        </section>
    )
}

export default Services