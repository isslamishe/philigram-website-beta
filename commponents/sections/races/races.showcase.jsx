"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Races from "../../../app/races/page";
import Link from "next/link";
import { races } from "@/data/races";
export default function Section2() {
  const [currentPeuple, setCurrentPeuple] = useState(0);

  const containerRef = useRef(null);

  return (
    <div className="flex flex-col  relative  bg-center overflow-hidden   scale-100 z-5 h-auto min-h-[150vh] bg-white gap-0 bg-no-repeat bg-cover  top-0 -bottom-[0%] w-screen min-h-screen">
      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b   from-[#000000]/75 to-black z-25" />

      {/* races image  */}
      <div className="w-full scale-95 -bottom-[10%] max-h-[150vh] grayscale-100 z-20 absolute  h-[100%]">
        <Image fill alt="" src={"/races/bg-races.png"} />
      </div>

      {/* bg image  */}
      <div className="w-full scale-130 grayscale-100 absolute z-10 max-h-[110vh]  h-[100%]">
        <Image fill alt="" src={"/races/race-bg.png"} />
      </div>

      {/*content */}
      <div className="z-30 flex flex-col gap-[2vw] justify-center items-center h-[90vh] w-full">
        <span className=" w-[85%] md:w-[70%] h-[30%] font-serif72 text-center font-light text-[clamp(1rem,2vw,1.3rem)] md:text-[clamp(1rem,3vw,1.7rem)]">
          Lorsque l'Innommable Cataclysme frappa leur monde, les cinq grandes
          races d'Ascendia se rassemblèrent autour de leurs derniers bastions.
          Unis dans le désespoir, ils cherchèrent refuge auprès de Manelle,
          l'esprit de l'Arbre-Monde, qui les ancra à la Terre à travers la
          Greffe.
        </span>

        <span className=" w-[85%] md:w-[70%] h-[30%] font-serif72 text-center font-light text-[clamp(1rem,2vw,1.3rem)] md:text-[clamp(1rem,3vw,1.7rem)]">
          Aujourd'hui, ces peuples marchent parmi les ruines de l'ancienne
          civilisation humaine, portant avec eux des millénaires de sagesse, de
          pouvoir, et de mémoire. Chacun apporte ses dons uniques à ce nouveau
          monde fusionné — mais aussi ses propres blessures, car le mana qui les
          définissait autrefois se raréfie et devient instable.
        </span>
      </div>

      {/*titel */}
      <div className="w-full relative z-30 h-[10vh]">
        <div className=" w-[35%] lg:w-[50%] left-0 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>

        <div className="w-[50%] font-light text-[clamp(1rem,3vw,1.8rem)] font-serif72 text-primary flex justify-center items-center left-1/2 -translate-x-1/2 absolute h-[50%] ">
          <span>Les Races</span>
        </div>

        <div className="w-[35%] lg:w-[50%] right-0 rotate-180 absolute h-[50%] ">
          <Image fill alt="" src={"/Mask group.svg"} />
        </div>
      </div>

      {/*races cards */}

      <div className="z-30 flex flex-col mb-[5vh] lg:flex-row p-[1vh]  bg-gradient-to-b   from-transparent to-black  justify-evenly items-center h-auto lg:h-[50vh] w-full">
        {races.map((race) => (
          <Link
            href={race.diraction}
            key={race.name}
            className=" w-[50%] h-[40vh] lg:h-[95%] lg:w-[15%] race-card overflow-hidden relative flex justify-center items-end  bg-black border-3 border-primary"
          >
            <Image className="race-image" fill alt="" src={race.image} />

            <span className=" w-full text-primary text-[clamp(1rem,3vw,1.4rem)] font-serif72 border-t-3 border-primary flex justify-center items-center z-20 bg-black/90 h-[20%] text-center">
              {race.name.split("Les")[1]}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
