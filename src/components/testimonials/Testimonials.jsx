import React from 'react';
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'

// import swiper core and required modules
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// install swiperr modules
SwiperCore.use([Pagination]);

const data = [
    {
        avatar: AVATAR1,
        name: 'Shubham',
        review: 'shubham'
    },
    {
        avatar: AVATAR2,
        name: 'Shubham',
        review: 'shubham'
    },
    {
        avatar: AVATAR3,
        name: 'Shubham',
        review: 'shubham'
    },
    {
        avatar: AVATAR4,
        name: 'Shubham',
        review: 'shubham'
    }
]

const Testimonials = () => {
    return (
        <section id = 'testimonials'>
            <h5> Review From Clients</h5>
            <h2> Testimonials </h2>

            <Swiper className="container testimonials__container"
            //install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination= {{ clickable: true }}>
                {
                    data.map(({avatar, name, review}, index) => {
                        return(
                            <SwiperSlide key = {index} className="testimonial">
                            <div className="client__avatar">
                                <img src= {avatar} alt="" />    
                            </div>
                            <h5 className='client__name'>{name}</h5>
                            <small className='client__review'>{review}</small>    
                            </SwiperSlide>
                        );
                    }
                    )
                }
            </Swiper>
        </section>
    ); 
};

export default Testimonials;