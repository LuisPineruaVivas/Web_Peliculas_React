import './ImagesSwiper.css';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination } from 'swiper/modules';

function ImagesSwiper({slides}) {
  return (
    <>
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="imagesSwiper">
        {
            slides.filter(slide => slide.file_path).slice(0, 20).map((slide, index) => (
                <SwiperSlide key={index}>
                  <img src={"https://image.tmdb.org/t/p/w1280"+slide.file_path} alt={slide.id} />
                </SwiperSlide>
              ))
        }
      </Swiper>
    </>
  );
}

export default ImagesSwiper;