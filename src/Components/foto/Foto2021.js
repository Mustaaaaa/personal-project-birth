
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';
import NavbarFoto from '../foto/NavbarFoto'

import F1 from '../../Assets/noi/2021/IMG-20240904-WA0165.jpg'
import F2 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-04 ore 23.56.27_001a33ab.jpg'
import F3 from '../../Assets/noi/2021/IMG-20240904-WA0166.jpg'
import F4 from '../../Assets/noi/2021/IMG-20240904-WA0164.jpg'
import F5 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.03.43_b55243a4.jpg'
import F6 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.06.38_b436be31.jpg'
import F7 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.08.40_e2039590.jpg'
import F8 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.10.15_1fa6d35d.jpg'
import F9 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.13.06_00cb316f.jpg'
import F10 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.13.08_a4e4df67.jpg'
import F11 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.16.47_35f021be.jpg'
import F12 from '../../Assets/noi/2021/IMG-20240904-WA0156.jpg'
import F13 from '../../Assets/noi/2021/IMG-20240904-WA0154.jpg'
import F14 from '../../Assets/noi/2021/IMG-20240904-WA0157.jpg'
import F15 from '../../Assets/noi/2021/IMG-20240904-WA0159.jpg'
import F16 from '../../Assets/noi/2021/IMG-20240905-WA0010.jpg'
import F17 from '../../Assets/noi/2021/IMG-20240905-WA0006.jpg'
import F18 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.30.50_e4cd75f2.jpg'
import F19 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.33.01_29b5ddab.jpg'
import F20 from '../../Assets/noi/2021/Immagine WhatsApp 2024-09-05 ore 00.34.22_961eac6e.jpg'
import F21 from '../../Assets/noi/2021/IMG-20240904-WA0140.jpg'
import F22 from '../../Assets/noi/2021/IMG-20240904-WA0139.jpg'
import F23 from '../../Assets/noi/2021/IMG-20240904-WA0113.jpg'
import F24 from '../../Assets/noi/2021/IMG-20240904-WA0130.jpg'
import F25 from '../../Assets/noi/2021/IMG-20240904-WA0135.jpg'
import F26 from '../../Assets/noi/2021/IMG-20240904-WA0138.jpg'
import F27 from '../../Assets/noi/2021/IMG-20240905-WA0015.jpg'
import F28 from '../../Assets/noi/2021/IMG-20240905-WA0016.jpg'
import F29 from '../../Assets/noi/2021/IMG-20240905-WA0017.jpg'
import F30 from '../../Assets/noi/2021/IMG-20240905-WA0018.jpg'
import F31 from '../../Assets/noi/2021/IMG-20240905-WA0019.jpg'
import F32 from '../../Assets/noi/2021/IMG-20240905-WA0020.jpg'
import F33 from '../../Assets/noi/2021/IMG-20240905-WA0021.jpg'
import F34 from '../../Assets/noi/2021/IMG-20240904-WA0126.jpg'




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
                    <p className='pt-10 pl-5'>Il nostro primo pranzo insieme - Milano Duomo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F1} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Questo sguardo, questo maledetto sguardo...</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F2} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui è dove abbiamo visto il nostro primo tramonto insieme</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F3} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Il primo segno di "succhiotto", poi mi avevi sgridato perchè non volevi che lo vedesse tuo padre dato che non sapeva ancora nulla</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F4} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>La prima foto dei danni che facevano i tuoi fratelli hahahaha</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F5} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Un bacio dalla Marti del 2021</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F6} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Il vero primo succhiotto</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F7} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Questo era il mio stato il giorno prima che tu partissi per la spagna con Aya e Tamana, mi avevi fatto uscire in questo stato per un'abbraccio</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F8} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>15 luglio 2021 dov'è ci siamo sopprannominati e fotografati con il filtro dei clown hahaha, la tua non la trovo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F9} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Ricordi di Aya unicorno</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F10} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Prima foto di MACCHIAAAAAAAA</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F11} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Tu mentre ti trucchi per andare a lavorare al circo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F12} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>I miei metodi per cercare di fare colpo su di te nel 2021 hahaha</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F13} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Prima video chiamata insieme, quando eravamo lontani</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F14} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Robbyyyy ah no sei tu XD</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F15} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Primp mazzo di fiori, lo hai ancora?</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F16} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Tu che flexavi il tuo fisico</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F17} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Già eri innamorata</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F18} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>29/08/2021 la nostra cena appena tornata dal mare con il mazzo di fiori ovviamente</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F19} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                        <img src={F20} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>La cena da mia sorella</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F21} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Il dolce non può mancare mai ed è qui che ho perso la mia verginità</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F22} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Non mi ricordo dove, ma era periodo natalizio, ed era una specie di negozio in porta venezia</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F23} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Fondazione pradaa</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F24} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Molto buono, dovevamo ritornarci ma non ci è stata occasione</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F25} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Sushiiiiiii</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F26} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Ti ricordi di questo soprannome?</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F27} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>il mio regaalo di compleanno, non vedevo così l'ora di prenderlo che ho organizzzato la cena al kaiseki </p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F28} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>lo spettaacolo di Giacomoooo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F29} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Noi che cercavamo di vestirci simili per lo spettacolo di giacomo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F30} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                        <img src={F31} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Io che stavo cadendo</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F32} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>La prima volta a pattinare insieme</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F33} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <p className='pt-10 pl-5'>Qui mi ero fatto da Vignate a Caleppio a piedi dato che avevi litigato pesantemente con i tuoi il giorno di natale e volevo renderti felice</p>
                    <div className='flex justify-center h-[900px] mt-10'>
                        <img src={F34} alt="fe" className="object-cover object-top max-w-[800px] max-h-[800px]" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default ImageCarousel;

