import React, { useState, useEffect } from 'react'
import './trend.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import TrendCard from './TrendCard'
import { get } from '../data/httpClient'

function Trend({ item, title, type }) {
    const [slides, setSlides] = useState([]);

    useEffect(() => {
        const fetchMovies = () => {
             get(`/${type}/${item}`).then(data => setSlides(data.results))};
        fetchMovies();

    }, [item, type]);

  return (
    <section id="trend" className='trend'>
        <div className='container-fluid'>
            <div className="row">
                <h4 className='section-title'> {title} </h4>
            </div>
            <div className="row">
                <Swiper
                breakpoints={{
                    320:{
                        slidesPerView:1,
                        spaceBetween:20
                    },
                    480:{
                        slidesPerView:3,
                        spaceBetween:20,
                    },
                    640:{
                        slidesPerView:4,
                        spaceBetween:20
                    },
                    992:{
                        slidesPerView:6,
                        spaceBetween:20
                    }
                }}
                spaceBetween={20}
                autoplay={{
                    delay:2500,
                    disableOnInteraction:false
                }}
                slidesPerView={'auto'}

                modules={{Autoplay}}
                className='trendSwiper'
                >
                    {
                        slides && slides.length > 0 && slides.map(slide => (
                            <SwiperSlide key={slide.id}>
                                <TrendCard slide={slide} type={type}/>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Trend