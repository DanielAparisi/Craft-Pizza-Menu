import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'
import Logo from  './LogoPizza.png'



import slide_image_1 from '../icons/pizza-1.jpg';
import slide_image_2 from '../icons/pizza-2.jpg';
import slide_image_3 from '../icons/pizza-3.jpg';
import slide_image_4 from '../icons/pizza-4.jpg';
import slide_image_5 from '../icons/pizza-5.jpg';
import slide_image_6 from '../icons/pizza-6.jpg';
import slide_image_7 from '../icons/pizza-7.jpg';



export default function Slider () {

  return (

    <main className="wrapper">     
        <section className='MenuWrapper'>
             <img src={Logo} className='LogoImg' />
             <h3>Craft Pizza Menu</h3>
        </section>
            <div className="container">
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                spaceBetween={50}
                slidesPerView={3}
                loop={true}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                  nextEl: '.swiper-button-next',
                  prevEl: '.swiper-button-prev',
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
            <SwiperSlide>
              <img src={slide_image_1} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_2} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_3} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_4} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_5} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_6} alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={slide_image_7} alt="slide_image" />
            </SwiperSlide>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
          
            </div>
          </Swiper>
        </div> 
  </main>
   
  );
}