import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import F1 from '../Assets/noi/IMG-20240904-WA0108.jpg'
import F2 from '../Assets/noi/IMG-20240904-WA0109.jpg'
import F3 from '../Assets/noi/IMG-20240904-WA0110.jpg'
import F4 from '../Assets/noi/IMG-20240904-WA0112.jpg'
import F5 from '../Assets/noi/IMG-20240904-WA0113.jpg'
import F6 from '../Assets/noi/IMG-20240904-WA0114.jpg'
import F7 from '../Assets/noi/IMG-20240904-WA0115.jpg'
import F8 from '../Assets/noi/IMG-20240904-WA0116.jpg'
import F9 from '../Assets/noi/IMG-20240904-WA0117.jpg'
import F10 from '../Assets/noi/IMG-20240904-WA0118.jpg'
import F11 from '../Assets/noi/IMG-20240904-WA0119.jpg'
import F12 from '../Assets/noi/IMG-20240904-WA0120.jpg'
import F13 from '../Assets/noi/IMG-20240904-WA0121.jpg'
import F14 from '../Assets/noi/IMG-20240904-WA0122.jpg'
import F15 from '../Assets/noi/IMG-20240904-WA0123.jpg'
import F16 from '../Assets/noi/IMG-20240904-WA0124.jpg'
import F17 from '../Assets/noi/IMG-20240904-WA0125.jpg'
import F18 from '../Assets/noi/IMG-20240904-WA0126.jpg'
import F19 from '../Assets/noi/IMG-20240904-WA0127.jpg'
import F20 from '../Assets/noi/IMG-20240904-WA0128.jpg'
import F21 from '../Assets/noi/IMG-20240904-WA0129.jpg'
import F22 from '../Assets/noi/IMG-20240904-WA0130.jpg'
import F23 from '../Assets/noi/IMG-20240904-WA0131.jpg'
import F24 from '../Assets/noi/IMG-20240904-WA0132.jpg'
import F25 from '../Assets/noi/IMG-20240904-WA0133.jpg'
import F26 from '../Assets/noi/IMG-20240904-WA0134.jpg'
import F27 from '../Assets/noi/IMG-20240904-WA0135.jpg'
import F28 from '../Assets/noi/IMG-20240904-WA0136.jpg'
import F29 from '../Assets/noi/IMG-20240904-WA0137.jpg'
import F30 from '../Assets/noi/IMG-20240904-WA0138.jpg'
import F31 from '../Assets/noi/IMG-20240904-WA0139.jpg'
import F32 from '../Assets/noi/IMG-20240904-WA0140.jpg'
import F33 from '../Assets/noi/IMG-20240904-WA0141.jpg'
import F34 from '../Assets/noi/IMG-20240904-WA0142.jpg'
import F35 from '../Assets/noi/IMG-20240904-WA0143.jpg'
import F36 from '../Assets/noi/IMG-20240904-WA0144.jpg'
import F37 from '../Assets/noi/IMG-20240904-WA0145.jpg'
import F38 from '../Assets/noi/IMG-20240904-WA0146.jpg'
import F39 from '../Assets/noi/IMG-20240904-WA0147.jpg'
import F40 from '../Assets/noi/IMG-20240904-WA0148.jpg'
import F41 from '../Assets/noi/IMG-20240904-WA0149.jpg'
import F42 from '../Assets/noi/IMG-20240904-WA0150.jpg'
import F43 from '../Assets/noi/IMG-20240904-WA0151.jpg'
import F44 from '../Assets/noi/IMG-20240904-WA0152.jpg'
import F45 from '../Assets/noi/IMG-20240904-WA0153.jpg'
import F46 from '../Assets/noi/IMG-20240904-WA0154.jpg'
import F47 from '../Assets/noi/IMG-20240904-WA0155.jpg'
import F48 from '../Assets/noi/IMG-20240904-WA0156.jpg'
import F49 from '../Assets/noi/IMG-20240904-WA0157.jpg'
import F50 from '../Assets/noi/IMG-20240904-WA0158.jpg'
import F51 from '../Assets/noi/IMG-20240904-WA0159.jpg'
import F52 from '../Assets/noi/IMG-20240904-WA0160.jpg'
import F53 from '../Assets/noi/IMG-20240904-WA0161.jpg'
import F54 from '../Assets/noi/IMG-20240904-WA0162.jpg'
import F55 from '../Assets/noi/IMG-20240904-WA0163.jpg'
import F56 from '../Assets/noi/IMG-20240904-WA0164.jpg'
import F57 from '../Assets/noi/IMG-20240904-WA0165.jpg'
import F58 from '../Assets/noi/IMG-20240904-WA0166.jpg'
import F59 from '../Assets/noi/IMG-20240904-WA0167.jpg'


import '../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ImageCarousel = () => {
    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide>
                <div className='flex justify-center h-[900px] mt-10'>
                    <img src={F1} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F2} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F3} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F4} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F5} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F6} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F7} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F8} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F9} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F10} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F11} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F12} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F13} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F14} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F15} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F16} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F17} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F18} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F19} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F20} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F21} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F22} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F23} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F24} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F25} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F26} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F27} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F28} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F29} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F30} alt="F30" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F31} alt="F31" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F32} alt="F32" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F33} alt="F33" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F34} alt="F34" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F35} alt="F35" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F36} alt="F36" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F37} alt="F37" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F38} alt="F38" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F39} alt="F39" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F40} alt="F40" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F41} alt="F41" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F42} alt="F42" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F43} alt="F43" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F44} alt="F44" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F45} alt="F45" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F46} alt="F46" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F47} alt="F47" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F48} alt="F48" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F49} alt="F49" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F50} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F51} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F52} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F53} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F54} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F55} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F56} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F57} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F58} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className='flex justify-center'>
                    <img src={F59} alt="F50" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default ImageCarousel;
