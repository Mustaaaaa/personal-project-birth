
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import NavbarFoto from '../foto/NavbarFoto'

import F1 from '../../Assets/noi/2024/Immagine 2024-09-05 014308.png'
import F2 from '../../Assets/noi/2024/Immagine 2024-09-05 014451.png'
import F3 from '../../Assets/noi/2024/IMG-20240905-WA0030.jpg'
import F4 from '../../Assets/noi/2024/IMG-20240905-WA0031.jpg'
import F5 from '../../Assets/noi/2024/IMG-20240905-WA0032.jpg'
import F6 from '../../Assets/noi/2024/IMG-20240905-WA0033.jpg'
import F7 from '../../Assets/noi/2024/IMG-20240905-WA0034.jpg'
import F8 from '../../Assets/noi/2024/IMG-20240905-WA0035.jpg'
import F9 from '../../Assets/noi/2024/IMG-20240905-WA0036.jpg'
import F10 from '../../Assets/noi/2024/IMG-20240905-WA0037.jpg'
import F11 from '../../Assets/noi/2024/IMG-20240905-WA0038.jpg'
import F12 from '../../Assets/noi/2024/IMG-20240905-WA0039.jpg'
import F13 from '../../Assets/noi/2024/Immagine 2024-09-05 015429.png'
import F14 from '../../Assets/noi/2024/Immagine 2024-09-05 015603.png'
import F15 from '../../Assets/noi/2024/Immagine 2024-09-05 015704.png'
import F16 from '../../Assets/noi/2024/Immagine 2024-09-05 015754.png'
import F17 from '../../Assets/noi/2024/Immagine 2024-09-05 015855.png'
import F18 from '../../Assets/noi/2024/Immagine 2024-09-05 020027.png'
import F19 from '../../Assets/noi/2024/Immagine 2024-09-05 020242.png'
import F20 from '../../Assets/noi/2024/Immagine 2024-09-05 020344.png'
import F21 from '../../Assets/noi/2024/Immagine 2024-09-05 020446.png'





import '../../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ImageCarousel = () => {
    return (
        <div>
            <div className='relative container'>
                <div className='absolte top-1'>
                    <NavbarFoto />
                </div>
            </div>
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
                    <p className='pt-10 pl-5'>Sempre sexy noi</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F1} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Il duo più bello</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F2} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui staaavamo cercaando di scegliere gli sfondi per i nostri telefoni, avevamo sccelto quello di stitch</p>
                    <div className='flex justify-center h-[450px] mt-10 flex-row flex-wrap'>
                        <img src={F3} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F4} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F5} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F6} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F7} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                    </div>
                    <div className='flex justify-center h-[450px] mt-10 flex-row flex-wrap'>
                        <img src={F8} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F9} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F10} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F11} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                        <img src={F12} alt="fe" className="object-cover object-top max-w-[400px] max-h-[400px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Belli come sempre</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                    <img src={F13} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>I buongiorni quelli belli</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                    <img src={F14} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Se siaamo stati insieme a capodanno, è destino staarlo tutto l'anno hahahaha</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F15} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Figona pt.3</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F16} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Una cosa che non abbiamo mai fatto è quella di dormire insieme in video, potevaamo farlo cavolo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F17} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>La nostra ultima vacanzetta insieme</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F18} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Belli come il sole</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F19} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Primo giorno in cui abbiamo finalmente dormito insieme a casa tua</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F20} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>La nostra prima disavventura insieme, mammaa mia aavevo il cuore in gola</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F21} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ImageCarousel;

