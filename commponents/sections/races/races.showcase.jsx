"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Races from "../../../app/races/page";
import Link from "next/link";
import { getRaces } from "@/data/races.jsx";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function Section2() {
  const { language } = useMainContext();
  const [currentPeuple, setCurrentPeuple] = useState(0);

  const races = getRaces(language);

  const containerRef = useRef(null);

  return (
    <div className="flex flex-col  relative  bg-center overflow-hidden   scale-100 z-5 h-auto min-h-[150vh] bg-white gap-0 bg-no-repeat bg-cover  top-0 -bottom-[0%] w-screen min-h-screen">
      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b   from-[#000000]/75 to-black z-25" />

      {/* races image  */}
      <div className="w-full md:flex-row hidden scale-95 -bottom-[10%] max-h-[150vh] grayscale-100 z-20 absolute  h-[100%]">
        <Image fill alt="" src={"/races/bg-races.png"} />
      </div>

      {/* bg image  */}
      <div className="w-full scale-130 grayscale-100 absolute z-10 max-h-full  lg:max-h-[110vh]  h-[100%]">
        <Image fill alt="" src={"/races/race-bg.png"} />
      </div>

      {/*content */}
      <div className="z-30 flex flex-col gap-[2vw] justify-center items-center h-[90vh] w-full">
        <span className=" w-[85%] md:w-[70%] h-[30%] font-serif72 text-center font-light text-[clamp(1rem,2vw,1.3rem)] md:text-[clamp(1rem,3vw,1.7rem)]">
          {t("races.racesshowcase.paragraph1", language)}
        </span>

        <span className=" w-[85%] md:w-[70%] h-[30%] font-serif72 text-center font-light text-[clamp(1rem,2vw,1.3rem)] md:text-[clamp(1rem,3vw,1.7rem)]">
          {t("races.racesshowcase.paragraph2", language)}
        </span>
      </div>

      {/*titel */}
      <div className="w-full relative z-30 h-[10vh]">
        <div className=" w-[35%] xl:w-[50%] lg:w-[30%] left-0 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>

        <div className="w-[50%] font-light text-[clamp(1rem,3vw,1.8rem)] font-serif72 text-primary flex justify-center items-center left-1/2 -translate-x-1/2 absolute h-[50%] ">
          <span>{t("races.racesshowcase.sectionTitle", language)}</span>
        </div>

        <div className="w-[35%] xl:w-[50%] lg:w-[30%] right-0 rotate-180 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>
      </div>

      {/*races cards */}

      <div className="z-30 hidden lg:flex flex-wrap justify-center gap-[2dvw] mb-[5vh] p-[1vh] bg-gradient-to-b from-transparent to-black w-full h-auto">
        {races.map((race) => (
          <Link
            href={race.diraction}
            key={race.id ?? race.name}
            className="
        race-card
        relative
        flex justify-center items-end
        overflow-hidden
        bg-black
        border-3 border-primary

        w-full
        sm:w-[45%]
        lg:w-[30%]
        xl:w-[18%]

        h-[50vh]
      "
          >
            <Image
              className="race-image object-center object-cover"
              fill
              alt=""
              src={race.image}
            />

            <span className="z-20 flex h-[20%] w-full items-center justify-center border-t-3 border-primary bg-black/90 text-center font-serif72 text-primary text-[clamp(1rem,3vw,1.4rem)]">
              {race.name.split(" ")[1] || race.name}
            </span>
          </Link>
        ))}
      </div>

      {/*mobile races  cards */}
      <div className="z-30 grid grid-cols-2 gap-y-15 justify-items-center  gap-3 lg:hidden flex-col mb-[5vh] lg:flex-row p-[1vh]  bg-gradient-to-b   from-transparent to-black  justify-evenly items-center h-auto lg:h-[50vh] w-full">
        {races.map((race, index) => (
          <Link
            href={race.diraction}
            key={race.id ?? race.name}
            className={` w-[45vw] md:w-[32vw] max-w-[45vw] h-[40vh] race-card overflow-hidden relative flex justify-center items-end bg-black border-3 border-primary ${
              index === races.length - 1 && races.length % 2 !== 0
                ? "col-span-2 justify-self-center"
                : ""
            }`}
          >
            <Image
              className="race-image object-top object-cover"
              fill
              alt=""
              src={race.image}
            />

            <span className=" w-full text-primary text-[clamp(1rem,3vw,1.4rem)] font-serif72 border-t-3 border-primary flex justify-center items-center z-20 bg-black/90 h-[20%] text-center">
              {race.name.split("Les")[1]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
