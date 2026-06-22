"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/context/main.context";
import { title } from "node:process";

export default function QuetesProgression() {
  const icons = [
    "/gameplay/Sword.png",
    "/gameplay/Mana.png",
    "/gameplay/Mint.png",
    "/gameplay/Gold Bars.png",
  ];

  const parts = [
    {
      title: "Quêtes principales",
      content:
        "Elles suivent l’histoire centrale d’Ascendia, la Fracture, la mana et les grands mystères du monde. Elles permettent au joueur de débloquer de nouvelles fonctionnalités, zones, systèmes ou étapes importantes de progression.",
    },
    {
      title: "Quêtes secondaires",
      content:
        "Elles enrichissent l’exploration en proposant des objectifs liés aux habitants, factions, ressources, monstres ou lieux spécifiques. Elles donnent plus de profondeur au monde et récompensent les joueurs curieux.",
    },
    {
      title: "Objectifs sur la carte",
      content:
        "Les quêtes peuvent apparaître sous forme de marqueurs sur la carte, guidant le joueur vers un lieu réel transformé en point d’intérêt d’Ascendia.",
    },
    {
      title: "Récompenses",
      content:
        "Les missions peuvent offrir de l’expérience, des monnaies, des matériaux, des objets rares, des recettes d’alchimie, des améliorations ou de nouvelles informations dans le glossaire.",
    },
  ];

  return (
    <div className="flex flex-col py-[10dvh] md:py-0 pb-0 md:pb-[15dvh] justify-center gap-[3dvh] overflow-hidden items-center bg-white bg-no-repeat bg-cover bg-center relative w-screen h-auto  min-h-[90dvh]">
      <div className="w-[90%]  h-[80dvh] justify-center items-center flex flex-col md:flex-row">
        <span className="w-[100%] text-[#403E37] justify-center  flex md:hidden xl:w-full uppercase font-semibold font-serif72 text-center  text-[clamp(1rem,7vw,2.8rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
          Quêtes et progression
        </span>

        <div className=" w-[80%] md:w-[40%] relative h-full">
          <Image
            fill
            className="object-center object-contain"
            src={"/gameplay/ICO_QUEST_Target.png"}
            alt=""
          />
        </div>

        <span className="w-[100%] text-[#403E37] justify-center  flex md:hidden xl:w-full  text-center  text-[clamp(1rem,4.5vw,1.3rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
          Les quêtes guident le joueur à travers l’histoire d’Ascendia Rise et
          l’encouragent à explorer le monde qui l’entoure. Elles peuvent mener
          vers des points d’intérêt, des bâtiments réinventés, des ressources
          rares, des créatures à affronter ou des zones influencées par la mana.
        </span>

        <div className="w-[60%] md:flex text-[#403E37] gap-[7dvh]  text-center h-full justify-center items-center hidden flex-col">
          <span className="w-[110%] xl:w-full uppercase font-[900] font-serif72 lg:text-[clamp(1rem,5vw,2.8rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
            Quêtes et progression
          </span>
          <span className=" md:w-full lg:w-[95%] text-[clamp(1rem,3vw,1.3rem)]   lg:text-[clamp(1rem,3vw,1.8rem)]">
            Les quêtes guident le joueur à travers l’histoire d’Ascendia Rise et
            l’encouragent à explorer le monde qui l’entoure. Elles peuvent mener
            vers des points d’intérêt, des bâtiments réinventés, des ressources
            rares, des créatures à affronter ou des zones influencées par la
            mana.
          </span>
        </div>
      </div>

      <div className="w-[95%] flex  text-[#403E37] mt-[5dvh] text-[clamp(1rem,4.5vw,1.3rem)]  md:text-[clamp(1rem,3vw,2.3rem)] md:text-start text-center  h-full justify-center items-start  flex-col">
        {" "}
        <span>
          Chaque mission permet au joueur de mieux comprendre l’univers
          d’Ascendia, de découvrir de nouveaux personnages, d’obtenir des
          récompenses et de progresser dans son aventure.
        </span>
      </div>

      {parts.map((part) => (
        <div
          key={part.title}
          className="flex flex-col  w-[95%] h-[30dvh] gap-2 md:h-[25dvh] items-center justify-start relative "
        >
          <div className="w-[5dvw] hidden md:flex h-full absolute left-[-2%] top-[10%]  ">
            <Image
              fill
              className=" object-top object-contain"
              alt=""
              src={"/Mask group.png"}
            />
          </div>

          <span className="w-[95%] md:text-start text-center text-[clamp(1.4rem,4.5vw,2rem)] md:text-[clamp(1rem,3vw,2.5rem)] font-serif72 font-semibold text-primary-dark">
            {part.title}
          </span>
          <span className="w-[95%] md:text-start text-center text-[clamp(1rem,4.5vw,1.3rem)] md:text-[clamp(1rem,3vw,1.8rem)] text-black">
            {part.content}
          </span>
        </div>
      ))}
    </div>
  );
}
