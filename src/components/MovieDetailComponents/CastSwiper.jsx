import './CastSwiper.css';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { FreeMode} from 'swiper/modules';

function CastSwiper({slides}) {
  return (
    <>
    <Swiper
        slidesPerView={'auto'}
        spaceBetween={20}
        freeMode={true}
        modules={[FreeMode]}
        className="CastSwiper"
      >
        {
          slides.slice(0, 20).map(slide => (
            <SwiperSlide key={slide.id}>
              <img 
                src={slide.profile_path 
                      ? `https://image.tmdb.org/t/p/w500${slide.profile_path}` 
                      : '../images/no_user.jpg'} 
                alt={slide.name} 
              />
              <p>{slide.name}</p> 
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default CastSwiper