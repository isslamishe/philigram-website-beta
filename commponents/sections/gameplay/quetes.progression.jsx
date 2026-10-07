"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function QuetesProgression() {
  const { language } = useMainContext();

  const isRTL = language === "ar";

  const icons = [
    "/gameplay/Sword.png",
    "/gameplay/Mana.png",
    "/gameplay/Mint.png",
    "/gameplay/Gold Bars.png",
  ];

  const parts = [
    {
      title: t("gameplay.quetesProgression.parts.0.title", language),
      content: t("gameplay.quetesProgression.parts.0.content", language),
    },
    {
      title: t("gameplay.quetesProgression.parts.1.title", language),
      content: t("gameplay.quetesProgression.parts.1.content", language),
    },
    {
      title: t("gameplay.quetesProgression.parts.2.title", language),
      content: t("gameplay.quetesProgression.parts.2.content", language),
    },
    {
      title: t("gameplay.quetesProgression.parts.3.title", language),
      content: t("gameplay.quetesProgression.parts.3.content", language),
    },
  ];

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="flex flex-col py-[10svh] md:py-0 pb-0 md:pb-[15svh] justify-center gap-[3svh] overflow-hidden items-center bg-white bg-no-repeat bg-cover bg-center relative w-screen h-auto  min-h-[90svh]"
    >
      <div className="w-[90%]  h-[80svh] justify-center items-center flex flex-col md:flex-row">
        <span className="w-[100%] text-[#403E37] justify-center  flex md:hidden xl:w-full uppercase font-semibold font-serif72 text-center  text-[clamp(1rem,7vw,2.8rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
          {t("gameplay.quetesProgression.title", language)}
        </span>

        <div className=" w-[80%] md:w-[40%] relative h-full">
          <Image
            unoptimized
            fill
            className="object-center object-contain"
            src={"/gameplay/ICO_QUEST_Target.png"}
            alt=""
          />
        </div>

        <span className="w-[100%] text-[#403E37] justify-center  flex md:hidden xl:w-full  text-center  text-[clamp(1rem,4.5vw,1.3rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
          {t("gameplay.quetesProgression.description", language)}
        </span>

        <div className="w-[60%] md:flex text-[#403E37] gap-[7svh]  text-center h-full justify-center items-center hidden flex-col">
          <span className="w-[110%] xl:w-full uppercase font-[900] font-serif72 lg:text-[clamp(1rem,5vw,2.8rem)] md:text-[clamp(1rem,5vw,2.2rem)] xl:text-[clamp(1rem,5vw,3.5rem)]">
            {t("gameplay.quetesProgression.title", language)}
          </span>
          <span className=" md:w-full lg:w-[95%] text-[clamp(1rem,3vw,1.3rem)]   lg:text-[clamp(1rem,3vw,1.8rem)]">
            {t("gameplay.quetesProgression.description", language)}
          </span>
        </div>
      </div>

      <div className="w-[95%] flex  text-[#403E37] mt-[5svh] text-[clamp(1rem,4.5vw,1.3rem)]  md:text-[clamp(1rem,3vw,2.3rem)] md:text-start text-center  h-full justify-center items-start  flex-col">
        {" "}
        <span>{t("gameplay.quetesProgression.summary", language)}</span>
      </div>

      {parts.map((part, index) => (
        <div
          key={index}
          className="flex flex-col  w-[95%] h-[30svh] gap-2 md:h-[25svh] items-center justify-start relative "
        >
          <div className="w-[5dvw] hidden md:flex h-full absolute start-[-2%] top-[10%]  ">
            <Image
              unoptimized
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
