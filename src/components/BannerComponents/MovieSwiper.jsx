import './movieSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

function MovieSwiper({slides, slideChange}) {
  return (
    <>
    <Swiper
     effect={'coverflow'}
     grabCursor={true}
     centeredSlides={true}
     slidesPerView={'auto'}
     coverflowEffect={{
       rotate: 50,
       stretch: 0,
       depth: 100,
       modifier: 1,
       slideShadows: true,
     }}
     autoplay={{
      delay: 1500,
      disableOnInteraction: true,
    }}
     pagination={false}
     loop={true}

     modules={[Autoplay, EffectCoverflow, Pagination]}
    className='movieSwiper'
    >
        {
          slides.map(slide => (
            <SwiperSlide key={slide.id}>
              <img src={"https://image.tmdb.org/t/p/w300"+slide.poster_path} onClick={() => slideChange(slide.id)} alt="" />
            </SwiperSlide>
          ))
        }
    </Swiper>
    </>
  )
}

export default MovieSwiper