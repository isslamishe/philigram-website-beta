"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import Hero from "@/commponents/sections/races/race commponents/hero.jsx";
import Content from "@/commponents/sections/races/race commponents/content.jsx";
import SwitchButtons from "@/commponents/sections/races/race commponents/switch.buttons.jsx";
import { useMainContext } from "@/lib/context/main.context";
import { getRaces } from "@/data/races.jsx";
import { useParams } from "next/navigation";

export default function Races() {
  const { setCurrentNav, language } = useMainContext();

  const [race, setRace] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const foundRace = getRaces(language).find(
      (r) => r.id === decodeURIComponent(id).trim().toLowerCase(),
    );

    const foundRace2 = getRaces(language).map((r) => {
      console.log(r.id, decodeURIComponent(id).trim().toLowerCase());
    });
    console.log(id);

    setRace(foundRace);
  }, [id, language]);

  if (!race)
    return (
      <div className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen"></div>
    );

  return (
    <div className="flex flex-col overflow-hidden justify-end  bg-black gap-0 bg-no-repeat bg-cover bg-center relative w-screen min-h-screen">
      <Hero race={race} />
      <Content content={race.content} />
      <SwitchButtons currentRace={race} races={getRaces(language)} />
    </div>
  );
}
