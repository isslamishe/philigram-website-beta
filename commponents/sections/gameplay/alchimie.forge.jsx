"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function AlchimieForge() {
  const { language } = useMainContext();

  const parts = [
    {
      content: t("gameplay.alchimieForge.parts.0.content", language),
      image: "/gameplay/magic-potion_9267937 1.png",
    },
    {
      content: t("gameplay.alchimieForge.parts.1.content", language),
      image: "/gameplay/blacksmith_8903504 1.png",
    },
  ];

  return (
    <div className="flex flex-col gap-[5svh] justify-start py-[10svh] overflow-hidden items-center bg-[#403E37] bg-no-repeat bg-cover bg-center relative w-screen h-auto  min-h-[90svh]">
      <span className="w-full h-[10svh] text-[clamp(1rem,8vw,3.5rem)] md:text-[clamp(1rem,5dvw,3rem)] font-serif72 font-semibold text-center">
        {t("gameplay.alchimieForge.title", language)}
      </span>

      {parts.map((part, idx) => (
        <div
          key={part.image}
          className={`w-[90%] flex md:justify-start justify-center items-center md:items-center  h-[60svh] flex-col  ${idx % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
        >
          <div className="w-[70%] md:w-[35%] h-full relative">
            <Image
              unoptimized
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
