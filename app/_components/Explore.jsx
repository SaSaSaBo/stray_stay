"use client";

import React from "react";
import Image from "next/image"; // Image bileşeni doğru şekilde import edildi.

const Explore = () => {
  return (
    <>
        {/* h1 ve p kısmının bulunduğu div */}
        <div className="grid grid-cols-6 text-center py-10">
          <div className="col-start-2 col-span-4">
            <h1 className="text-6xl font-bold">Albums</h1>
            <p className="py-2 text-gray-500 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, ad
              mollitia quisquam fuga adipisci vero.
            </p>
          </div>
        </div>
        {/* h1 ve p kısmının bulunduğu div End */}

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* First card */}
          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-4 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-4xl font-bold text-gray-700 text-center">
              RockStar
            </h1>
            <p className="py-2 text-gray-500 text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center py-6">
              <Image
                src="/skz_sty/album3.jpg"
                alt="albums"
                width={258}
                height={258}
                className="py-6"
              />
            </div>
          </div>
          {/* First card End */}

          {/* Second Card */}
          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-4 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-4xl font-bold text-gray-700 text-center">
              Mixtape: DominATE
            </h1>
            <p className="py-2 text-gray-500 text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center py-6">
              <Image
                src="/skz_sty/album5.png"
                alt="albums"
                width={285}
                height={285}
                className="py-6"
              />
            </div>
          </div>
          {/* Second Card End */}

          {/* Third Card */}
          <div className="shadow-lg hover:shadow-xl cursor-pointer px-8 py-4 rounded-lg hover:scale-105 transition-all">
            <h1 className="text-4xl font-bold text-gray-700 text-center">
              ATE
            </h1>
            <p className="py-2 text-gray-500 text-lg text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="flex justify-center py-6">
              <Image
                src="/skz_sty/album6.jpg"
                alt="albums"
                width={235}
                height={235}
                className="py-6"
              />
            </div>
          </div>
          {/* Third Card End */}
        </div>
        {/* Cards End */}
    </>
  );
};

export default Explore;
