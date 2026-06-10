"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/race commponents/hero.jsx";
import Content from "@/commponents/sections/races/race commponents/content.jsx";
import SwitchButtons from "@/commponents/sections/races/race commponents/switch.buttons.jsx";
import { useMainContext } from "@/context/main.context";
import { races } from "@/data/races.jsx";
import { useParams } from "next/navigation";

export default function Races() {
  const { setCurrentNav } = useMainContext();

  const [race, setRace] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const race = races.find(
      (r) =>
        r.name.split("Les")[1].trim().toLowerCase() ===
        decodeURIComponent(id).trim().toLowerCase(),
    );

    setRace(race);
  }, []);

  if (!race)
    return (
      <div className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen"></div>
    );

  return (
    <div className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <Hero race={race} />
      <Content content={race.content} />
      <SwitchButtons currentRace={race} races={races} />
    </div>
  );
}
