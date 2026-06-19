"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";

export default function MenuPrincipal() {
  const boxesContent = [
    "La carte réelle devient une version vivante d’Ascendia, où les rues, zones et repères autour du joueur sont adaptés à l’exploration, aux quêtes et aux événements du jeu.",
    "Les bâtiments réels peuvent prendre une nouvelle fonction dans Ascendia : boutique, auberge, banque, forge, tour de garde ou autre lieu interactif utile à la progression.",
  ];

  return (
    <div className="flex flex-col  gap-[5dvw] justify-center overflow-hidden items-start bg-white  bg-no-repeat bg-cover bg-center relative w-screen min-h-[90dvh]">
      <div className=" w-full h-[70dvh] flex flex-row text-[clamp(1rem,2vw,1.5rem)]  gap-[5dvw] justify-center items-center  ">
        {boxesContent.map((content) => (
          <span className="w-[40dvw] flex items-center p-[1%] h-[40%] text-black border-3 text-center border-primary">
            {content}
          </span>
        ))}
      </div>

      <div className=" w-full bg-amber-300 h-[70dvh] flex flex-row text-[clamp(1rem,2vw,1.5rem)]  gap-[5dvw] justify-center items-center  "></div>
    </div>
  );
}
