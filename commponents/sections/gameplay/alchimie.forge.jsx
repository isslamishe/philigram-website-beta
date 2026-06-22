"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function AlchimieForge() {
  const parts = [
    {
      content:
        "L’alchimie permet au joueur de transformer les ressources collectées pendant l’exploration en potions, remèdes et élixirs utiles à sa progression. Ce système donne une vraie valeur aux herbes, composants rares et matériaux découverts sur la carte.",
      image: "/gameplay/magic-potion_9267937 1.png",
    },
    {
      content:
        "La forge permet au joueur de transformer les ressources obtenues durant ses aventures en équipements plus puissants. En collectant des minerais, des fragments, des composants rares et des matériaux issus des créatures rencontrées, il est possible de fabriquer ou d’améliorer son équipement.",
      image: "/gameplay/blacksmith_8903504 1.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[5dvh] justify-start py-[10dvh] overflow-hidden items-center bg-[#4C68D7] bg-no-repeat bg-cover bg-center relative w-screen h-auto  min-h-[90dvh]">
      <span className="w-full h-[10dvh] text-[clamp(1rem,8vw,3.5rem)] md:text-[clamp(1rem,5dvw,3rem)] font-serif72 font-semibold text-center">
        Alchimie & Forge
      </span>

      {parts.map((part, idx) => (
        <div
          key={part.image}
          className={`w-[90%] flex md:justify-start justify-center items-center md:items-center  h-[60dvh] flex-col  ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="w-[70%] md:w-[35%] h-full relative">
            <Image
              src={part.image}
              className="object-center object-contain"
              fill
              alt=""
            />
          </div>
          <div className=" w-[95%] md:w-[80%] h-full justify-center text-center md:text-start items-center flex  text-[clamp(0.8rem,5vh,1.2rem)] md:text-[clamp(1rem,5vh,1.2rem)] lg:text-[clamp(1rem,5vh,1.5rem)] xl:text-[clamp(1rem,5vh,2.2rem)] ">
            <span>{part.content}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
