"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/hero.jsx";
import ShowCase from "@/commponents/sections/races/races.showcase.jsx";
import { useMainContext } from "@/lib/context/main.context";
export default function Races({ race }) {
  const { setCurrentNav, language } = useMainContext();

  const isRTL = language === "ar";

  const bgMbRef = useRef(null);
  const bgPcRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      if (bgMbRef.current) {
        if (scrollPercent > 50) {
          bgMbRef.current.classList.add("opacity-0");
          bgMbRef.current.classList.remove("opacity-100");
        } else {
          bgMbRef.current.classList.add("opacity-100");
          bgMbRef.current.classList.remove("opacity-0");
        }
      }

      if (bgPcRef.current) {
        if (scrollPercent > 50) {
          bgPcRef.current.classList.add("opacity-0");
          bgPcRef.current.classList.remove("opacity-100");
        } else {
          bgPcRef.current.classList.add("opacity-100");
          bgPcRef.current.classList.remove("opacity-0");
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen"
    >
      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b  from-[#000000]/10 to-[#000000]/40 z-7" />

      {/* bg mobile image */}
      <div
        ref={bgMbRef}
        className="flex md:hidden fixed flex-col left-1/2 object-center -translate-x-1/2  w-svw  brightness-100  bg-center scale-105 z-5  bg-black gap-0 bg-no-repeat bg-cover  top-0 -bottom-[20%]  h-lvh"
      >
        <Image
          className="object-center z-5 object-cover"
          src={race.bg_mobile}
          alt=""
          fill
          unoptimized
        />
      </div>

      {/* bg pc image */}
      <div
        ref={bgPcRef}
        className=" hidden md:flex fixed flex-col left-1/2 object-center -translate-x-1/2  w-svw  brightness-100  bg-center scale-105 z-5  bg-black gap-0 bg-no-repeat bg-cover  top-0 -bottom-[20%]  h-lvh"
      >
        <Image
          className="object-center z-5 object-cover"
          src={race.bg}
          alt=""
          fill
          unoptimized
        />
      </div>

      <div className="w-[96%]  ms-auto flex flex-col items-start h-[50vh] md:h-[45vh] z-30 ">
        <span className=" font-serif72 text-[clamp(1rem,10vw,10rem)] text-center  md:text-[clamp(1rem,7vw,15rem)] font-light">
          {race.name}
        </span>

        <span className=" w-[100%] md:w-[100%] text-start text-[clamp(1rem,2vw,1.5rem)] font-light">
          {race.describtion}
        </span>
        <span className=" my-auto w-[100%] md:w-[100%] ps-[1vh] border-s border-white font-serif72 text-start text-[clamp(1rem,2vw,1.5rem)] font-light">
          {race.subDescribtion}
        </span>
      </div>
    </div>
  );
}
