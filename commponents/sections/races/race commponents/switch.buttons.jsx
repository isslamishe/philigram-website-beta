"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useMainContext } from "@/lib/context/main.context";
import { t } from "@/lib/i18n/translation";

export default function Races({ currentRace, races }) {
  console.log(races);
  const {
    currentNav,
    setCurrentNav,
    currentSubNav,
    setCurrentSubNav,
    language,
  } = useMainContext();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const currentRaceIndex = races.findIndex(
      (race) => race.id === currentRace.id,
    );

    setCurrentIndex(currentRaceIndex);
  }, [currentRace, races]);

  return (
    <div className="flex  overflow-hidden  justify-around items-center flex-row  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-[30vh]">
      {currentIndex - 1 < 0 ? (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[10dvh] md:h-[15vh] flex justify-center items-center border border-primary"
          href={"/races"}
        >
          {t("races.switchbuttons.backToRaces", language)}
        </Link>
      ) : (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[10dvh] md:h-[15vh] flex justify-center items-center border border-primary"
          href={races[currentIndex - 1]?.diraction}
          onClick={() => {
            setCurrentSubNav(races[currentIndex - 1]?.id);
          }}
        >
          ← {t("races.switchbuttons.discoverPrefix", language)}{" "}
          {races[currentIndex - 1]?.name}
        </Link>
      )}

      {currentIndex + 1 > races.length - 1 ? (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[10dvh] md:h-[15vh] flex justify-center items-center border border-primary"
          href={"/races"}
        >
          {t("races.switchbuttons.backToRaces", language)}
        </Link>
      ) : (
        <Link
          className="w-[40%] hover:scale-110 transition-all duration-300 delay-100 uppercase font-serif72 text-primary text-center text-[clamp(0.6rem,2vw,1.2rem)]  md:text-[clamp(1rem,2vw,1.5rem)] h-[10dvh] md:h-[15vh] flex justify-center items-center border border-primary"
          href={races[currentIndex + 1]?.diraction}
          onClick={() => {
            setCurrentSubNav(races[currentIndex + 1]?.id);
          }}
        >
          {t("races.switchbuttons.discoverPrefix", language)}{" "}
          {races[currentIndex + 1]?.name} →
        </Link>
      )}
    </div>
  );
}
