"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";

export default function NotreVision() {
  const icons = [
    { label: "Le réel comme terrain de jeu", icon: "/about/globe 1.svg" },
    { label: "Un monde qui évoulue", icon: "/about/leaves 1.svg" },
    { label: "Le gameplay avant tout ", icon: "/about/swords 1.svg" },
    { label: "Une expérience accessible", icon: "/about/compass 1.svg" },
  ];
  return (
    <div className="flex flex-col py-[2%] justify-evenly items-center bg-[linear-gradient(#535045_0%,#403E37_100%)] gap-0 mt-[10dvh]  relative w-screen h-[90dvh] ">
      <div>
        <span className="uppercase text-[clamp(1rem,3dvw,1.1rem)] md:text-[clamp(1.2rem,3dvw,1.5rem)] text-[#E3C68C] font-serif72 ">
          Notre virsion
        </span>
      </div>
      <div></div>
      <div className=" max-w-[95%] md:max-w-[90dvw] text-center gap-5 flex flex-col font-light">
        <span className="font-serif72 font-semibold text-[clamp(1rem,3dvw,1.5rem)]  md:text-[clamp(1.8rem,3dvw,2.2rem)]">
          Transformer le réel en terrain d’aventure
        </span>
        <span className="  text-[clamp(0.8rem,3dvw,1rem)] md:text-[clamp(1.5rem,3dvw,1.6rem)]">
          Dans Ascendia Rise, le monde réel devient le terrain de jeu. Explorez
          votre environnement, découvrez des ressources, combattez des creatures
          et participez à la fusion des mondes.
        </span>
      </div>
      <div className="flex w-full flex-wrap items-center justify-evenly gap-8">
        {icons.map((icon) => (
          <div
            key={icon.label}
            className="
        flex aspect-square w-[40%]
        flex-col items-center justify-evenly
        sm:w-[40%]
        md:w-[20%]
      "
          >
            <div className="relative aspect-square w-[50%] min-w-[5rem]">
              <Image src={icon.icon} alt="" fill />
            </div>

            <span className="text-center text-[clamp(0.7rem,2dvw,0.8rem)] md:text-[clamp(1.1rem,2dvw,1.2rem)] text-[#E3C68C]">
              {icon.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
