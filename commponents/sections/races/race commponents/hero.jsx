"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/hero.jsx";
import ShowCase from "@/commponents/sections/races/races.showcase.jsx";
import { useMainContext } from "@/context/main.context";

export default function Races({ race }) {
  const { setCurrentNav } = useMainContext();

  return (
    <div className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b  from-[#000000]/20 to-[#000000]/40 z-10" />

      {/* bg image */}
      <div
        style={{ backgroundImage: `url(${race.bg})` }}
        className="flex flex-col bg-fixed w-screen  brightness-100 absolute bg-center scale-105 z-5  bg-black gap-0 bg-no-repeat bg-cover  top-0 -bottom-[20%]  min-h-screen"
      />

      <div className="w-[96%] ml-auto flex flex-col items-start h-[50vh] md:h-[45vh] z-30 ">
        <span className=" font-serif72 text-[clamp(1rem,10vw,10rem)] text-center  md:text-[clamp(1rem,7vw,15rem)] font-light">
          {race.name}
        </span>

        <span className=" w-[100%] md:w-[100%] text-start text-[clamp(1rem,2vw,1.5rem)] font-light">
          {race.describtion}
        </span>
        <span className=" my-auto w-[100%] md:w-[100%] pl-[1vh] border-l border-white font-serif72 text-start text-[clamp(1rem,2vw,1.5rem)] font-light">
          {race.subDescribtion}
        </span>
      </div>
    </div>
  );
}
