"use client";

import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { Instagram } from "@deemlol/next-icons";
import { useTheme } from "next-themes";

const members = [
  {
    name: "BangChan",
    description: "Leader, Producer",
    image: "/skz_sty/bc1.png",
    instagram: "https://www.instagram.com/gnabnahc/",
  },
  {
    name: "LeeKnow",
    description: "Professional Dancer, Vocalist",
    image: "/skz_sty/lk1.png",
    instagram: "https://www.instagram.com/t.leeknowsaurus/",
  },
  {
    name: "Changbin",
    description: "Rapper, Producer",
    image: "/skz_sty/cb1.png",
    instagram: "https://www.instagram.com/jutdwae/",
  },
  {
    name: "Hyunjin",
    description: "Dancer, Rapper",
    image: "/skz_sty/hyj1.png",
    instagram: "https://www.instagram.com/hynjinnnn/",
  },
  {
    name: "Han",
    description: "Rapper, Vocalist",
    image: "/skz_sty/hj1.png",
    instagram: "https://www.instagram.com/_doolsetnet/",
  },
  {
    name: "Felix",
    description: "Dancer, Rapper",
    image: "/skz_sty/fx1.png",
    instagram: "https://www.instagram.com/yong.lixx/",
  },
  {
    name: "Seungmin",
    description: "Main Vocalist",
    image: "/skz_sty/sm1.png",
    instagram: "https://www.instagram.com/miniverse.___/",
  },
  {
    name: "I.N",
    description: "Vocalist, Maknae",
    image: "/skz_sty/in1.png",
    instagram: "https://www.instagram.com/i.2.n.8/",
  },
];

const MemberCard = ({ name, description, image, instagram }) => {
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
      <a href={instagram} target="_blank" rel="noopener noreferrer">
        <button
          className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
            isDarkMode ? "bg-white text-black" : "bg-black text-white"
          }`}
        >
          <Instagram size={24} color={isDarkMode ? "#000000" : "#FFFFFF"} />
        </button>
      </a>
    </div>
  );
};

const Members = () => {
  return (
    <div className="container max-w-none py-8">
      <h1 className="text-4xl font-bold text-center">Members</h1>
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
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <MemberCard {...member} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Members;
