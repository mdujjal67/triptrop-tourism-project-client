// import React, { useRef, useState } from 'react';
// import {Swiper} from React components
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/bundle'
// import 'swiper/css/navigation';


// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import BannerContent from './BannerContent';

const SwiperSlider = () => {
    return (
        <div className='container mx-auto'>
            <Swiper spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide className=''>
                    <div className=''>
                        <img className='h-[380px] lg:h-[500px] relative rounded-2xl w-full' src="https://i.ibb.co/Gs2vdC6/bangladesh-242450-1920.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[380px] lg:h-[500px] rounded-2xl w-full' src="https://i.ibb.co/m0zmJZn/thailand-2707555-1920.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[380px] lg:h-[500px] rounded-2xl w-full' src="https://i.ibb.co/w6JL8v1/cliff-5954980-1920.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <img className='h-[380px] lg:h-[500px] bg-blend-overlay rounded-2xl w-full' src="https://i.ibb.co/wM5jmM1/sunset-2983614-1920.jpg" alt="property-image" />
                        <div className='absolute top-[30%]'>
                            <BannerContent></BannerContent>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SwiperSlider;