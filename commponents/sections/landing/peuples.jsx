"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function Peuples() {
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
    <div className="flex flex-col  bg-white gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <div className="absolute hidden bottom-0 left-1/2 md:flex  -translate-x-1/2 w-[100%] z-30 h-[100%] ">
        <Image
          fill
          className="object-center object-cover"
          alt=""
          src="/home/race-bg.png"
        />
      </div>

      <div className="absolute flex md:hidden  bottom-0 left-1/2  -translate-x-1/2 w-[100%] z-30 h-[100%] ">
        <Image
          fill
          className="object-center object-cover"
          alt=""
          src="/races/Bg-races-phone.png"
        />
      </div>

      {/* Blue Filter */}
      <div className="absolute inset-0 bg-gradient-to-b pointer-events-none from-transparent to-[#19275E] z-10" />

      {/* Header */}
      <div className="h-[20vh] w-full mt-[3%] flex flex-col justify-center items-center z-30">
        <span className="text-[clamp(1rem,7vw,4.5rem)] md:text-[clamp(1rem,5vw,3.5rem)] text-center font-serif72 text-white">
          LES PEUPLES D'ASCENDIA
        </span>

        <span className="text-[clamp(1rem,2vw,1.3rem)] w-[90%] md:w-[55%] text-center font-light text-white">
          Cinq civilisations anciennes ont fui vers la Terre, chacune apportant
          pouvoir, sagesse et secrets.
        </span>
      </div>

      {/* Carousel */}
      <div className="relative z-30 w-screen h-screen">
        {/* Previous */}
        <button
          onClick={() => setCurrentPeuple((prev) => Math.max(prev - 1, 0))}
          className="absolute cursor-pointer left-[3%] top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#989898]/60 font-bold flex items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3">
            <Image fill alt="Previous" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Next */}
        <button
          onClick={() =>
            setCurrentPeuple((prev) => Math.min(prev + 1, Peuples.length - 1))
          }
          className="absolute right-[3%] cursor-pointer top-1/2 -translate-y-1/2 z-40 w-[8vh] md:w-[10vh] aspect-square bg-[#989898]/60 font-bold  flex items-center justify-center"
        >
          <div className="relative w-1/3 scale-115 h-1/3 rotate-180">
            <Image fill alt="Next" src="/icons8-left-50.png" />
          </div>
        </button>

        {/* Sections Container */}
        <div
          ref={containerRef}
          className="flex h-screen  w-screen overflow-y-hidden overflow-x-hidden snap-x snap-mandatory scrollbar-hide"
        >
          {Peuples.map((peuple, index) => (
            <div
              key={index}
              className="relative flex overflow-hidden h-screen w-screen shrink-0 snap-center flex-col items-center justify-end pb-[10%]"
            >
              <span className="uppercase z-30 font-serif72  text-[clamp(1rem,7vw,3.5rem)] md:text-[clamp(1rem,3vw,3.5rem)] font-bold text-white">
                {peuple.name}
              </span>

              <span className=" w-[90%] md:w-1/2 text-center z-30 text-[clamp(1rem,2vw,1.8rem)] font-light text-white">
                {peuple.description}
              </span>

              <div className="absolute  inset-x-0 z-5 h-full w-full -translate-x-1/2 left-1/2   -bottom-[15%]">
                <div className="absolute inset-0 bg-gradient-to-b  from-transparent to-[#19275E]/50 z-10" />
                <Image
                  fill
                  src={peuple.image}
                  alt={peuple.name}
                  className={`object-contain ${peuple.name === "Luminels" ? "scale-100" : "scale-170"} inset-0 absolute  lg:scale-115 lg:object-contain`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-0 z-40 flex h-[5vh] md:h-[10vh] w-full items-center justify-center gap-2">
        {Peuples.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPeuple(index)}
            className="relative h-5 w-5 cursor-pointer rounded-full border-2 border-white/70"
          >
            <div
              className={`absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full ${
                currentPeuple === index ? "bg-white/70" : ""
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
