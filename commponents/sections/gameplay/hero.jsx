"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  return (
    <div className="flex flex-col  overflow-hidden bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      {/*bg image */}
      <div className=" w-0 lg:w-[105dvw] xl:w-dvw h-dvh absolute">
        <div className="w-full h-full z-20 relative bg-[#3451C4]/15" />
        <Image
          className="object-left z-10 object-fill"
          src={"/gameplay/Real word1.jpg"}
          fill
          alt=""
        />
      </div>

      <div className=" w-[100%] bottom-0 left-1/2 -translate-x-1/2 lg:w-0 h-[50dvh] md:h-[65dvh] sm:h-[60dvh] absolute">
        <div className="w-full h-full z-20 relative bg-[#3451C4]/0" />
        <Image
          className="object-center z-10 object-contain"
          src={"/gameplay/hero.bg.mobile.jpg"}
          fill
          alt=""
        />
      </div>

      <div className="absolute w-full lg:w-[90%] text-[#403E37]  lg:text-white  uppercase font-extrabold flex flex-col leading-normal lg:leading-none justify-end lg:justify-center items-center lg:items-start  z-30 h-[30dvh] lg:h-[20dvh] left-1/2 -translate-x-1/2 top-[12%] ">
        <span className=" text-[clamp(2.5rem,2vw,7rem)] w-full sm:text-[clamp(2.8rem,2vw,7rem)] lg:text-left  text-center   lg:text-[clamp(4.3rem,5vw,7rem)] xl:text-[clamp(6rem,5vw,10rem)]">
          le monde réel{" "}
        </span>
        <span className=" ml-0 lg:ml-[1%]  text-[clamp(1.6rem,2vw,7rem)] text-center lg:text-[clamp(3rem,5vw,10rem)] xl:text-[clamp(4.3rem,4vw,5rem)]">
          devient ascendia
        </span>
      </div>
    </div>
  );
}
