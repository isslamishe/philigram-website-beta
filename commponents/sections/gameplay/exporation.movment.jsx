"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function EMR() {
  const { setCurrentNav, setCurrentSubNav, language } = useMainContext();

  const icons = [
    "/gameplay/ICO_POI_Alchemist.png",
    "/gameplay/ICO_POI_Bank.png",
    "/gameplay/ICO_POI_Blacksmith.png",
    "/gameplay/ICO_POI_Herbalist.png",
    "/gameplay/ICO_POI_Merchant.png",
  ];

  return (
    <div className="flex flex-row lg:justify-start justify-center overflow-hidden items-center bg-[#403E37] gap-0 bg-no-repeat bg-cover bg-center relative w-screen h-[60svh] md:h-[70svh] lg:h-[90svh]">
      {/*side image */}
      <div className="w-[25dvw] lg:flex hidden xl:scale-100 scale-110 h-full relative ">
        <Image
          unoptimized
          fill
          className="object-left object-fill"
          src={"/gameplay/Screenshot.png"}
          alt=""
        />
      </div>
      {/*content */}

      <div className=" w-[95%] md:w-full  lg:w-[72dvw] flex flex-col text-center items-center lg:justify-between justify-around h-[85%]">
        <div className="w-full relative h-auto flex flex-col items-center">
          {" "}
          <span className="font-serif72 relative uppercase font-bold w-full md:w-[80%] text-[clamp(0.8rem,7vw,1.2rem)] md:text-[clamp(2rem,5vw,2rem)] lg:text-[clamp(2rem,5vw,2.8rem)]">
            {t("gameplay.emr.title", language)}
          </span>
          <div className="  relative w-[60%] md:w-2/5 lg:w-1/3 h-[5svh]">
            <Image
              unoptimized
              src={"/Title Devider.png"}
              className="object-center object-contain"
              fill
              alt=""
            />
          </div>
        </div>

        <span className="  w-[90%] md:w-[70%] text-[clamp(0.8rem,7vw,0.9rem)] md:text-[clamp(0.8rem,5vw,1.2rem)]  lg:text-[clamp(0.8rem,5vw,2rem)]">
          {t("gameplay.emr.description", language)}
        </span>

        <div className=" w-[85%] md:w-[60%] lg:w-[80%] flex flex-row items-center justify-evenly rounded-3xl h-[8svh] md:h-[10svh] lg:h-[15svh] bg-black/8">
          {icons.map((icon) => (
            <div
              key={icon}
              className=" h-[70%] lg:h-[80%] w-[15%]  pointer-events-none relative "
            >
              <Image
                unoptimized
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
