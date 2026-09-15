"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
export default function SystemeInventaire() {
  const icons = [
    "/gameplay/sword_unselected 2.svg",
    "/gameplay/Armor_unselected 2.svg",
    "/gameplay/consume_unselected 2.svg",
    "/gameplay/miscellaneous_unselected 5.svg",
  ];

  const v1 = [
    "/gameplay/Sword.png",
    "/gameplay/Mana.png",
    "/gameplay/Mint.png",
    "/gameplay/Gold Bars.png",
  ];

  return (
    <div className="flex flex-col sm:flex-row py-[5svh] sm:py-0 gap-[5svh] sm:gap-[1dvw] justify-center overflow-hidden items-center bg-[#403E37] bg-no-repeat bg-cover bg-center relative w-screen h-auto sm:h-[90svh] min-h-[90svh]">
      {/* pc view  elements */}
      <div className="w-[70%] lg:w-[60%] justify-center gap-[8svh] items-center text-center h-[80%] hidden sm:flex flex-col ">
        {" "}
        <div className="w-full relative flex flex-col items-center">
          {" "}
          <span className=" font-serif72  font-semibold text-[clamp(1rem,5vw,3.5rem)] uppercase">
            Système d’inventaire
          </span>
          <div className=" top-full  absolute  w-[60%] md:w-2/5 lg:w-1/3 h-[5svh]">
            <Image
              src={"/Title Devider.png"}
              className="object-center object-contain"
              fill
              alt=""
            />
          </div>
        </div>{" "}
        <span className=" text-[clamp(1rem,5vw,1.5rem)]   lg:text-[clamp(1rem,5vw,2rem)] w-full xl:w-[80%]">
          L’inventaire est le cœur de la gestion des objets. Chaque ressource
          trouvée dans le monde peut avoir une utilité : se soigner, fabriquer,
          améliorer un équipement, accomplir une quête ou être vendue à un
          marchand.
        </span>
        <div className=" w-[95%] xl:w-[80%] rounded-2xl border border-[#C8AA6E] px-[5%] flex justify-between items-center flex-row bg-[#302F2C] h-[17%]">
          {icons.map((icon) => (
            <div key={icon} className="w-[12%] h-full   relative ">
              <Image
                fill
                src={icon}
                alt=""
                className=" object-center object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* mobile view  elements */}

      <div className="flex w-full  sm:hidden flex-col items-center  h-auto relative">
        <span className="  flex font-serif72 text-center font-semibold text-[clamp(1rem,7.5vw,3.5rem)] uppercase">
          Système d’inventaire
        </span>
        <div className=" -bottom-5  absolute  w-[60%] md:w-2/5 lg:w-1/3 h-[5svh]">
          <Image
            src={"/Title Devider.png"}
            className="object-center object-contain"
            fill
            alt=""
          />
        </div>
      </div>

      {/*phone image in xl screens */}

      <div className=" w-0 xl:w-[40%] hidden xl:flex  h-[80svh]   sm:h-full relative ">
        <Image
          alt=""
          src={"/gameplay/New inventory (5)-left 1 pc.svg"}
          className="  scale-100 bottom-0 object-bottom  object-contain"
          fill
        />
      </div>

      {/*phone image in under xl screens */}

      <div className="  w-[100%] my-[5svh]  md:w-[35%] xl:w-0 xl:hidden flex  h-[70svh]  sm:h-full relative ">
        <Image
          alt=""
          src={"/gameplay/New inventory (5)-left 1.svg"}
          className=" scale-125 xl:scale-120 z-20  object-contain"
          fill
        />
        <div className=" w-1/2  left-1/2 z-10 -translate-x-1/2 h-[70%] bg-black opacity-40 blur-2xl absolute" />{" "}
      </div>

      <span className=" sm:hidden flex text-[clamp(1rem,5vw,1.1rem)] text-center  lg:text-[clamp(1rem,5vw,2rem)] w-[90%] xl:w-[80%]">
        L’inventaire est le cœur de la gestion des objets. Chaque ressource
        trouvée dans le monde peut avoir une utilité : se soigner, fabriquer,
        améliorer un équipement, accomplir une quête ou être vendue à un
        marchand.
      </span>

      <div className=" w-[95%] sm:hidden xl:w-[80%] rounded-2xl border border-[#C8AA6E] px-[5%] flex justify-between items-center flex-row bg-[#302F2C] h-[8svh]">
        {icons.map((icon) => (
          <div key={icon} className="w-[12%] aspect-square  relative ">
            <Image
              fill
              src={icon}
              alt=""
              className=" object-center object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
