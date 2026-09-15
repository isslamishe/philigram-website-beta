"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
export default function Races() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  return (
    <div className="flex flex-col  overflow-hidden bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-svh">
      {/*bg image */}
      <div className="w-dvw h-svh absolute">
        <div className="w-full h-full z-10 absolute bg-linear-to-t from-[#0E0F10]/80 to-[#000000]/0" />
        <div className="w-full h-full z-10 absolute bg-linear-to-b from-[#121212]/40 to-[#000000]/0" />
        <div className="w-full h-1/2 z-10 bottom-0 absolute bg-linear-to-t from-[#19275E]/70 to-[#3451C4]/0" />
        <div className="w-full h-full bottom-0 z-10 absolute bg-linear-to-t from-[#22221F]/80 to-[#000000]/0" />

        <Image
          className="object-top z-9 object-cover"
          src={"/home/Gellery.webp"}
          fill
          alt=""
        />
      </div>

      <div
        style={{
          opacity: 0,
          transform: "translateY(100%)",
          transition: "opacity 0s ease, transform 1s ease",
        }}
        className="w-2/3 md:w-[42%] lg:w-[35%] z-20 -bottom-[37%] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-1/10 h-[110%] absolute"
      >
        <Image
          className="object-center z-20 object-contain"
          src="/gameplay/Quests (2)-portrait 1.svg"
          fill
          alt=""
          onLoad={(e) => {
            const parent = e.currentTarget.parentElement;
            parent.style.opacity = "1";
            parent.style.transform = "translateY(0)";
          }}
        />

        <div className="w-1/2 aura left-1/2 z-10 -translate-x-1/2 h-[70%] bg-primary-light opacity-40 blur-[100px] absolute" />
      </div>

      <div className="absolute w-full lg:w-[50%] flex flex-col justify-center text-white  top-1/10    z-30 h-[30svh] lg:h-[90svh] translate-y-0 translate-x-1/2 lg:-translate-y-1/2 right-1/2 lg:translate-x-0 lg:right-[5%] lg:top-1/2 ">
        <span className=" text-[clamp(2.5rem,2vw,3rem)] font-serif72 flex text-center leading-none uppercase justify-center w-full sm:text-[clamp(2.8rem,2vw,3rem)]    lg:text-[clamp(4rem,5vw,7rem)]  xl:text-[clamp(5.5rem,5vw,7rem)]">
          le monde réel devinet
        </span>
        <div className="w-auto h-auto flex justify-center relative">
          {" "}
          <span className=" ml-0 lg:ml-[1%] text-[clamp(3rem,2vw,7rem)]  md:text-[clamp(3rem,2vw,7rem)] text-[#FED685] uppercase text-shadow-primary-light font-serif72 text-center lg:text-[clamp(5rem,5vw,10rem)] gold-glow xl:text-[clamp(8rem,6vw,10rem)]">
            Ascendia
          </span>
          <div className=" top-[95%]  absolute -translate-y-1/2  w-[50%] md:w-2/5 lg:w-[50%] h-[5svh]">
            <Image
              src={"/Title Devider gold.svg"}
              className="object-center opacity-90 object-contain"
              fill
              alt=""
            />
          </div>
        </div>

        <span className=" text-[clamp(2.5rem,2vw,3rem)] lg:flex hidden mt-[5%] text-white font-light   text-center leading-none font- justify-end w-full sm:text-[clamp(1rem,2vw,3rem)]    lg:text-[clamp(1rem,5vw,2rem)]  xl:text-[clamp(1rem,5vw,2rem)]">
          Explorez votre ville comme jamais auparavant. Combattez des créatures,
          récoltez des ressources et découvrez un monde fantasy qui fusionne
          avec la réalité.
        </span>
      </div>
    </div>
  );
}
