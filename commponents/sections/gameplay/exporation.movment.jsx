"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function EMR() {
  const { setCurrentNav, setCurrentSubNav } = useMainContext();

  const icons = [
    "/gameplay/ICO_POI_Alchemist.png",
    "/gameplay/ICO_POI_Bank.png",
    "/gameplay/ICO_POI_Blacksmith.png",
    "/gameplay/ICO_POI_Herbalist.png",
    "/gameplay/ICO_POI_Merchant.png",
  ];

  return (
    <div className="flex flex-row lg:justify-start justify-center overflow-hidden items-center bg-[#4C68D7] gap-0 bg-no-repeat bg-cover bg-center relative w-screen h-[60dvh] md:h-[70dvh] lg:h-[90dvh]">
      {/*side image */}
      <div className="w-[25dvw] lg:flex hidden xl:scale-100 scale-110 h-full relative ">
        <Image
          fill
          className="object-left object-fill"
          src={"/gameplay/Screenshot.png"}
          alt=""
        />
      </div>
      {/*content */}

      <div className=" w-[95%] md:w-full  lg:w-[72dvw] flex flex-col text-center items-center lg:justify-between justify-around h-[85%]">
        <span className="font-serif72 uppercase font-bold w-full md:w-[80%] text-[clamp(0.8rem,7vw,1.4rem)] md:text-[clamp(2rem,5vw,3.2rem)]">
          Exploration en mouvement réel
        </span>

        <span className="  w-[90%] md:w-[70%] text-[clamp(0.8rem,7vw,0.9rem)] md:text-[clamp(0.8rem,5vw,1.2rem)]  lg:text-[clamp(0.8rem,5vw,2rem)]">
          Dans Ascendia Rise, l’exploration commence par vos déplacements dans
          le monde réel. En marchant, le joueur découvre une version transformée
          de son environnement, où les rues, les bâtiments et les lieux réels
          deviennent des points d’intérêt liés à l’univers d’Ascendia.
        </span>

        <div className=" w-[85%] md:w-[60%] lg:w-[80%] flex flex-row items-center justify-evenly rounded-3xl h-[8dvh] md:h-[10dvh] lg:h-[15dvh] bg-black/8">
          {icons.map((icon) => (
            <div
              key={icon}
              className=" h-[70%] lg:h-[80%] w-[15%]  pointer-events-none relative "
            >
              <Image
                fill
                className="object-center pointer-events-none object-contain"
                alt=""
                src={icon}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
