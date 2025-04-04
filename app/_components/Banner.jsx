"use client";

import React, { UserRef, UseStage } from "react";
import Image from "next/image"; // Image bileşeni doğru şekilde import edildi.
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Navigation için Swiper CSS

const Banner = () => {
    return (
        <>
            <div className="container max-w-none">
                <Swiper className="mySwiper bg-gray-100" style={{ height: "80vh" }}>
                    {/* Text ve Image iki ayrı columnda */}
                    {/* Slide 1 */}
                    <SwiperSlide className="text-black text-center flex items-center justify-center md:pt-5 md:bt-10">
                        <div className="container h-full">
                            <div className="grid grid-cols-2 h-full">
                                {/* Left Column h1 and p */}
                                <div className="flex flex-col items-center justify-center">
                                    <h1 className="text-8xl font-bold py-4 tracking-wide text-center">You make StrayKids STAY</h1>
                                    <p className="py-4 text-center">StrayKids Everywhere All Around The World!</p>
                                </div>
                                {/* Left Column h1 and p End */}

                                {/* Right column Image */}
                                <div className="flex items-center justify-center">
                                    <Image src="/skz_sty/skz_concert.png"
                                        alt="Stray Kids Concert"
                                        width={5500}
                                        height={900}
                                        className="rounded-lg shadow-lg"
                                    />
                                </div>
                                {/* Right column Image End */}
                            </div>
                        </div>
                    </SwiperSlide>
                    {/* Slide 1 End */}

                    {/* Slide 2 */}
                    <SwiperSlide className="text-black text-center flex items-center justify-center md:pt-5 md:bt-10">
                        <div className="container h-full">
                            <div className="grid grid-cols-2 h-full">
                                {/* Left Column h1 and p */}
                                <div className="flex flex-col items-center justify-center relative">
                                    <h1 className="text-8xl font-bold">SKZOO {" "}</h1>
                                    <p className="py-4">Wolf Chan, Leebit, Dwaekki, Jiniret, Han Quokka, BbokAri, PuppyM, FoxI.NY</p>

                                    {/* SKZOO Görselleri */}
                                    <div className="absolute w-full h-full">
                                        {/* Üst grup görseller */}
                                        <div className="absolute top-40 w-full flex justify-center gap-4 -translate-y-20">
                                            <Image
                                                src="/skz_sty/wolf_chan.png"
                                                alt="Wolf Chan"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/leebit.png"
                                                alt="Leebit"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/dwaekki.png"
                                                alt="Dwaekki"
                                                width={80}
                                                height={60}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/jiniret.png"
                                                alt="Jiniret"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </div>
                                        {/* Alt grup görseller */}
                                        <div className="absolute bottom-40 w-full flex justify-center gap-4 translate-y-20">
                                            <Image
                                                src="/skz_sty/han_quokka.png"
                                                alt="Han Quokka"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/bbokkari.png"
                                                alt="Bbokkari"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/puppy_m.png"
                                                alt="Puppy M"
                                                width={80}
                                                height={80}
                                                className="hover:scale-110 transition-transform"
                                            />
                                            <Image
                                                src="/skz_sty/foxi_ny.png"
                                                alt="Foxi Ny"
                                                width={95}
                                                height={95}
                                                className="hover:scale-110 transition-transform"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/* Left Column h1 and p End */}

                                {/* Right Column Image */}
                                <div className="flex items-center justify-center">
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