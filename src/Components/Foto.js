import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarFoto from './foto/NavbarFoto'

import '../App.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const ImageCarousel = () => {
    return (
            <NavbarFoto />
        );
};

export default ImageCarousel;
