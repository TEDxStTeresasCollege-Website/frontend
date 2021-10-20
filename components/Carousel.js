import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css"
import "swiper/css/zoom"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import "swiper/css/navigation"

// import Swiper core and required modules
import SwiperCore, {
    Zoom, EffectFade, Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Zoom, EffectFade, Autoplay, Pagination, Navigation]);

const Carousel = () => {
    const images = [
        "https://images.unsplash.com/photo-1516655855035-d5215bcb5604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60",
        "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60"
    ];
    return (
        <>
            <Swiper loop={true} slidesPerView={'auto'} spaceBetween={10} zoom={true} effect={'fade'} centeredSlides={true} autoplay={{
                "delay": 5000,
                "disableOnInteraction": true
            }} pagination={{
                "dynamicBullets": true,
                "clickable": true
            }} navigation={true} className="mySwiper">
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <div className="swiper-zoom-container">
                            <img className="block object-cover rounded" src={image} alt="test" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Carousel;