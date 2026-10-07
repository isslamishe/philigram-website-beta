"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function MenuPrincipal() {
  const { language } = useMainContext();

  const boxesContent = [
    t("gameplay.menuPrincipal.boxesContent.0", language),
    t("gameplay.menuPrincipal.boxesContent.1", language),
  ];

  const icons = [
    "/gameplay/Alchemy.png",
    "/gameplay/Glossaire.png",
    "/gameplay/Forge.png",
    "/gameplay/inventoryIcon.png",
    "/gameplay/Store.png",
  ];

  return (
    <div className="flex flex-col  gap-[5dvw] justify-center overflow-hidden items-start bg-white  bg-no-repeat bg-cover bg-center relative w-screen min-h-[90svh]">
      <div className=" w-full h-[50svh] flex flex-col mt-10 md md:flex-row text-[clamp(0.9rem,2vw,1.2rem)] md:text-[clamp(1rem,2vw,1.5rem)]  gap-[5dvw] justify-center items-center  ">
        {boxesContent.map((content) => (
          <span
            key={content}
            className="w-[95dvw] md:w-[40dvw] flex items-center p-[1%] h-[40%] md:h-[50%] xl:h-[60%] text-black border-3 text-center border-primary"
          >
            {content}
          </span>
        ))}
      </div>

      {/*pc menu prisipal  */}
      <div className=" w-full md:flex hidden  h-[90svh]   flex-row text-[clamp(1rem,2vw,1.5rem)]  gap-[5dvw] justify-center items-center  ">
        <div className=" flex  flex-col  w-[90%] h-[90%]">
          <div className="w-full h-[80%] flex flex-row">
            <div className="flex text-[#403E37]/95 w-[60%] h-full  flex-col justify-center gap-[3vh] items-center ">
              {" "}
              <span className="font-bold font-serif72 text-[clamp(1rem,5vw,3.5rem)] text-center uppercase w-[80%]">
                {t("gameplay.menuPrincipal.title", language)}
              </span>
              <span className="font-medium lg:text-[clamp(1rem,3vw,1.7rem)]  xl:text-[clamp(1rem,3vw,1.9rem)] text-center  w-[90%]">
                {t("gameplay.menuPrincipal.description", language)}
              </span>
            </div>
            <div className="w-[35%] aspect-square relative ">
              <Image
                unoptimized
                src={"/gameplay/main-btn.png"}
                className="object-center object-contain"
                alt=""
                fill
              />
            </div>
          </div>

          <div className="w-full h-full flex flex-row justify-between items-center ">
            {icons.map((icon) => (
              <div
                key={icon}
                className=" w-[13%] lg:w-[13%] xl:w-[10%] aspect-square relative  "
              >
                <Image
                  unoptimized
                  src={icon}
                  alt=""
                  className="object-contain"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/*mobile menu prisipal  */}
      <div className=" w-full md:hidden flex  h-[90svh]   flex-col text-[clamp(1rem,2vw,1.5rem)]  gap-[5dvw] justify-center items-center  ">
        <div className=" flex  flex-col  w-[90%] h-[90%]">
          <div className="w-full h-[80%] justify-center items-center text-[#403E37]/95 flex flex-col">
            <span className="font-bold font-serif72 text-[clamp(1rem,8vw,3.5rem)] text-center uppercase w-[80%]">
              {t("gameplay.menuPrincipal.title", language)}
            </span>

            <div className="w-[65%] aspect-square relative ">
              <Image
                unoptimized
                src={"/gameplay/main-btn.png"}
                className="object-center object-contain"
                alt=""
                fill
              />
            </div>

            <span className="font-medium lg:text-[clamp(1rem,3vw,1.7rem)]  xl:text-[clamp(1rem,3vw,1.9rem)] text-center  w-[90%]">
              {t("gameplay.menuPrincipal.description", language)}
            </span>
          </div>

          <div className="w-full h-full flex flex-row justify-between items-center ">
            {icons.map((icon) => (
              <div
                key={icon}
                className=" w-[15%] lg:w-[13%] xl:w-[10%] aspect-square relative  "
              >
                <Image
                  unoptimized
                  src={icon}
                  alt=""
                  className="object-contain"
                  fill
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
