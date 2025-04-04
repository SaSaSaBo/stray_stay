"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { useTheme } from "next-themes";

const skzoos = [
  {
    name: "Wolf Chan",
    description:
      "Leader of Stray Kids SKZOO, a fierce wolf who leads the pack.",
    image: "/skz_sty/wolf_chan.png", // Bang Chan'in SKZOO karakteri
  },
  {
    name: "Leebit",
    description:
      "Professional dancer and vocalist, a cute bunny with amazing moves.",
    image: "/skz_sty/leebit.png", // Lee Know'un SKZOO karakteri
  },
  {
    name: "Dwaekki",
    description:
      "Rapper and producer, a tough yet adorable bear with an unstoppable beat.",
    image: "/skz_sty/dwaekki.png", // Changbin'in SKZOO karakteri
  },
  {
    name: "Jiniret",
    description:
      "Dancer and rapper, a graceful yet playful owl with the sharpest moves.",
    image: "/skz_sty/jiniret.png", // Hyunjin'in SKZOO karakteri
  },
  {
    name: "Han Quokka",
    description:
      "Rapper and vocalist, a cheerful and lovable quokka full of energy.",
    image: "/skz_sty/han_quokka.png", // Han'in SKZOO karakteri
  },
  {
    name: "Bbokkari",
    description:
      "Dancer and rapper, a cute yet mischievous little fox with a big heart.",
    image: "/skz_sty/bbokkari.png", // Felix'in SKZOO karakteri
  },
  {
    name: "PuppyM",
    description:
      "Main vocalist, a sweet and loyal puppy who brightens everyone's day.",
    image: "/skz_sty/puppy_m.png", // Seungmin'in SKZOO karakteri
  },
  {
    name: "FoxI.NY",
    description:
      "Vocalist and maknae, a cute little fox with an innocent yet bold spirit.",
    image: "/skz_sty/foxi_ny.png", // I.N'in SKZOO karakteri
  },
];

const SkzooCard = ({ name, description, image }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDarkMode = mounted && theme === "dark";

  return (
    <div
      className={`p-6 rounded-lg shadow-lg text-center transition-colors duration-300 ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-xl font-bold">{name}</h2>
      <p className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
        {description}
      </p>
      <img
        src={image}
        alt={name}
        className="w-full h-auto max-h-64 object-cover mx-auto my-4"
      />
    </div>
  );
};

const Skzoo = () => {
  return (
    <div className="container max-w-none py-8">
      <h1 className="text-4xl font-bold text-center">SKZOO</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {skzoos.map((skzoo, index) => (
          <SwiperSlide key={index}>
            <SkzooCard {...skzoo} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Skzoo;
