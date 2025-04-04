"use client";

import React, { UserRef, UseStage } from "react";
import Image from "next/image"; // Image bileşeni doğru şekilde import edildi.
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper"; // Navigation modülünü de ekledik
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Navigation için Swiper CSS

const Banner = () => {
    return (
        <>
            <div className="container max-w-none">
                <Swiper className="mySwiper bg-gray-200">
                    {/* Text ve Image iki ayrı columnda */}
                    {/* Slide 1 */}
                    <SwiperSlide className="text-black text-center flex items-center justify-center md:pt-5 md:bt-10">
                        {/* StrayKids /} {/ Slide deneme texti */}
                        <div className="container">
                            <div className="grid grid-cols-2">
                                {/* Left Column h1 and p */}
                                <div className="">
                                    <h1 className="text-8xl font-bold py-4 tracking-wide">You make StrayKids STAY</h1>
                                    <p className="py-4">StrayKids Everywhere All Around The World!</p>
                                </div>
                                {/* Left Column h1 and p End */}

                                {/* Rigth column Image */}
                                <div className="">
                                    <Image src="/skz_sty/skz_concert.png"
                                        alt="Stray Kids Concert" // Next.js alt zorunlu
                                        width={5500} // Genişlik ve yükseklik belirtilmeli
                                        height={900}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                {/* Rigth column Image End */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide 1 End */}

                    {/* Slide 2 */}
                    <SwiperSlide className="text-black text-center flex items-center justify-center md:pt-5 md:bt-10">
                        <div className="container">
                            <div className="grid grid-cols-2">
                                {/* Left Column h1 and p */}
                                <div className="">
                                    <h1 className="text-8xl font-bold">SKZOO {" "}</h1>
                                    <p>Wolf Chan, Leebit, Dwaekki, Jiniret, Han Quokka, BbokAri, PuppyM, FoxI.NY</p>

                                    {/* Görselleri bu kısımda p etiketinin altında yerleştirdik */}
                                    <div className="relative mt-4">
                                        <Image
                                            src="/skz_sty/wolf_chan.png"
                                            alt="Wolf Chan"
                                            width={80}
                                            height={80}
                                            className="absolute left-15 top-5 transform -translate-x-10 "
                                        />
                                        <Image
                                            src="/skz_sty/leebit.png"
                                            alt="Leebit"
                                            width={80}
                                            height={80}
                                            className="absolute left-15 top-22 transform -translate-x-8 "
                                        />
                                        <Image
                                            src="/skz_sty/dwaekki.png"
                                            alt="Dwaekki"
                                            width={50}
                                            height={50}
                                            className="absolute left-55 transform -translate-x-6 "
                                        />
                                        <Image
                                            src="/skz_sty/jiniret.png"
                                            alt="Jiniret"
                                            width={80}
                                            height={80}
                                            className="absolute left-55 top-25 transform -translate-x-4 "
                                        />
                                        <Image
                                            src="/skz_sty/han_quokka.png"
                                            alt="Han Quokka"
                                            width={80}
                                            height={80}
                                            className="absolute left-95 transform translate-x-4 "
                                        />
                                        <Image
                                            src="/skz_sty/bbokkari.png"
                                            alt="Bbokkari"
                                            width={80}
                                            height={80}
                                            className="absolute left-95 top-25 transform translate-x-6 "
                                        />
                                        <Image
                                            src="/skz_sty/puppy_m.png"
                                            alt="Puppy M"
                                            width={80}
                                            height={80}
                                            className="absolute left-125 top-5 transform translate-x-8 "
                                        />
                                        <Image
                                            src="/skz_sty/foxi_ny.png"
                                            alt="Foxi Ny"
                                            width={95}
                                            height={95}
                                            className="absolute left-125 top-22 transform translate-x-10 "
                                        />
                                    </div>
                                </div>
                                {/* Left Column h1 and p End */}

                                {/* Right Column Image */}
                                <div className="">
                                    <Image
                                        src="/skz_sty/skzoo.png"
                                        alt="Stray Kids Concert"
                                        width={5495}
                                        height={600}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                {/* Right Column Image End */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide 2 End */}
                    {/* Text ve Image iki ayrı columnda Kısmının sonu */}
                </Swiper>
            </div>
        </>
    );
};

export default Banner;