"use client";

import React, { UserRef, UseStage } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper"; // Navigation modülünü de ekledik
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Navigation için Swiper CSS

const Banner = () => {
    return (
        <>
            <div className="container">
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true} // Ortalamayı açtık
                    autoplay={{ delay: 2500, disableOnInteraction: false, }} // Otomatik geçiş
                    pagination={{ clickable: true, }}
                    // navigation={true}            
                    modules={[Autoplay, Pagination]} // Kullanılan modüller
                    className="mySwiper"
                >
                    <SwiperSlide>BangChan</SwiperSlide>
                    <SwiperSlide>LeeKnow</SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Banner;
