import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination, Autoplay} from 'swiper/modules';

// import { Swiper, SwiperSlide } from "swiper/react";

// Swiper CSS
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";

// import { Navigation, Pagination, Autoplay } from "swiper/modules";


import { banners } from "../../Utils/constants";

const BannerSlider = () => {

    return(
        <div className="w-full bg-white py-6">
            <div className="mx-auto px-4 ">
                <Swiper           
                    modules={[Navigation, Pagination, Autoplay]}
                    slidesPerView={3}
                    // centeredSlides={true}
                    
                    spaceBetween={20}
                    loop={true}
                    pagination = {{
                        clickable:true,

                        

                    }}
                    autoplay={{delay:2500,
                        disableOnInteraction:false
                    }}
                
                >
                {banners.map((banner,index)=>(
                    
                    <SwiperSlide key ={index}>
                        <img src={banner} alt={`Banner ${index+1}`} 
                        className="w-full h-75 rounded-xl object-cover" />
                    </SwiperSlide>

                ))}
                </Swiper>

            </div>
        </div>
    )
}

export default BannerSlider;

