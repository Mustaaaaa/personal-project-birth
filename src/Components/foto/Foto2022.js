
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import NavbarFoto from '../foto/NavbarFoto'

import F1 from '../../Assets/noi/2022/IMG-20240905-WA0022.jpg'
import F2 from '../../Assets/noi/2022/IMG-20240905-WA0023.jpg'
import F3 from '../../Assets/noi/2022/IMG-20240905-WA0027.jpg'
import F4 from '../../Assets/noi/2022/IMG-20240905-WA0029.jpg'
import F5 from '../../Assets/noi/2022/IMG-20240905-WA0026.jpg'
import F6 from '../../Assets/noi/2022/IMG-20240905-WA0028.jpg'
import F7 from '../../Assets/noi/2022/IMG-20240905-WA0024.jpg'
import F8 from '../../Assets/noi/2022/IMG-20240905-WA0025.jpg'
import F9 from '../../Assets/noi/2022/Immagine 2024-09-05 013427.png'
import F10 from '../../Assets/noi/2022/Immagine 2024-09-05 013554.png'
import F11 from '../../Assets/noi/2022/Immagine 2024-09-05 013658.png'
import F12 from '../../Assets/noi/2022/Immagine 2024-09-05 013758.png'
import F13 from '../../Assets/noi/2022/Immagine 2024-09-05 013929.png'





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
                    <p className='pt-10 pl-5'>Qui mentre flexaavi il tuo outfit, figonaaa</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F1} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui eravamo nel baar di Melzo, non mi ricordo più come si chiama</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F2} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Questo era ail periodo in cui avevi il covid e ci mandavamo un botto di foto simili a questa</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F3} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui ti avevo dato il mio orsacchiotto con su il mio profumo sempre perchè eri risultata positiva al covid, bei tempi.</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F4} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Ovviamente ti viziavo sempre pure con il covid hahahaha</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F5} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Quando ero venuto a trovarti.</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F6} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Prima cena e foto di te dopo il covid</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F7} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                        <img src={F8} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Figona pt.2</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F9} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Ovviamente i cioccolatini per sanvalentino non potevano mancare</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F10} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Skincaare timeeee</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F11} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Ricordi di questa storia? avevamo appena fatto i 7 mesi</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F12} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui stavi cagando altro che maschera hahaha</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F13} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default ImageCarousel;

