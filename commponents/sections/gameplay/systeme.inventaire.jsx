"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function SystemeInventaire() {
  const icons = [
    "/gameplay/Sword.png",
    "/gameplay/Mana.png",
    "/gameplay/Mint.png",
    "/gameplay/Gold Bars.png",
  ];

  return (
    <div className="flex flex-col sm:flex-row py-[5dvh] sm:py-0 gap-[5dvh] sm:gap-[1dvw] justify-center overflow-hidden items-center bg-[#4C68D7] bg-no-repeat bg-cover bg-center relative w-screen h-auto sm:h-[90dvh] min-h-[90dvh]">
      <div className="w-[70%] lg:w-[65%] justify-center gap-[8dvh] items-center text-center h-[80%] hidden sm:flex flex-col ">
        {" "}
        <span className=" font-serif72 font-semibold text-[clamp(1rem,5vw,3.5rem)] uppercase">
          Système d’inventaire
        </span>
        <span className=" text-[clamp(1rem,5vw,1.5rem)]   lg:text-[clamp(1rem,5vw,2rem)] w-full xl:w-[80%]">
          L’inventaire est le cœur de la gestion des objets. Chaque ressource
          trouvée dans le monde peut avoir une utilité : se soigner, fabriquer,
          améliorer un équipement, accomplir une quête ou être vendue à un
          marchand.
        </span>
        <div className=" w-[95%] xl:w-[80%] rounded-2xl px-[5%] flex justify-between items-center flex-row bg-[#465DBA] h-[20%]">
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

      <span className=" sm:hidden flex font-serif72 text-center font-semibold text-[clamp(1rem,7.5vw,3.5rem)] uppercase">
        Système d’inventaire
      </span>

      <div className=" w-[60%] sm:w-[30%] flex h-[70dvh]  sm:h-full relative ">
        <Image
          alt=""
          src={"/gameplay/inventory potion-left.png"}
          className=" scale-125 xl:scale-100 object-center object-contain"
          fill
        />
      </div>

      <span className=" sm:hidden flex text-[clamp(1rem,5vw,1.1rem)] text-center  lg:text-[clamp(1rem,5vw,2rem)] w-[90%] xl:w-[80%]">
        L’inventaire est le cœur de la gestion des objets. Chaque ressource
        trouvée dans le monde peut avoir une utilité : se soigner, fabriquer,
        améliorer un équipement, accomplir une quête ou être vendue à un
        marchand.
      </span>

      <div className=" w-[95%] sm:hidden xl:w-[80%] rounded-2xl px-[5%] flex justify-between items-center flex-row bg-[#465DBA] h-[10dvh]">
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
