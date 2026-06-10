"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/hero.jsx";
import ShowCase from "@/commponents/sections/races/races.showcase.jsx";
import { useMainContext } from "@/context/main.context";

export default function Races() {
  const { setCurrentNav } = useMainContext();

  useEffect(() => {
    setCurrentNav("Les Races");
  }, []);

  return (
    <div
      className={`flex  h-[80vh] bg-no-repeat overflow-hidden justify-center items-end   gap-0  bg-cover bg-center relative w-screen min-h-[80vh] `}
    >
      {/*bg image */}
      <div
        className={`flex absolute z-0 top-0 h-screen w-full scale-115 brightness-60 flex-col bg-[url('/history/banner.png')] bg-no-repeat   gap-0  bg-cover bg-center   min-h-[70vh] `}
      />

      {/*bg filter */}
      <div
        className={`flex z-10 absolute top-0  h-full w-full flex-col  brightness-60 bg-linear-to-b from-[#F3D69C]/20 to-[#E5CA95]/20  bg-no-repeat   gap-0  bg-cover bg-center  min-h-[70vh]   `}
      />

      {/*bg black filter */}
      <div
        className={`flex z-10 absolute bottom-0   h-[50%] w-full flex-col bg-linear-to-b from-transparent via-black/50 to-black  bg-no-repeat   gap-0  bg-cover bg-center     `}
      />

      {/*bottom devider */}
      <div className="absolute z-15 bottom-0 h-[10vh] w-full">
        <Image fill alt="" src={"/history/Devider.svg"} />
      </div>

      {/*content */}
      <div className="w-full h-[60%] shrink-0  flex-col justify-start gap-[10%] items-center   flex z-20">
        <span className=" bg-clip-text shrink-0 w-[90%] text-transparent bg-[linear-gradient(90deg,#F3D69C_0%,#B39D72_34%,#D9BF8C_68%,#E5CA95_91%)] font-serif72  text-stro font-semibold text-[clamp(1.7rem,5vw,3rem)]  sm:text-[clamp(1.3rem,5vw,3rem)] lg:text-[clamp(1rem,5vw,3.5rem)] 3xl:text-[clamp(1rem,5vw,6rem)]!">
          Le Monde a Changé à Jamais
        </span>
        <span className="   w-[90%] shrink-0 font-light text-[clamp(1rem,5vw,1.5rem)]! lg:text-[clamp(1rem,5vw,2.3rem)] 3xl:text-[clamp(1rem,5vw,2.8rem)]!">
          Deux mondes entrent en collision. Une civilisation s'effondre.
          L'humanité doit s'adapter ou périr.
        </span>
      </div>
    </div>
  );
}
