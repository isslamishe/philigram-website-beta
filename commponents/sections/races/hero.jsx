"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function Section2() {
  const { language } = useMainContext();

  const [currentPeuple, setCurrentPeuple] = useState(0);

  const containerRef = useRef(null);

  const Peuples = [
    {
      name: "VARKHANS",
      description: "Guerriers-Corneilles de la Mémoire",
      image: "/home/peuples images/varkhans.png",
    },
    {
      name: "Sylvéride",
      description:
        "gardiens des bois profonds, dont les racines portent mémoire",
      image: "/home/peuples images/Sylvéride.png",
    },
    {
      name: "Luminels",
      description:
        "êtres de lumière pensante, tisseurs de runes et de lois invisibles",
      image: "/home/peuples images/Luminels.png",
    },
    {
      name: "Aetherïn",
      description:
        "navigateurs des courants de mana, capables de “lire” l’espace comme une carte vivante",
      image: "/home/peuples images/Aetherïn.png",
    },
  ];

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    container.scrollTo({
      left: currentPeuple * container.clientWidth,
      behavior: "smooth",
    });
  }, [currentPeuple]);

  return (
    <div className="flex flex-col overflow-hidden justify-end  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-[#000000]/60 z-10" />

      <div className="absolute top-0 -bottom-[20%] w-screen min-h-screen z-5 overflow-hidden">
        <Image
          src="/races/Hero-bg.webp"
          alt=""
          fill
          priority
          className="object-cover object-center scale-105 brightness-100"
        />
      </div>

      <div className="w-full flex flex-col items-center h-[50vh] md:h-[37vh] z-30 ">
        <span className=" font-serif72 text-[clamp(1rem,10vw,1.8rem)] text-center  md:text-[clamp(1rem,5vw,3.5rem)] font-light">
          {t("races.hero.title", language)}
        </span>

        <span className=" w-[80%] md:w-[65%] text-center text-[clamp(1rem,2vw,1.5rem)] font-light">
          {t("races.hero.subtitle", language)}
        </span>
      </div>
    </div>
  );
}
