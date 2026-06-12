"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/context/main.context";

export default function Races({ currentRace, races }) {
  const { currentNav, setCurrentNav, currentSubNav, setCurrentSubNav } =
    useMainContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentRaceIndex = races.findIndex(
      (race) => race.name === currentRace.name,
    );

    console.log(currentRaceIndex);

    setCurrentIndex(currentRaceIndex);
  }, []);

  return (
    <div className="flex  overflow-hidden  justify-around items-center flex-row  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-[30vh]">
      {currentIndex - 1 < 0 ? (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[15vh] flex justify-center items-center border border-primary"
          href={"/races"}
        >
          Retour aux Races
        </Link>
      ) : (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[15vh] flex justify-center items-center border border-primary"
          href={races[currentIndex - 1]?.diraction}
          onClick={() => {
            setCurrentSubNav(races[currentIndex - 1]?.name);
          }}
        >
          ← Découvrir {races[currentIndex - 1]?.name}
        </Link>
      )}

      {currentIndex + 1 > races.length - 1 ? (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[15vh] flex justify-center items-center border border-primary"
          href={"/races"}
        >
          Retour aux Races
        </Link>
      ) : (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[15vh] flex justify-center items-center border border-primary"
          href={races[currentIndex + 1]?.diraction}
          onClick={() => {
            setCurrentSubNav(races[currentIndex + 1]?.name);
          }}
        >
          Découvrir {races[currentIndex + 1]?.name} →
        </Link>
      )}
    </div>
  );
}
